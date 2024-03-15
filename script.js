const videos = document.querySelectorAll('#video3');

function verifyInput(event){
    if (event.key.toUpperCase() === 'O'){
        console.log('Techou')
        document.removeEventListener('keydown', verifyInput);
    } else {
        console.log('E tome gueb')
        document.removeEventListener('keydown', verifyInput);
    }
}

function techWindow(video) {
    let currentTime = 0;
    video.addEventListener('timeupdate', function() {
        currentTime = video.currentTime;
        if (currentTime < 1.979 && currentTime > 1.663){
            document.addEventListener('keydown', verifyInput);
        } else {
            document.removeEventListener('keydown', verifyInput);
        }
    });
}

videos.forEach(techWindow);
