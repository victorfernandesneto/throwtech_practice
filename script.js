const video1 = document.getElementById('video1');
const video1Tech = video1.nextElementSibling;
const video2 = document.getElementById('video2');
const video2Tech = video2.nextElementSibling;
const video3 = document.getElementById('video3');
const video3Tech = video3.nextElementSibling;
const allVideos = document.querySelectorAll('video');
const videos = [video1, video2, video3]
const techWindows = [techWindow1, techWindow2, techWindow3];
let wrongInputRegistered = false;


function verifyInput1(event){
    if (!wrongInputRegistered && event.key.toUpperCase() === 'U'){
        video1.classList.remove('active');
        video1Tech.classList.add('active');
    } else {
        document.removeEventListener('keydown', verifyInput1);
        wrongInputRegistered = true;
    }
}

function techWindow1(video) {
    let currentTime = 0;
    video.addEventListener('timeupdate', function() {
        currentTime = video.currentTime;
        if (currentTime < 0.85 && currentTime > 0.45){ // 0,33s = 20f
            document.addEventListener('keydown', verifyInput1);
        } else {
            document.removeEventListener('keydown', verifyInput1);
        }
    });
}

function verifyInput2(event){
    if (!wrongInputRegistered && event.key.toUpperCase() === 'I'){
        video2.classList.remove('active');
        video2Tech.classList.add('active');
    } else {
        document.removeEventListener('keydown', verifyInput2);
        wrongInputRegistered = true;
    }
}

function techWindow2(video) {
    let currentTime = 0;
    video.addEventListener('timeupdate', function() {
        currentTime = video.currentTime;
        if (currentTime < 0.8 && currentTime > 0.4){ // 0,33s = 20f
            document.addEventListener('keydown', verifyInput2);
        } else {
            document.removeEventListener('keydown', verifyInput2);
        }
    });
}

function verifyInput3(event){
    if (!wrongInputRegistered && event.key.toUpperCase() === 'O'){
        video3.classList.remove('active');
        video3Tech.classList.add('active');
    } else {
        document.removeEventListener('keydown', verifyInput3);
        wrongInputRegistered = true;
    }
}

function techWindow3(video) {
    let currentTime = 0;
    video.addEventListener('timeupdate', function() {
        currentTime = video.currentTime;
        if (currentTime < 0.7 && currentTime > 0.3){ // 0,33s = 20f
            document.addEventListener('keydown', verifyInput3);
        } else {
            document.removeEventListener('keydown', verifyInput3);
        }
    });
}

function startRandomVideo() {
    wrongInputRegistered = false;
    
    const randomVideoIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomVideoIndex];
    const randomTechWindow = techWindows[randomVideoIndex];

    allVideos.forEach(video => {
        video.classList.remove('active');
        video.currentTime = 0;
    });
    randomVideo.currentTime = 0;
    randomVideo.classList.add('active');

    randomTechWindow(randomVideo);
}

startRandomVideo();

allVideos.forEach(video => {
    video.addEventListener('ended', startRandomVideo);
});