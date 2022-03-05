// let random1 = Math.floor(Math.random()*6) + 1;
// let random2 = Math.floor(Math.random()*6) + 1;

// if (window.performance.getEntriesByType("navigation")[0].type == 'reload') {

//     if (random1 > random2) {
//         document.querySelector("h1").textContent = "🚩 The winner is Player 1!";    
//     } else if (random2 > random1) {
//         document.querySelector("h1").textContent = "The winner is Player 2! 🚩";
//     } else {
//         document.querySelector("h1").textContent = "A draw";
//         document.querySelector("h1").style.color = "gray";
//     }
//     document.querySelector(".image-player1").setAttribute("src", "images/dice"+random1+".png");
//     // document.querySelector(".image-player2").setAttribute("src", "/images/dice"+random2+".png");
//     document.querySelector(".image-player2").setAttribute("src", `images/dice${random2}.png`);
// }

function start () {

    let random1 = Math.floor(Math.random()*6) + 1;
    let random2 = Math.floor(Math.random()*6) + 1;

    if (random1 > random2) {
        document.querySelector("h1").textContent = "🚩 The winner is Player 1!";    
    } else if (random2 > random1) {
        document.querySelector("h1").textContent = "The winner is Player 2! 🚩";
    } else {
        document.querySelector("h1").textContent = "A draw";
        // document.querySelector("h1").style.color = "gray";
    }
    document.querySelector(".image-player1").setAttribute("src", "images/dice"+random1+".png");
    // document.querySelector(".image-player2").setAttribute("src", "/images/dice"+random2+".png");
    document.querySelector(".image-player2").setAttribute("src", `images/dice${random2}.png`);
}

document.getElementById("btn-start").addEventListener("click", start);