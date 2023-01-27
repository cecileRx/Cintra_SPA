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

const links = document.querySelectorAll('.molecule-link');

const moleculeLink = document.querySelectorAll('.molecule-link');
const textLinks = document.querySelectorAll('text');
const newPage = document.querySelector('.another-page');

function goLink(moleculeLink) {
  console.log('clickkkk')
  gsap.to('image', {
    duration: 1,
    scale: 0.2,
    x: -10,
    y: 0
  });

  textLinks.forEach(link => link.style.display = 'none');

}

document.addEventListener("DOMContentLoaded", () => {

  for (const link of links) {
    console.log(link);
    link.addEventListener("click", e => {
      if (e.currentTarget.matches("[data-link]")) {
        e.preventDefault();
        goLink(moleculeLink);
        navigateTo(e.currentTarget.href.baseVal)
      }
    })
  }
  router();
});




// MENU

const image = document.querySelector('image');
const text = document.querySelector('text')

image.addEventListener('mouseover', () => {
  gsap.to('image', {
    duration: 1,
    scale: 1.05,
    y: -12
  });
  gsap.to('text', {
    duration: 2,
    opacity: 1
  })
});



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
