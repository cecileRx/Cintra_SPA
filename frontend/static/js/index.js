import Home from "./views/Home.js";
import About from "./views/About.js";
import Projects from "./views/Projects.js";
import ProjectView from "./views/ProjectView.js";
import Contact from "./views/Contact.js";

// ROUTER CONFIGURATION

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

window.addEventListener("popstate",router);


function checkURLchange() {

  var homePath ="/"
  var aboutPath = "/about"
  var projectsPath = "/projects"
  var newURL = window.location.pathname

  if (newURL != oldURL) {

    oldURL = newURL;
    setInterval(checkURLchange, 0);

    if (newURL === homePath) {
      animHome();
      animLinksHome();
    } else if (newURL === aboutPath) {
      animAbout();
      backHome();

    } else if (newURL === projectsPath) {
      animFirstBlock();
      backHome();
    }
  }
}

var oldURL = window.location.pathname;
setInterval(checkURLchange, 1000);
setInterval(checkURL, 1000);

function checkURL() {
  return window.location.pathname;
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});

// NAVIGATION TO VIEWS

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.currentTarget.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.currentTarget.href.baseVal);
    }
  })

  router();
})

// BACKHOME FOR ALL VIEWS

function backHome() {
  const backHome = document.querySelector('.atom-link')
  gsap.to("#atom", 30, { rotation: '+=360', repeat: -1, transformOrigin: '50% 50%' });
  backHome.addEventListener("click", e => {
    gsap.to("#atom", 2, { opacity: 0 });
    gsap.to("#about-container", 2, { opacity: 0 });
    gsap.to(".img-container", 1, { opacity: 0 });
    gsap.to('hr', { x: 1000, duration: 1 });
    gsap.to('.title-projects-view', 1, { opacity: 0 });
    e.preventDefault();
    const target = e.currentTarget.href.baseVal;
    setTimeout(function () {
      navigateTo(target);
    }, 1500);
  });
};


// MENU

function animHome() {
  gsap.to('#calque_1 a', {
    delay: 0.5,
    duration: 2,
    autoAlpha: 1
  })
  gsap.to('#calque_1', {
    autoAlpha: 1,
    duration: 1,
    scale: 0.95,
  });
  gsap.to('.signature p', {
    autoAlpha: 1,
    duration: 1.3
  })
  gsap.to('.signature h3', {
    autoAlpha: 1,
    duration: 2
  })
  gsap.to('.particule', {
    duration: 200,
    y: "random(-200,200, 5)",
    x: "random(-200, 200, 5)",
    repeat: -1
  });
  gsap.to('#calque_1', 900, { rotation: '+=360', repeat: -1, transformOrigin: '30% 50%' });
  gsap.to('#calque_1 .projects-link',900, { rotation: '-=360', repeat: -1, transformOrigin: '80% 80%' });
  gsap.to('#calque_1 .about-link',900, { rotation: '-=360', repeat: -1, transformOrigin: '40% 40%' });
  gsap.to('#calque_1 .contact-link',900, { rotation: '-=360', repeat: -1, transformOrigin: '95% 25%' });
};


document.addEventListener("DOMContentLoaded", function () {
  if (location.pathname === "/") {
    window.onload = animHome();
    animLinksHome();
  } else if (location.pathname === "/about") {
    window.onload = animAbout();
  } else if (location.pathname === "/projects") {
    window.onload = animFirstBlock();
  }
});



function animLinksHome() {
  if (location.pathname === "/") {
    const moleculeLinks = document.querySelectorAll('.molecule-link');
    moleculeLinks.forEach(function(link) {
      link.addEventListener("click", e => {

        if (e.currentTarget.matches("[data-link]")) {
          e.preventDefault();
          if (e.currentTarget.classList.contains("about-link")) {
            explode(16,16)
          } else if (e.currentTarget.classList.contains("projects-link")) {
            explode(105,82)
          } else {
            explode(12,112)
          }

          var target = e.currentTarget.href.baseVal;
          console.log('target', target)
          setTimeout(function () {
            navigateTo(target);
          }, 1500);
          const textLinks = document.querySelectorAll('text');
          const title = document.querySelector('.title');
          gsap.to(textLinks, {
            duration: 2,
            opacity: 0
          })
          gsap.to(title, {
            duration: 2,
            opacity: 0
          })
        }
      });
    });
  }
}


function explode(x_center, Y_center) {
  TweenLite.defaultEase = Linear.easeNone;

  var bounds = $("#logo-cadre-elements")[0].getBBox();
  console.log("bound",bounds)
  var blast = $("#blast");

  var center = {
    x: x_center,
    y: Y_center,
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


//ABOUT VIEW

function animAbout() {

  const atom = document.querySelector('#atom');
  const aboutTitle = document.querySelector('.about-title');
  const aboutText1 = document.querySelector('.about-prem');
  const aboutText2 = document.querySelector('.about-text_2');
  const aboutText3 = document.querySelector('.about-text_3');

  const TL = gsap.timeline();

  TL
    .to(atom, { autoAlpha: 1 })
    .to(aboutTitle, { autoAlpha: 1, duration: 1 }, '-=0.75')
    .to(aboutText1, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.75')
    .to(aboutText2, { autoAlpha: 1, y: 0, duration: 1 },'-=0.55')
    .to(aboutText3, { autoAlpha: 1, y: 0, duration: 1 },'-=0.55')
}

// PROJECTS VIEW

gsap.registerPlugin(ScrollTrigger);


function animFirstBlock(){
  gsap.to(atom, { autoAlpha: 1 });

  const firstBlockImage = document.querySelector('img.bloc1');
  const firstBlockText = document.querySelector('.bloctext1');
  const title = document.querySelector('.title-projects-view');

  const TL = gsap.timeline();

  TL
    .to('hr', { x: 0, duration: 0.5 })
    .to(title, { autoAlpha: 1, duration: 0.3 }, '-=0.55')
    .to(firstBlockImage, { autoAlpha: 1, x: 0, duration: 0.7 }, '-=0.55')
    .to(firstBlockText, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.75')

  const revealFromLeftImage = document.querySelectorAll('img.reveal_from_left');
  const revealFromLeftText = document.querySelectorAll('.scroll-text.reveal_from_left');

  revealFromLeftText.forEach(el => {
    gsap.to(el, {
      autoAlpha: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: el,
        start: "top-=100 center+=200",
        toggleActions: "play pause resume reverse"
      }
    })
  })

  revealFromLeftImage.forEach(el => {
    gsap.to(el, {
      autoAlpha: 1, x: 0, duration: 0.7, scrollTrigger: {
        trigger: el,
        start: "top-=150% center",
        toggleActions: "play pause resume reverse"
      }
    });
  })

  const revealFromRightImage = document.querySelectorAll('.projects-thumb.right');
  const revealFromRightText = document.querySelectorAll('.scroll-text');

  revealFromRightText.forEach(el => {
    gsap.to(el, {
      autoAlpha: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: el,
        start: "top-=140 center+=200",
        toggleActions: "play pause resume reverse"
      }
    })
  })

  revealFromRightImage.forEach(el => {
    gsap.to(el, {
      autoAlpha: 1, x: 0, duration: 0.7, scrollTrigger: {
        trigger: el,
        start: "top-=120% center",
        toggleActions: "play pause resume reverse"
      }
    });
  })
}


// AUDIOPLAYER

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
