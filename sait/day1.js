
const storageKey = 'points_page1';


let points = localStorage.getItem(storageKey) ? parseInt(localStorage.getItem(storageKey)) : 0;


document.getElementById('pointsCell').textContent = points;


document.getElementById('completeButton').addEventListener('click', function() {
    points += 5; 
    localStorage.setItem(storageKey, points); 
    document.getElementById('pointsCell').textContent = points; 
});