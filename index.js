var i = 1;
const audio = document.getElementById('myAudio'); // Define the audio element

document.querySelector(".cd").addEventListener('click', function() {
    i += 1;
    if (i % 2 === 0) {
        audio.play(); // Play the audio
        this.classList.add('cdclick'); 
    } else if (i % 2 === 1) {
        audio.pause(); // Pause the audio
        this.classList.remove('cdclick');
    }
});
document.querySelector(".cdcover").addEventListener('click', function() {
    i += 1;
    if (i % 2 === 0) {
        audio.play(); // Play the audio
        document.querySelector(".cd").classList.add('cdclick'); 
    } else if (i % 2 === 1) {
        audio.pause(); // Pause the audio
        document.querySelector(".cd").classList.remove('cdclick');
    }
});
