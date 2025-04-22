
let points = 0;
const config = {
    initialPoints: 0,
    pointsKey: 'workoutPoints',
    redirectDelay: 2000,
    messageDisplayTime: 3000
};


const products = [
    { name: "Фитнес събитие", points: 10000, description: "Вдъхновява за активен живот" },
    { name: "Маратон", points: 22000, description: "Тества издръжливостта" },
    { name: "Състезание за сила", points: 16700, description: "Показва границите на възможностите" }

];


document.addEventListener('DOMContentLoaded', function() {
    initPointsSystem();
    setupEventListeners();
});


function initPointsSystem() {
    if (!localStorage.getItem(config.pointsKey)) {
        localStorage.setItem(config.pointsKey, config.initialPoints.toString());
    }
    updatePointsDisplay();
}


function initPointsSystem() {
    
    const savedPoints = localStorage.getItem('workoutPoints');
    points = savedPoints ? parseInt(savedPoints) : 0;
    updatePointsDisplay();
}


function updatePointsDisplay() {
    
    document.querySelectorAll('.points-display, .points-button').forEach(el => {
        el.textContent = `Точки: ${points}`;
        el.classList.add('points-updated');
        setTimeout(() => el.classList.remove('points-updated'), 500);
    });
}

function addExercisePoints(amount) {
    points += amount;
    savePoints();
    updatePointsDisplay();
    showMessage(`+${amount} точки от упражнение!`, 'success');
}



function setupEventListeners() {
    
    document.querySelectorAll('.offer-card button').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.offer-card');
            const pointsRequired = parseInt(card.querySelector('.points').textContent);
            processPurchase(pointsRequired);
        });
    });
    
    
    const exerciseLink = document.getElementById('link-upraznenia');
    if (exerciseLink) {
        exerciseLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = "upraznenia.html";
        });
    }
}


function processPurchase(requiredPoints) {
    const currentPoints = getCurrentPoints();
    
    if (currentPoints >= requiredPoints) {
    
        const newPoints = currentPoints - requiredPoints;
        updatePoints(newPoints);
        
        showMessage(`✅ Успешна покупка! Вие използвахте ${requiredPoints} точки.`, 'success');
        
        setTimeout(() => {
            window.location.href = "QR2.html";
        }, config.redirectDelay);
    } else {
    
        const neededPoints = requiredPoints - currentPoints;
        showMessage(`❌ Недостатъчно точки! Нуждаете се от още ${neededPoints} точки.`, 'error');
        
        setTimeout(() => {
            window.location.href = "upraznenia.html";
        }, config.redirectDelay);
    }
}

function getCurrentPoints() {
    return parseInt(localStorage.getItem(config.pointsKey)) || config.initialPoints;
}

function updatePoints(newPoints) {
    localStorage.setItem(config.pointsKey, newPoints.toString());
    updatePointsDisplay();
}

function updatePointsDisplay() {
    const pointsDisplay = document.querySelector('.points-display');
    if (pointsDisplay) {
        pointsDisplay.textContent = `Точки: ${getCurrentPoints()}`;
        pointsDisplay.classList.add('points-updated');
        setTimeout(() => {
            pointsDisplay.classList.remove('points-updated');
        }, 500);
    }
}

function showMessage(text, type) {
    const messagesDiv = document.getElementById('messages');
    if (messagesDiv) {
        const message = document.createElement('div');
        message.className = `${type}-message`;
        message.textContent = text;
        messagesDiv.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, config.messageDisplayTime);
    }
}

window.addExercisePoints = function(amount) {
    const newPoints = getCurrentPoints() + amount;
    updatePoints(newPoints);
    showMessage(`🎉 Спечелихте ${amount} точки от упражнение!`, 'success');
};
