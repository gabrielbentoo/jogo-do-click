const gameArea = document.getElementById("game-area");
const message = document.getElementById("message");

function createObstacles(quantity) {
    for (let i = 0; i < quantity; i++) {
        const obstacle = document.createElement("div");
        obstacle.classList.add("obstacle")
        const X = Math.random()*(gameArea.clientWidth -30)
        const Y = Math.random()*(gameArea.clientHeight -30)
        obstacle.style.left = `${X}px`;
        obstacle.style.top = `${Y}px`;
        obstacle.addEventListener("click",() =>{
        obstacle.remove();
        checkVictory();
        })
        gameArea.appendChild(obstacle);
    }

}

function checkVictory() {
    const remainingObstacles = document.querySelectorAll(".obstacle");
    if (remainingObstacles.length == 0) {
       message.textContent ="Parabéns, você destruiu todos os obstaculos" 
    }

}
createObstacles(20)