
// Глобална променлива за точките
let points = 0;

// Функция за проверка и използване на точки
function handlePurchase(requiredPoints) {
    // Взимаме текущите точки от localStorage
    const currentPoints = parseInt(localStorage.getItem('workoutPoints')) || 0;
    
    if (currentPoints >= requiredPoints) {
        // Изваждаме точките
        const newPoints = currentPoints - requiredPoints;
        localStorage.setItem('workoutPoints', newPoints.toString());
        
        // Обновяваме дисплея
        document.querySelectorAll('.points-display, .points-button').forEach(el => {
            el.textContent = `Точки: ${newPoints}`;
        });
        
        // Пренасочване към страница за успешна покупка
        window.location.href = "QR2.html";
    } else {
        // Пренасочване към страница с упражнения
        window.location.href = "upraznenia.html";
    }
}

// Инициализация при зареждане (само за показване на точки)
document.addEventListener('DOMContentLoaded', function() {
    const savedPoints = localStorage.getItem('workoutPoints') || 0;
    document.querySelectorAll('.points-display, .points-button').forEach(el => {
        el.textContent = `Точки: ${savedPoints}`;
    });
});