// getting the videos into const
const video1 = document.getElementById("video1");
const video1Tech = video1.nextElementSibling;
const video2 = document.getElementById("video2");
const video2Tech = video2.nextElementSibling;
const video3 = document.getElementById("video3");
const video3Tech = video3.nextElementSibling;
const allVideos = document.querySelectorAll("video");

// listing the videos and tech windows
const videos = [video1, video2, video3];
const techWindows = [techWindow1, techWindow2, techWindow3];

// variables to fix bugs
let wrongInputRegistered = false;
let checkFreezeTime = 0;

// verifies if input from video 1 is correct
function verifyInput1(event) {
  if (!wrongInputRegistered && event.key.toUpperCase() === "U") {
    video1.classList.remove("active");
    video1Tech.classList.add("active");
    document.removeEventListener("keydown", verifyInput1);
  } else {
    document.removeEventListener("keydown", verifyInput1);
    wrongInputRegistered = true;
  }
}

// window of teching that the player can input in video 1
function techWindow1(video) {
  let currentTime = 0;
  video.addEventListener("timeupdate", function () {
    currentTime = video.currentTime;
    if (currentTime < 0.83 && currentTime > 0.47) {
      // 0,33s = 20f
      document.addEventListener("keydown", verifyInput1);
    } else {
      document.removeEventListener("keydown", verifyInput1);
    }
  });
}

// verifies if input from video 2 is correct
function verifyInput2(event) {
  if (!wrongInputRegistered && event.key.toUpperCase() === "I") {
    video2.classList.remove("active");
    video2Tech.classList.add("active");
    document.removeEventListener("keydown", verifyInput2);
  } else {
    document.removeEventListener("keydown", verifyInput2);
    wrongInputRegistered = true;
  }
}

// window of teching that the player can input in video 2
function techWindow2(video) {
  let currentTime = 0;
  video.addEventListener("timeupdate", function () {
    currentTime = video.currentTime;
    if (currentTime < 0.76 && currentTime > 0.43) {
      // 0,33s = 20f
      document.addEventListener("keydown", verifyInput2);
    } else {
      document.removeEventListener("keydown", verifyInput2);
    }
  });
}

// verifies if input from video 3 is correct
function verifyInput3(event) {
  if (!wrongInputRegistered && event.key.toUpperCase() === "O") {
    video3.classList.remove("active");
    video3Tech.classList.add("active");
    document.removeEventListener("keydown", verifyInput3);
  } else {
    document.removeEventListener("keydown", verifyInput3);
    wrongInputRegistered = true;
  }
}

// window of teching that the player can input in video 3
function techWindow3(video) {
  let currentTime = 0;
  video.addEventListener("timeupdate", function () {
    currentTime = video.currentTime;
    if (currentTime < 0.66 && currentTime > 0.33) {
      // 0,33s = 20f
      document.addEventListener("keydown", verifyInput3);
    } else {
      document.removeEventListener("keydown", verifyInput3);
    }
  });
}

// video randomizer
function startRandomVideo() {
  // restarts input registered variable
  wrongInputRegistered = false;

  // uses video list length to get index
  const randomVideoIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomVideoIndex];
  const randomTechWindow = techWindows[randomVideoIndex];

  // disabling every video to make sure only one is active at a time
  allVideos.forEach((video) => {
    video.classList.remove("active");
    video.currentTime = 0;
  });
  // important to restart video before activating it
  randomVideo.currentTime = 0;
  randomVideo.classList.add("active");

  // activates techWindow$id with the correct index
  randomTechWindow(randomVideo);
}


// handles video freeze that happens for some reason
function checkVideoFreeze() {
    const activeVideo = document.getElementsByClassName('active')[0];
    if (activeVideo.currentTime === checkFreezeTime) {
        activeVideo.play();
    } else {
        checkFreezeTime = activeVideo.currentTime;
    }
}

startRandomVideo();

// if a video ends, let's start a random one
allVideos.forEach((video) => {
  video.addEventListener("ended", startRandomVideo);
});

// checks video freezes every 100ms
setInterval(checkVideoFreeze, 100);
