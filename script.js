
const video3 = document.getElementById('video3');
const video3Tech = video3.nextElementSibling;

console.log(video3);
console.log(video3Tech);

function verifyInput(event){
    if (event.key.toUpperCase() === 'O'){
        video3.classList.remove('active');
        video3Tech.classList.add('active');
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

techWindow(video3);