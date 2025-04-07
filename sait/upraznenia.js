let totalPoints = 0; 

function trainExercise(button) {
    const card = button.closest('.exercise-card');
    const videoContainer = card.querySelector('.video-container');
    const iframe = card.querySelector('iframe');
    const totalPointsDisplay = document.getElementById('total-points');

    
    if (card.classList.contains('completed')) {
        alert("Вече сте гледали това видео и не можете да получите повече точки.");
        return;
    }


    videoContainer.style.display = "block";
    iframe.src = `https://www.youtube.com/embed/${card.getAttribute('data-video-id')}?autoplay=1`;

    
    button.disabled = true;


    totalPoints += 5;
    totalPointsDisplay.textContent = totalPoints;

    
    card.classList.add("completed");


    iframe.addEventListener('ended', () => {
        alert("Видеото приключи! Получихте 5 точки.");
    });
}


function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Затваряне на менюто при клик извън него
document.addEventListener('click', (event) => {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});