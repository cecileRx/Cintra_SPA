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

window.addEventListener("popstate",router);

function checkURLchange() {
  // ATTENTION SEULEMNT EN DEVELOPPEMENT!!!!!!!!!!!!!!!!!!!!
  var devHomePath = "http://localhost:3000/"
  var devAboutPath = "http://localhost:3000/about"
  var devProjectsPath = "http://localhost:3000/projects"

  var newURL = window.location.href
  if (newURL != oldURL) {
    console.log(newURL);
    oldURL = newURL;
    setInterval(checkURLchange, 0);
    if (newURL === devHomePath) {
      animHome();
      animLinksHome();
    } else if (newURL === devAboutPath) {
      animAbout();
      backHome();

    } else if (newURL === devProjectsPath) {
      animFirstBlock();
      backHome();
    }
  }
}

var oldURL = window.location.href;
setInterval(checkURLchange, 1000);


document.addEventListener("DOMContentLoaded", () => {
  router();
});

// VIEWS NAVIGATION

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.currentTarget.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.currentTarget.href.baseVal);
    }
  })

  router();
})



// MENU

function animHome() {
  gsap.to('#calque_1 a', {
    delay: 0.5,
    duration: 2,
    autoAlpha: 1
  })
  gsap.to('#calque_1', {
    duration: 1,
    scale: 0.95,
  });
};


document.addEventListener("DOMContentLoaded", function (event) {
  if (location.pathname === "/") {
    window.onload = animHome();
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






document.addEventListener("DOMContentLoaded", function (event) {
  animLinksHome();
});

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

// BACKHOME FOR ALL VIEWS

function backHome(){
  const backHome = document.querySelector('.atom-link')
  backHome.addEventListener("click", e => {
    const target = e.currentTarget.href.baseVal;
    e.preventDefault();
    navigateTo(target);
  });
};

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

// function circleMouse() {
//   gsap.set(".ball", { xPercent: -50, yPercent: -50 });

//   const ball = document.querySelector(".ball");
//   const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//   const mouse = { x: pos.x, y: pos.y };
//   const speed = 0.2;

//   const xSet = gsap.quickSetter(ball, "x", "px");
//   const ySet = gsap.quickSetter(ball, "y", "px");

//   window.addEventListener("mousemove", e => {
//     mouse.x = e.x;
//     mouse.y = e.y;
//   });

//   gsap.ticker.add(() => {

//     // adjust speed for higher refresh monitors
//     const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

//     pos.x += (mouse.x - pos.x) * dt;
//     pos.y += (mouse.y - pos.y) * dt;
//     xSet(pos.x);
//     ySet(pos.y);
//   });
// };

function animFirstBlock(){

  const firstBlockImage = document.querySelector('img.bloc1');
  const firstBlockText = document.querySelector('.bloctext1');
  const title = document.querySelector('.title-projects-view');
  // const secondBlockImage = document.querySelector('img.bloc2');
  // const secondBlockText = document.querySelector('.scroll-text.bloc2');


  const TL = gsap.timeline();

  TL
    .to(title, {autoAlpha: 1, duration: 0.3})
    .to(firstBlockImage, { autoAlpha: 1, x: 0, duration: 0.7 }, '-=0.75')
    .to(firstBlockText, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.75')
    // .to(secondBlockImage, { autoAlpha: 1, x: 0, duration: 0.7 },'-=0.75')
    // .to(secondBlockText, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.75')

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
        start: "top-=100% center",
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
        start: "top-=100 center+=200",
        toggleActions: "play pause resume reverse"
      }
    })
  })

  revealFromRightImage.forEach(el => {
    gsap.to(el, {
      autoAlpha: 1, x: 0, duration: 0.7, scrollTrigger: {
        trigger: el,
        start: "-80% center",
        toggleActions: "play pause resume reverse"
      }
    });
  })

}




// function animCardProject() {
//   const cardProject = document.querySelectorAll('.card-project img')

//   gsap.utils.toArray(cardProject).forEach(el => {
//     console.log("element", el)

//     let animation = gsap.fromTo(el, { scale: 1 }, {
//       scale: 1.01,
//       stagger: 0.08,
//       paused: true
//     });
//     el.addEventListener("mouseover", () => animation.play());
//     el.addEventListener("mouseout", () => animation.reverse());
//   });
// };


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
