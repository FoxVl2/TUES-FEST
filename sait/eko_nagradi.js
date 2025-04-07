function loadPoints() {
    const savedPoints = localStorage.getItem('userPoints');
    return savedPoints ? parseInt(savedPoints) : 50;
}


function savePoints(points) {
    localStorage.setItem('userPoints', points);
}

let points = loadPoints(); 
function updatePointsDisplay() { 
    document.getElementById('pointsDisplay').innerText = points;
}

function buyOffer(requiredPoints) {
    const messageElement = document.getElementById('message');

    if (points >= requiredPoints) {
        points -= requiredPoints; 
        savePoints(points); 
        updatePointsDisplay();
        window.location.href="QR2.html"
    } else {
        window.location.href="upraznenia.html"
    }

    setTimeout(() => {
        messageElement.innerText = "";
    }, 3000);
}


updatePointsDisplay();
