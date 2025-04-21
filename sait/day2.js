document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('workoutPoints')) {
        localStorage.setItem('workoutPoints', '0');
    }
    
    
    updatePointsDisplay();
    
    
    const completeBtn = document.getElementById('completeBtn');
   
    if (completeBtn) {
        completeBtn.addEventListener('click', function() {
            let currentPoints = parseInt(localStorage.getItem('workoutPoints')) || 0;
            const newPoints = currentPoints + 5;
            localStorage.setItem('workoutPoints', newPoints.toString());
         
            updatePointsDisplay();
        
        
            addToHistory('+5 точки за тренировка "Ръце"');        completeBtn.textContent = 'Завършено!';
            completeBtn.style.backgroundColor = '#2E7D32';
            setTimeout(function() {
                completeBtn.textContent = 'Завърши тренировка (+5 точки)';
                completeBtn.style.backgroundColor = '#4CAF50';
            }, 2000);
        });
    }
});
function updatePointsDisplay() {
    const points = localStorage.getItem('workoutPoints') || '0';
    const display = document.getElementById('pointsDisplay');
 if (display) {
        display.textContent = `Точки: ${points}`;
        display.style.transform = 'scale(1.1)';
        display.style.backgroundColor = '#388E3C';
        
        setTimeout(function() {
            display.style.transform = 'scale(1)';
            display.style.backgroundColor = '#4CAF50';
        }, 300);
    }
}
function addToHistory(message) {
    const historyList = document.getElementById('pointsHistory');
    
    if (historyList) {
        const historyItem = document.createElement('li');
        historyItem.textContent = `${message} (${new Date().toLocaleString()})`;
        historyList.appendChild(historyItem);
    }
}