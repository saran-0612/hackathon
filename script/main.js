
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

audio.addEventListener('loadedmetadata', function() {
    const duration = formatTime(audio.duration);
    durationDisplay.textContent = duration;
    progressBar.max = audio.duration;
});

playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

audio.addEventListener('timeupdate', function() {
    const currentTime = audio.currentTime;
    progressBar.value = currentTime;
    currentTimeDisplay.textContent = formatTime(currentTime);
});

progressBar.addEventListener('input', function() {
    audio.currentTime = progressBar.value;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}
