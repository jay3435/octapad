// Define the sounds for each drum
const sounds = {
    drum1: 'sounds/drum1.mp3',
    drum2: 'sounds/drum2.mp3',
    drum3: 'sounds/drum3.mp3',
    drum4: 'sounds/drum4.mp3',
    drum5: 'sounds/drum5.mp3',
    drum6: 'sounds/drum6.mp3',
    drum7: 'sounds/drum7.mp3',
    drum8: 'sounds/drum8.mp3'
};

// Function to play sound
function playSound(drumId) {
    const audio = new Audio(sounds[drumId]);
    audio.play();
}

// Add event listeners to buttons
document.getElementById('drum1').addEventListener('click', () => playSound('drum1'));
document.getElementById('drum2').addEventListener('click', () => playSound('drum2'));
document.getElementById('drum3').addEventListener('click', () => playSound('drum3'));
document.getElementById('drum4').addEventListener('click', () => playSound('drum4'));
document.getElementById('drum5').addEventListener('click', () => playSound('drum5'));
document.getElementById('drum6').addEventListener('click', () => playSound('drum6'));
document.getElementById('drum7').addEventListener('click', () => playSound('drum7'));
document.getElementById('drum8').addEventListener('click', () => playSound('drum8'));
