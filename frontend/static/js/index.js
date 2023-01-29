import Home from "./views/Home.js";
import About from "./views/About.js";
import Projects from "./views/Projects.js";
import ProjectView from "./views/ProjectView.js";
import Contact from "./views/Contact.js";


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));
};

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router  = async () => {

  const routes = [
    { path: "/", view: Home },
    { path: "/projects", view: Projects },
    { path: "/projects/:id", view: ProjectView },
    { path: "/about", view: About },
    { path: "/contact", view: Contact },
  ];
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  });
  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

   if (!match) {
        match = {
          route: routes[0],
          result: [location.pathname]
        };
   }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);


const about = document.querySelector('.about-link');
const textLinks = document.querySelectorAll('text');

document.addEventListener("DOMContentLoaded", () => {
    about.addEventListener("click", e => {
      if (e.currentTarget.matches("[data-link]")) {
        e.preventDefault();
        explode(6, 6)
        var target = e.currentTarget.href.baseVal;
        setTimeout(function () {
          navigateTo(target);
        }, 2000);
        textLinks.forEach(link => link.style.display = 'none');
      }
    })
  router();
});






// MENU

document.addEventListener("DOMContentLoaded", function (event) {

  window.onload = function () {
    gsap.set('#calque_1', { autoAlpha:1, x: -180, y: -60, scale: 0.35 });
    gsap.to('#calque_1 a', {
      delay: 1,
      duration: 3,
      autoAlpha: 1
    })
    gsap.to('#calque_1', {
    delay: 0.5,
    duration: 1,
    scale: 0.4,
  });
  };
});



function explode(x_center, Y_center) {
  TweenLite.defaultEase = Linear.easeNone;

  var bounds = $("#logo-cadre-elements")[0].getBBox();
  var blast = $("#blast");

  var center = {
    x: bounds.x + bounds.width / x_center,
    y: bounds.y + bounds.height / Y_center,
  };

  var stagger = 0.5;
  var radius = getDistance(center, bounds);

  TweenLite.set(blast, { attr: { r: radius, cx: center.x, cy: center.y } });
  TweenLite.set(blast, { transformOrigin: "center", scale: 0 });

  var tl = new TimelineMax()
    .to(blast, stagger, { scale: 1 }, 0)
    .to(blast, stagger, { scale: 2, autoAlpha: 0 }, stagger)

  $(".element").each(function (i, element) {

    var bbox = element.getBBox();
    var dist = getDistance(bbox, center);
    var delay = dist / radius * stagger;
    var scalar = radius / dist;

    tl.to(element, 2, {
      autoAlpha: 0,
      x: (bbox.x - center.x) * scalar,
      y: (bbox.y - center.y) * scalar
    }, delay);
  });

  TweenMax.to(tl, 3, {
    progress: 1.5,
    ease: Expo.easeInOut,

  });

  function getDistance(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }


}




// // AUDIOPLAYER

var audioTrack = WaveSurfer.create({
  container: '.audio',
  waveColor: '#28ABE2',
  progressColor: '#103A61',
  height: 90,
  barWidth: 0.5,
  cursorColor: 'rgba(34, 34, 34, 0.2)',
  responsive: true
});


var nextTrack = document.querySelector('.fa-forward');
var previousTrack = document.querySelector('.fa-backward');
var audioPath = '/static/audio/'
var playList = ['Greedy Guns_Miguel Cintra_Prelude (gameplay extended theme).wav', 'track_01.mp3', 'track_02.mp3', 'track_03.mp3'];
var trackNumber = 0;
var playedTrack = playList[trackNumber];
console.log(playedTrack)
audioTrack.load(audioPath + playedTrack);

function playTrack() {
  var playedTrack = playList[trackNumber];
  console.log(playedTrack)
  audioTrack.load(audioPath + playedTrack);
  document.querySelector('.track-name').innerText = playedTrack;
  audioTrack.on('ready', function () {
    audioTrack.play();
  });
}

nextTrack.addEventListener('click', () => {

  if (trackNumber === playList.length - 1) {
    trackNumber = 0;
    playTrack();
  } else {
    trackNumber += 1;
    playTrack();
  }
});

previousTrack.addEventListener('click', () => {
  if (trackNumber === 0) {
    trackNumber = playList.length - 1;
    playTrack();
  } else {
    trackNumber -= 1;
    playTrack();
  }
});


document.querySelector('.track-name').innerText = playedTrack;


const play = document.querySelector('.play-btn');


play.addEventListener('click', () => {
  console.log('ok')
  audioTrack.playPause();

  if (audioTrack.isPlaying()) {
    play.classList.add("playing");
  } else {
    play.classList.remove("playing");
  }
});
