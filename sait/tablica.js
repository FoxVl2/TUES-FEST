// Данни за лидерборда
let players = [
    { name: "Александър Димитров", points: 220 },
    { name: "Петър Модев", points: 185 },
    {name: "Георги Георгиев", points:190},
    {name: "Владимир Живков", points:160},
    {name:"Александър Петров",points:220}
];

// Функция за завършване на упражнение (+5 точки)
function completeExercise(playerName) {
    // Намираме играча и добавяме 5 точки
    let player = players.find(p => p.name === playerName);
    if (player) {
        player.points += 5;
        updateLeaderboard();
    }
}

// Функция за обновяване на лидерборда
function updateLeaderboard() {
    let leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = ""; // Изчистваме старите данни

    // Сортираме играчите по точки (от най-много към най-малко)
    players.sort((a, b) => b.points - a.points);

    // Добавяме всеки играч в таблицата
    players.forEach((player, index) => {
        let row = document.createElement("tr");
        row.innerHTML = 
            <><td>${index + 1}</td><td>${player.name}</td><td>${player.points}</td></>
        ;
        leaderboard.appendChild(row);
    });
}

// Зареждаме таблицата при стартиране
updateLeaderboard();