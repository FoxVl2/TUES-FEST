
let points = 0;

function initPoints() {
    const savedPoints = localStorage.getItem('workoutPoints');
    points = savedPoints ? parseInt(savedPoints) : 0;
    updatePointsDisplay();
}


function savePoints() {
    localStorage.setItem('workoutPoints', points.toString());
}


function updatePointsDisplay() {
    const displays = document.querySelectorAll('.points-display, .points-button');
    displays.forEach(element => {
        element.textContent = `Точки: ${points}`;
    });
}


function addExercisePoints(amount) {
    points += amount;
    savePoints();
    updatePointsDisplay();
}


function redeemPoints(requiredPoints) {
    if (points >= requiredPoints) {
        points -= requiredPoints;
        savePoints();
        updatePointsDisplay();
        window.location.href = "QR2.html";
    } else {
        window.location.href = "upraznenia.html";
    }
}


document.addEventListener('DOMContentLoaded', initPoints);