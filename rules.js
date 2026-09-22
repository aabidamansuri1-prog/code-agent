const readyBtn = document.getElementById("readyBtn");

readyBtn.addEventListener("click", function () {

    readyBtn.innerHTML = "ACCESSING MISSION...";
    readyBtn.disabled = true;

    setTimeout(function () {
        window.location.href = "game.html";
    }, 800);

});