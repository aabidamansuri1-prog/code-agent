// =================================
// OPERATION: SCHOOL RESTORE
// MISSION 01 + MISSION 02
// =================================

let timeLeft = 15 * 60;
let lives = 3;
let keys = 0;
let currentMission = 1;

// MISSION 2
let circuitRound = 0;
let treasureRound = 0;

// HTML ELEMENTS
const timerElement = document.getElementById("timer");
const livesElement = document.getElementById("lives");
const keysElement = document.getElementById("keys");
const progressElement = document.getElementById("progress");
const progressBar = document.getElementById("progressBar");

const missionTitle = document.getElementById("missionTitle");
const missionDescription = document.getElementById("missionDescription");
const missionContent = document.getElementById("missionContent");

// AGENT NAME
const savedName = localStorage.getItem("agentName");

if (savedName) {
    document.getElementById("agentName").textContent = savedName;
}


// =================================
// SYSTEM MESSAGE
// =================================

function systemMessage(message, type = "normal") {

    const messageBox = document.getElementById("gameMessage");

    messageBox.textContent = message;
    messageBox.className = "game-message show";

    if (type === "success") {
        messageBox.style.borderColor = "#22c55e";
        messageBox.style.color = "#22c55e";
    }

    else if (type === "danger") {
        messageBox.style.borderColor = "#f87171";
        messageBox.style.color = "#f87171";
    }

    else if (type === "warning") {
        messageBox.style.borderColor = "#facc15";
        messageBox.style.color = "#facc15";
    }

    else {
        messageBox.style.borderColor = "#38bdf8";
        messageBox.style.color = "#38bdf8";
    }

    setTimeout(function () {
        messageBox.classList.remove("show");
    }, 4000);
}


// =================================
// SCREEN EFFECT
// =================================

function screenFlash(type) {

    document.body.classList.add("screen-" + type);

    setTimeout(function () {
        document.body.classList.remove("screen-" + type);
    }, 500);
}


// =================================
// TIMER
// =================================

function startTimer() {

    setInterval(function () {

        if (timeLeft <= 0) {

            timeLeft = 0;
            updateTimer();

            systemMessage(
                "CRITICAL FAILURE — THE VIRUS HAS TAKEN CONTROL.",
                "danger"
            );

            screenFlash("danger");

            return;
        }

        timeLeft--;

        updateTimer();

    }, 1000);
}


function updateTimer() {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timerElement.textContent =
        `${minutes}:${seconds}`;
}


// =================================
// LIVES
// =================================

function updateLives() {

    livesElement.textContent =
        "❤️".repeat(lives);
}


// =================================
// DIGITAL KEYS
// =================================

function updateKeys() {

    keysElement.textContent =
        `${keys} / 5`;
}


// =================================
// PROGRESS
// =================================

function updateProgress() {

    const percentage = keys * 20;

    progressElement.textContent =
        `${percentage}%`;

    progressBar.style.width =
        `${percentage}%`;
}


// =================================
// MISSION 01
// =================================

let mission1Decimal;
let mission1Binary;
function loadMission1() {

    currentMission = 1;

    missionTitle.textContent =
        "FIREWALL DECODER";

    missionDescription.textContent =
        "Break the firewall lock using the intercepted binary signal.";

    // Generate a random beginner-friendly binary number
mission1Decimal = Math.floor(Math.random() * 9) + 1;
mission1Binary = mission1Decimal.toString(2).padStart(8, "0");
    
    missionContent.innerHTML = `

        <div class="mission-console">

            <div class="mission-alert-bar">

                <span class="alert-light"></span>

                <span>LIVE SECURITY BREACH</span>

                <span class="threat-level">
                    THREAT: HIGH
                </span>

            </div>


            <div class="mission-grid">


                <div class="ai-panel">

                    <div class="panel-heading">

                        <span>◉</span>
                        SYSTEM AI

                    </div>


                    <div class="ai-status">
                        ONLINE
                    </div>


                    <div class="ai-lines">

                        <p>&gt; FIREWALL LOCKED</p>

                        <p>&gt; VIRUS SIGNAL DETECTED</p>

                        <p>&gt; AGENT ACCESS GRANTED</p>

                    </div>


                    <div class="ai-message">

                        Decode the intercepted
                        signal to restore
                        firewall access.

                    </div>

                </div>


                <div class="firewall-panel-new">

                    <div class="core-label">
                        FIREWALL CORE
                    </div>


                    <div class="core">

                        <div class="core-ring core-ring-1"></div>

                        <div class="core-ring core-ring-2"></div>

                        <div class="core-ring core-ring-3"></div>


                        <div class="core-center">

                            <span class="lock">
                                🔒
                            </span>

                            <span class="binary-signal">
                               ${mission1Binary}
                            </span>

                        </div>

                    </div>


                    <div class="signal-status">
                        ● SIGNAL ACTIVE
                    </div>

                </div>

            </div>


            <div class="challenge-console">

                <div class="challenge-label">
                    DECRYPTION REQUIRED
                </div>


                <h3>

                    What is the decimal value of
                    <span>${mission1Binary}</span>?

                </h3>


                <div class="answer-area">

                    <input
                        type="number"
                        id="answerInput"
                        placeholder="ENTER CODE"
                    >


                    <button id="submitAnswer">
                        BREAK FIREWALL
                    </button>

                </div>


                <p id="answerMessage"></p>

            </div>

        </div>
    `;


    document
        .getElementById("submitAnswer")
        .addEventListener(
            "click",
            checkAnswer
        );


    setTimeout(function () {

        systemMessage(
            "Agent connection established. Firewall access is locked.",
            "normal"
        );

    }, 700);
}


// =================================
// MISSION 01 ANSWER
// =================================

function checkAnswer() {

    const input =
        document.getElementById("answerInput");

    const answer =
        input.value;

    const answerMessage =
        document.getElementById("answerMessage");


    if (Number(answer) === mission1Decimal) {

        answerMessage.textContent =
            "✓ ACCESS GRANTED";

        answerMessage.style.color =
            "#22c55e";

        screenFlash("success");


        if (keys === 0) {

            keys = 1;

            updateKeys();
            updateProgress();

        }


        systemMessage(
            "CODE ACCEPTED — FIREWALL ACCESS RESTORED. DIGITAL KEY 01 ACQUIRED.",
            "success"
        );


        input.disabled = true;

        document.getElementById(
            "submitAnswer"
        ).disabled = true;


        document.getElementById(
            "submitAnswer"
        ).textContent =
            "✓ FIREWALL RESTORED";


        setTimeout(function () {

    missionContent.innerHTML = `

        <div class="mission-complete">

            <div class="complete-icon">
                🔓
            </div>

            <h2>
                MISSION 01 COMPLETE
            </h2>

            <p>
                DIGITAL KEY 01 ACQUIRED
            </p>

            <div class="mission-code">
                YOUR CODE: <strong>6</strong>
            </div>

            <p class="code-instruction">
                Keep this code safe. You'll need it at the final access terminal.
            </p>

            <button
                id="continueMission2"
                class="continue-button">
                CONTINUE TO MISSION 02 →
            </button>

        </div>

    `;

    document
        .getElementById("continueMission2")
        .addEventListener("click", function () {

            loadMission2();

        });

}, 2200);

    }


    else {

        loseLife();

        answerMessage.textContent =
            "✕ ACCESS DENIED — LIFE LOST";

        answerMessage.style.color =
            "#f87171";

    }
}


// =================================
// LOSE LIFE
// =================================

function loseLife() {

    lives--;

    updateLives();

    screenFlash("danger");


    systemMessage(
        "INCORRECT — THE VIRUS DETECTED YOUR ATTEMPT. ONE LIFE LOST.",
        "danger"
    );


    if (lives <= 0) {

        setTimeout(function () {

            systemMessage(
                "MISSION FAILED — ALL LIVES HAVE BEEN LOST.",
                "danger"
            );

        }, 1000);

    }


    else if (lives === 1) {

        setTimeout(function () {

            systemMessage(
                "CRITICAL WARNING — ONE LIFE REMAINS.",
                "warning"
            );

        }, 1500);

    }
}


// =================================
// MISSION 02
// LOGIC CIRCUIT REPAIR
// =================================

function loadMission2() {

    currentMission = 2;

    circuitRound = 0;


    missionTitle.textContent =
        "LOGIC CIRCUIT REPAIR";


    missionDescription.textContent =
        "Repair the damaged school power grid by selecting the correct logic gate.";


    loadCircuitRound();

    
    setTimeout(function () {

        systemMessage(
            "MISSION 02 ONLINE — SCHOOL POWER GRID IS FAILING.",
            "warning"
        );

    }, 700);
}


// =================================
// CIRCUIT ROUNDS
// =================================

function loadCircuitRound() {

    const rounds = [

        {
            situation:
                "The security door opens only when BOTH switches are ON.",

            gate:
                "AND",

            icon:
                "🔐",

            switchA:
                "1",

            switchB:
                "1"
        },


        {
            situation:
                "The emergency alarm activates when EITHER sensor detects danger.",

            gate:
                "OR",

            icon:
                "🚨",

            switchA:
                "1",

            switchB:
                "0"
        },


        {
            situation:
                "The laser barrier activates when the sensor is NOT active.",

            gate:
                "NOT",

            icon:
                "🛡️",

            switchA:
                "0",

            switchB:
                ""
        }

    ];


    const round =
        rounds[circuitRound];


    missionContent.innerHTML = `

        <div class="circuit-mission">

            <div class="circuit-header">

                <span class="circuit-round">
                    CIRCUIT ${circuitRound + 1} / 3
                </span>

                <span class="circuit-status">
                    POWER GRID OFFLINE
                </span>

            </div>


            <div class="circuit-situation">

                <div class="situation-icon">
                    ${round.icon}
                </div>

                <div>

                    <div class="situation-label">
                        SYSTEM OBJECTIVE
                    </div>

                    <p>
                        ${round.situation}
                    </p>

                </div>

            </div>


            <div class="circuit-board">


                <div class="input-node">

                    <span>INPUT A</span>

                    <strong>
                        ${round.switchA}
                    </strong>

                </div>


                ${
                    round.gate === "NOT"
                    ? ""
                    : `
                    <div class="circuit-wire"></div>

                    <div class="input-node">

                        <span>INPUT B</span>

                        <strong>
                            ${round.switchB}
                        </strong>

                    </div>
                    `
                }


                <div class="gate-box">

                    <span>SELECT GATE</span>

                    <strong>?</strong>

                </div>


                <div class="circuit-wire"></div>


                <div class="power-node">

                    <span>POWER</span>

                    <strong>🔴</strong>

                </div>

            </div>


            <div class="gate-question">

                <div class="challenge-label">
                    CIRCUIT CONTROL
                </div>

                <h3>
                    Which logic gate should be used?
                </h3>


                <div class="gate-options">

                    <button
                        class="gate-button"
                        data-gate="AND">
                        AND
                    </button>

                    <button
                        class="gate-button"
                        data-gate="OR">
                        OR
                    </button>

                    <button
                        class="gate-button"
                        data-gate="NOT">
                        NOT
                    </button>

                </div>


                <p id="circuitMessage"></p>

            </div>

        </div>
    `;


    const gateButtons =
        document.querySelectorAll(".gate-button");


    gateButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                checkGate(
                    button.dataset.gate,
                    round.gate
                );

            }
        );

    });
}


// =================================
// CHECK LOGIC GATE
// =================================

function checkGate(selectedGate, correctGate) {

    const message =
        document.getElementById("circuitMessage");


    if (selectedGate === correctGate) {

        message.textContent =
            "✓ CIRCUIT REPAIRED";

        message.style.color =
            "#22c55e";


        screenFlash("success");


        const buttons =
            document.querySelectorAll(".gate-button");


        buttons.forEach(function (button) {

            button.disabled = true;

        });


        systemMessage(
            `${correctGate} GATE SELECTED — CIRCUIT RESTORED.`,
            "success"
        );


        circuitRound++;


        setTimeout(function () {

            if (circuitRound < 3) {

                loadCircuitRound();

            }

            else {

                completeMission2();

            }

        }, 1800);

    }


    else {

        loseLife();


        message.textContent =
            "✕ WRONG GATE — TRY AGAIN";

        message.style.color =
            "#f87171";

    }
}


// =================================
// COMPLETE MISSION 02
// =================================

function completeMission2() {

    if (keys === 1) {

        keys = 2;

        updateKeys();
        updateProgress();

    }

    missionContent.innerHTML = `

        <div class="mission-complete">

            <div class="complete-icon">
                ⚡
            </div>

            <h2>
                MISSION 02 COMPLETE
            </h2>

            <p>
                DIGITAL KEY 02 ACQUIRED
            </p>

            <div class="mission-code">
                YOUR CODE: <strong>3</strong>
            </div>

            <p class="code-instruction">
                Keep this code safe. You'll need it at the final access terminal.
            </p>

            <button
                id="continueMission3"
                class="continue-button">

                CONTINUE TO MISSION 03 →

            </button>

        </div>

    `;

    systemMessage(
        "MISSION 02 COMPLETE — DIGITAL KEY 02 ACQUIRED.",
        "success"
    );

    document
        .getElementById("continueMission3")
        .addEventListener("click", function () {

            loadMission3();

        });
}

// =================================
// START GAME
// =================================

updateTimer();
updateLives();
updateKeys();
updateProgress();

loadMission1();

startTimer();
// =================================
// MISSION 03
// DATA TREASURE HUNT
// =================================

function loadMission3() {

    currentMission = 3;
    treasureRound = 0;

    missionTitle.textContent =
        "DATA TREASURE HUNT";

    missionDescription.textContent =
        "Recover the hidden data fragments scattered across the storage grid.";

    loadTreasureRound();

    setTimeout(function () {

        systemMessage(
            "MISSION 03 ONLINE — DATA FRAGMENTS DETECTED.",
            "warning"
        );

    }, 700);
}


// =================================
// TREASURE ROUNDS
// =================================

function loadTreasureRound() {

    const rounds = [

        {
            target: 5,
            binary: "101"
        },

        {
            target: 2,
            binary: "010"
        },

        {
            target: 6,
            binary: "110"
        }

    ];

    const round =
        rounds[treasureRound];


    // Create random-looking data grid
    const gridValues = [
        "101",
        "011",
        "110",
        "010",
        "111",
        "001",
        "100",
        "000",
        "101"
    ];


    // Shuffle the grid
    gridValues.sort(function () {
        return Math.random() - 0.5;
    });


    missionContent.innerHTML = `

        <div class="treasure-mission">

            <div class="treasure-header">

                <span class="treasure-round">
                    DATA SEARCH ${treasureRound + 1} / 3
                </span>

                <span class="treasure-status">
                    STORAGE SYSTEM UNSTABLE
                </span>

            </div>


            <div class="treasure-clue">

                <div class="treasure-icon">
                    💾
                </div>

                <div>

                    <div class="situation-label">
                        DATA TRACE DETECTED
                    </div>

                    <p>
                        Find the data tile whose binary value equals
                        <strong>${round.target}</strong>.
                    </p>

                </div>

            </div>


            <div class="data-grid">

                ${gridValues.map(function (value, index) {

                    return `
                        <button
                            class="data-tile"
                            data-value="${value}"
                            data-index="${index}">

                            <span class="tile-number">
                                ${value}
                            </span>

                            <span class="tile-status">
                                DATA
                            </span>

                        </button>
                    `;

                }).join("")}

            </div>


            <div class="data-guide">

                <span>DATA GUIDE</span>

                <p>
                    Binary <strong>101</strong>
                    =
                    4 + 1
                    =
                    <strong>5</strong>
                </p>

            </div>


            <p id="treasureMessage"></p>

        </div>

    `;


    const tiles =
        document.querySelectorAll(".data-tile");


    tiles.forEach(function (tile) {

        tile.addEventListener(
            "click",
            function () {

                checkTreasure(
                    tile,
                    round.target
                );

            }
        );

    });
}


// =================================
// CHECK TREASURE
// =================================

function checkTreasure(tile, correctAnswer) {

    const message =
        document.getElementById("treasureMessage");


    const selectedValue =
        parseInt(tile.dataset.value, 2);


    // CORRECT
    if (selectedValue === correctAnswer) {

        tile.classList.add("correct-tile");

        tile.querySelector(".tile-status").textContent =
            "RECOVERED";


        message.textContent =
            "✓ DATA FRAGMENT RECOVERED";

        message.style.color =
            "#22c55e";


        screenFlash("success");


        const tiles =
            document.querySelectorAll(".data-tile");


        tiles.forEach(function (dataTile) {

            dataTile.disabled = true;

        });


        systemMessage(
            "DATA MATCH CONFIRMED — FRAGMENT RECOVERED.",
            "success"
        );


        treasureRound++;


        setTimeout(function () {

            if (treasureRound < 3) {

                loadTreasureRound();

            }

            else {

                completeMission3();

            }

        }, 1800);

    }


    // WRONG
    else {

        tile.classList.add("wrong-tile");

        message.textContent =
            "✕ WRONG DATA — TRY AGAIN";

        message.style.color =
            "#f87171";


        screenFlash("danger");

        loseLife();


        setTimeout(function () {

            tile.classList.remove("wrong-tile");

        }, 700);

    }
}


// =================================
// COMPLETE MISSION 03
// =================================

function completeMission3() {

    if (keys === 2) {

        keys = 3;

        updateKeys();
        updateProgress();

    }


    missionContent.innerHTML = `

        <div class="mission-complete">

            <div class="complete-icon">
                💾
            </div>

            <h2>
                MISSION 03 COMPLETE
            </h2>

            <p>
                DIGITAL KEY 03 ACQUIRED
            </p>

            <div class="mission-code">
                YOUR CODE: <strong>8</strong>
            </div>

            <p class="code-instruction">
                Keep this code safe. You'll need it at the final access terminal.
            </p>

            <button
                id="continueMission4"
                class="continue-button">

                CONTINUE TO MISSION 04 →

            </button>

        </div>

    `;


    systemMessage(
        "MISSION 03 COMPLETE — DIGITAL KEY 03 ACQUIRED.",
        "success"
    );


    document
        .getElementById("continueMission4")
        .addEventListener("click", function () {

            loadMission4();

        });

}
// =================================
// MISSION 04
// SECRET CODE BREAKER
// =================================

let secretRound = 0;


// =================================
// LOAD MISSION 04
// =================================

function loadMission4() {

    currentMission = 4;
    secretRound = 0;

    missionTitle.textContent =
        "SECRET CODE BREAKER";

    missionDescription.textContent =
        "Decode the intercepted binary transmission.";

    loadSecretRound();

    setTimeout(function () {

        systemMessage(
            "MISSION 04 ONLINE — SECRET TRANSMISSION INTERCEPTED.",
            "warning"
        );

    }, 700);
}


// =================================
// SECRET WORD GENERATOR
// =================================

function getRandomSecretWord() {

    const words = [
        "CODE",
        "SAFE",
        "DATA",
        "STAR",
        "BYTE",
        "LOGIC",
        "POWER",
        "LIGHT",
        "SMART",
        "ROBOT",
        "CYBER",
        "INPUT",
        "BLOCK",
        "SPACE",
        "CLOUD"
    ];

    return words[
        Math.floor(Math.random() * words.length)
    ];
}


// =================================
// WORD → BINARY
// =================================

function wordToBinary(word) {

    return word
        .split("")
        .map(function (letter) {

            return letter
                .charCodeAt(0)
                .toString(2)
                .padStart(8, "0");

        })
        .join(" ");
}


// =================================
// LOAD SECRET ROUND
// =================================

function loadSecretRound() {

    const secretWord =
        getRandomSecretWord();

    const binaryWord =
        wordToBinary(secretWord);


    missionContent.innerHTML = `

        <div class="secret-mission">

            <div class="secret-header">

                <span class="secret-round">
                    TRANSMISSION ${secretRound + 1} / 3
                </span>

                <span class="secret-status">
                    SIGNAL INTERCEPTED
                </span>

            </div>


            <div class="terminal-panel">

                <div class="terminal-top">

                    <span>
                        ◉ ENCRYPTED TRANSMISSION
                    </span>

                    <span>
                        BINARY SIGNAL
                    </span>

                </div>


                <div class="terminal-screen">

                    <div class="terminal-label">
                        INCOMING DATA
                    </div>

                    <div class="binary-message">
                        ${binaryWord}
                    </div>

                    <div class="terminal-cursor">
                        _
                    </div>

                </div>

            </div>


            <div class="decoder-panel">

                <div class="decoder-icon">
                    🔐
                </div>

                <div class="decoder-info">

                    <div class="situation-label">
                        DECRYPTION REQUIRED
                    </div>

                    <p>
                        Decode each 8-bit binary value
                        and discover the hidden word.
                    </p>

                </div>

            </div>


            <details class="alphabet-decoder">

                <summary>
                    ▸ OPEN ALPHABET → BINARY DECODER
                </summary>

                <div class="alphabet-grid">

                    ${createAlphabetTable()}

                </div>

            </details>


            <div class="password-area">

                <label for="secretAnswer">
                    ENTER DECODED WORD
                </label>

                <input
                    type="text"
                    id="secretAnswer"
                    placeholder="TYPE SECRET WORD"
                    autocomplete="off"
                    maxlength="5"
                >

                <button
                    id="decryptButton"
                    class="decrypt-button">

                    DECRYPT TRANSMISSION

                </button>

            </div>


            <p id="secretMessage"></p>

        </div>

    `;


    const input =
        document.getElementById("secretAnswer");

    const button =
        document.getElementById("decryptButton");


    button.addEventListener(
        "click",
        function () {

            checkSecretCode(
                input.value,
                secretWord
            );

        }
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                checkSecretCode(
                    input.value,
                    secretWord
                );

            }

        }
    );


    input.focus();
}


// =================================
// CREATE A-Z DECODER
// =================================

function createAlphabetTable() {

    let table = "";

    for (
        let code = 65;
        code <= 90;
        code++
    ) {

        const letter =
            String.fromCharCode(code);

        const binary =
            code
                .toString(2)
                .padStart(8, "0");


        table += `

            <div class="alphabet-item">

                <strong>
                    ${letter}
                </strong>

                <span>
                    ${binary}
                </span>

            </div>

        `;

    }

    return table;
}


// =================================
// CHECK SECRET CODE
// =================================

function checkSecretCode(
    answer,
    correctAnswer
) {

    const message =
        document.getElementById("secretMessage");


    const userAnswer =
        answer
            .trim()
            .toUpperCase();


    if (userAnswer === correctAnswer) {

        message.textContent =
            "✓ TRANSMISSION DECRYPTED";

        message.style.color =
            "#22c55e";


        screenFlash("success");


        document.getElementById(
            "secretAnswer"
        ).disabled = true;


        document.getElementById(
            "decryptButton"
        ).disabled = true;


        systemMessage(
            "PASSWORD ACCEPTED — DATA DECRYPTED.",
            "success"
        );


        secretRound++;


        setTimeout(function () {

            if (secretRound < 3) {

                loadSecretRound();

            }

            else {

                completeMission4();

            }

        }, 1800);

    }

    else {

        message.textContent =
            "✕ INVALID WORD — ACCESS DENIED";

        message.style.color =
            "#f87171";


        screenFlash("danger");

        loseLife();

    }

}


// =================================
// COMPLETE MISSION 04
// =================================

function completeMission4() {

    if (keys === 3) {

        keys = 4;

        updateKeys();
        updateProgress();

    }


    missionContent.innerHTML = `

        <div class="mission-complete">

            <div class="complete-icon">
                🔐
            </div>

            <h2>
                MISSION 04 COMPLETE
            </h2>

            <p>
                DIGITAL KEY 04 ACQUIRED
            </p>

            <div class="mission-code">
                YOUR CODE: <strong>4</strong>
            </div>

            <p class="code-instruction">
                Keep this code safe.
                You'll need it at the final access terminal.
            </p>

            <button
                id="continueMission5"
                class="continue-button">

                CONTINUE TO MISSION 05 →

            </button>

        </div>

    `;


    systemMessage(
        "MISSION 04 COMPLETE — DIGITAL KEY 04 ACQUIRED.",
        "success"
    );


    document
        .getElementById("continueMission5")
        .addEventListener(
            "click",
            function () {

                loadMission5();

            }
        );

}
// =================================
// MISSION 05
// NETWORK RESCUE
// =================================

let playerPosition = 0;
let movesLeft = 12;
let networkRound = 1;


// =================================
// LOAD MISSION 05
// =================================

function loadMission5() {

    currentMission = 5;

    playerPosition = 0;
    movesLeft = 12;
    networkRound = 1;

    missionTitle.textContent =
        "NETWORK RESCUE";

    missionDescription.textContent =
        "Navigate through the infected network and reach the central server.";

    loadNetworkMaze();

    setTimeout(function () {

        systemMessage(
            "FINAL MISSION ONLINE — CENTRAL SERVER UNDER ATTACK.",
            "danger"
        );

    }, 700);
}


// =================================
// NETWORK MAZE
// =================================

function loadNetworkMaze() {

    const maze = [

        "P",
        " ",
        "V",
        " ",
        " ",

        " ",
        "V",
        " ",
        "V",
        " ",

        " ",
        " ",
        " ",
        " ",
        "V",

        "V",
        " ",
        "V",
        " ",
        " ",

        " ",
        " ",
        " ",
        " ",
        "S"

    ];


    missionContent.innerHTML = `

        <div class="network-mission">

            <div class="network-header">

                <span class="network-round">
                    FINAL MISSION
                </span>

                <span class="network-status">
                    ⚠ NETWORK INFECTED
                </span>

            </div>


            <div class="network-alert">

                <div class="network-alert-icon">
                    🌐
                </div>

                <div>

                    <div class="situation-label">
                        CENTRAL SERVER CONNECTION LOST
                    </div>

                    <p>
                        Guide the Code Agent through the network
                        and reach the central server.
                    </p>

                </div>

            </div>


            <div class="network-stats">

                <div class="network-stat">

                    <span>
                        MOVES LEFT
                    </span>

                    <strong id="movesLeft">
                        12
                    </strong>

                </div>


                <div class="network-stat">

                    <span>
                        TARGET
                    </span>

                    <strong>
                        🖥 SERVER
                    </strong>

                </div>

            </div>


            <div class="network-grid">

                ${maze.map(function (cell, index) {

                    return `

                        <button
                            class="network-cell ${cell === "V" ? "virus-node" : ""}"
                            data-index="${index}">

                            ${
                                cell === "P"
                                    ? "🟢"
                                    : cell === "V"
                                        ? "☠"
                                        : cell === "S"
                                            ? "🖥️"
                                            : ""
                            }

                        </button>

                    `;

                }).join("")}

            </div>


            <div class="network-controls">

                <button
                    class="move-button"
                    data-move="up">
                    ↑
                </button>

                <div class="horizontal-controls">

                    <button
                        class="move-button"
                        data-move="left">
                        ←
                    </button>

                    <button
                        class="move-button"
                        data-move="down">
                        ↓
                    </button>

                    <button
                        class="move-button"
                        data-move="right">
                        →
                    </button>

                </div>

            </div>


            <div class="network-legend">

                <span>
                    🟢 AGENT
                </span>

                <span>
                    ☠ VIRUS
                </span>

                <span>
                    🖥 SERVER
                </span>

            </div>


            <p id="networkMessage"></p>

        </div>

    `;


    updateNetworkGrid();


    const moveButtons =
        document.querySelectorAll(".move-button");


    moveButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                moveAgent(
                    button.dataset.move
                );

            }
        );

    });


    document.addEventListener(
        "keydown",
        handleNetworkKeyboard
    );

}


// =================================
// UPDATE NETWORK GRID
// =================================

function updateNetworkGrid() {

    const cells =
        document.querySelectorAll(".network-cell");


    cells.forEach(function (cell, index) {

        cell.classList.remove(
            "agent-cell"
        );

        if (index === playerPosition) {

            cell.classList.add(
                "agent-cell"
            );

            cell.textContent = "🟢";

        }

    });


    const moves =
        document.getElementById("movesLeft");


    if (moves) {

        moves.textContent =
            movesLeft;

    }

}


// =================================
// KEYBOARD CONTROLS
// =================================

function handleNetworkKeyboard(event) {

    if (currentMission !== 5) {
        return;
    }


    const keys = {

        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right"

    };


    if (keys[event.key]) {

        event.preventDefault();

        moveAgent(
            keys[event.key]
        );

    }

}


// =================================
// MOVE AGENT
// =================================

function moveAgent(direction) {

    if (movesLeft <= 0) {
        return;
    }


    const row =
        Math.floor(playerPosition / 5);

    const column =
        playerPosition % 5;


    let newRow = row;
    let newColumn = column;


    if (direction === "up") {
        newRow--;
    }

    if (direction === "down") {
        newRow++;
    }

    if (direction === "left") {
        newColumn--;
    }

    if (direction === "right") {
        newColumn++;
    }


    // Prevent leaving the grid

    if (
        newRow < 0 ||
        newRow > 4 ||
        newColumn < 0 ||
        newColumn > 4
    ) {

        showNetworkMessage(
            "⚠ NETWORK BOUNDARY — MOVE BLOCKED",
            "warning"
        );

        return;
    }


    const newPosition =
        newRow * 5 + newColumn;


    playerPosition =
        newPosition;

    movesLeft--;


    const cells =
        document.querySelectorAll(".network-cell");

    const targetCell =
        cells[newPosition];


    // VIRUS NODE

    if (
        targetCell &&
        targetCell.classList.contains("virus-node")
    ) {

        targetCell.classList.add(
            "virus-hit"
        );

        screenFlash("danger");

        loseLife();


        showNetworkMessage(
            "☠ VIRUS NODE HIT — ONE LIFE LOST",
            "danger"
        );

    }


    // SERVER

    if (newPosition === 24) {

        updateNetworkGrid();

        setTimeout(function () {

            completeNetworkRescue();

        }, 800);

        return;
    }


    updateNetworkGrid();


    // NO MOVES LEFT

    if (movesLeft <= 0) {

        showNetworkMessage(
            "✕ NO MOVES LEFT — NETWORK LOCKED",
            "danger"
        );

        setTimeout(function () {

            gameOver();

        }, 1000);

    }

}


// =================================
// NETWORK MESSAGE
// =================================

function showNetworkMessage(
    message,
    type
) {

    const element =
        document.getElementById(
            "networkMessage"
        );


    if (!element) {
        return;
    }


    element.textContent =
        message;


    if (type === "danger") {

        element.style.color =
            "#f87171";

    }

    else {

        element.style.color =
            "#facc15";

    }

}


// =================================
// COMPLETE NETWORK RESCUE
// =================================

function completeNetworkRescue() {

    // Prevent duplicate completion

    if (keys === 4) {

        keys = 5;

        updateKeys();
        updateProgress();

    }


    document.removeEventListener(
        "keydown",
        handleNetworkKeyboard
    );


    missionContent.innerHTML = `

        <div class="network-complete">

            <div class="server-icon">
                🖥️
            </div>


            <h2>
                NETWORK CONNECTION RESTORED
            </h2>


            <p>
                CENTRAL SERVER REACHED
            </p>


            <div class="mission-code">

                YOUR CODE:
                <strong>7</strong>

            </div>


            <p class="code-instruction">

                All five Digital Keys have been recovered.
                Enter the final access code to restore the school system.

            </p>


            <button
                id="accessTerminalButton"
                class="continue-button">

                ACCESS FINAL TERMINAL →

            </button>

        </div>

    `;


    systemMessage(
        "NETWORK RESCUE COMPLETE — DIGITAL KEY 05 ACQUIRED.",
        "success"
    );


    document
        .getElementById(
            "accessTerminalButton"
        )
        .addEventListener(
            "click",
            loadFinalTerminal
        );

}


// =================================
// FINAL ACCESS TERMINAL
// =================================

function loadFinalTerminal() {

    missionContent.innerHTML = `

        <div class="final-terminal">

            <div class="final-terminal-header">

                <span>
                    🔐 CENTRAL ACCESS TERMINAL
                </span>

                <span>
                    SYSTEM LOCKED
                </span>

            </div>


            <div class="final-terminal-body">

                <div class="final-icon">
                    🔑
                </div>


                <h2>
                    FINAL ACCESS REQUIRED
                </h2>


                <p>
                    Enter the five mission codes
                    to unlock the school system.
                </p>


                <div class="code-hint">

                    <span>
                        KEY 01
                    </span>

                    <span>
                        KEY 02
                    </span>

                    <span>
                        KEY 03
                    </span>

                    <span>
                        KEY 04
                    </span>

                    <span>
                        KEY 05
                    </span>

                </div>


                <input
                    type="text"
                    id="finalCode"
                    maxlength="5"
                    placeholder="_ _ _ _ _"
                    autocomplete="off"
                >


                <button
                    id="restoreButton"
                    class="restore-button">

                    RESTORE SCHOOL SYSTEM

                </button>


                <p id="finalMessage"></p>

            </div>

        </div>

    `;


    const input =
        document.getElementById(
            "finalCode"
        );


    const button =
        document.getElementById(
            "restoreButton"
        );


    button.addEventListener(
        "click",
        checkFinalCode
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                checkFinalCode();

            }

        }
    );


    input.focus();

}


// =================================
// CHECK FINAL CODE
// =================================

function checkFinalCode() {

    const input =
        document.getElementById(
            "finalCode"
        );


    const message =
        document.getElementById(
            "finalMessage"
        );


    const enteredCode =
        input.value.trim();


    const correctCode =
        "63847";


    if (enteredCode === correctCode) {

        screenFlash("success");

        message.textContent =
            "✓ ACCESS GRANTED";

        message.style.color =
            "#22c55e";


        document.getElementById(
            "restoreButton"
        ).disabled = true;


        input.disabled = true;


        setTimeout(function () {

            showFinalSuccess();

        }, 1200);

    }

    else {

        screenFlash("danger");

        message.textContent =
            "✕ INVALID ACCESS CODE";

        message.style.color =
            "#f87171";


        input.value = "";

        input.focus();


        systemMessage(
            "ACCESS DENIED — CHECK YOUR MISSION CODES.",
            "danger"
        );

    }

}


// =================================
// FINAL SUCCESS
// =================================

function showFinalSuccess() {

    missionContent.innerHTML = `

        <div class="final-success">

            <div class="success-icon">
                ✓
            </div>


            <div class="success-label">
                ACCESS GRANTED
            </div>


            <h2>
                SCHOOL SYSTEM RESTORED
            </h2>


            <div class="success-line"></div>


            <p>
                VIRUS REMOVED SUCCESSFULLY
            </p>


            <div class="final-stats">

                <div>
                    <strong>05</strong>
                    <span>DIGITAL KEYS</span>
                </div>

                <div>
                    <strong>100%</strong>
                    <span>SYSTEM RESTORED</span>
                </div>

            </div>


            <div class="final-message">

                CONGRATULATIONS, CODE AGENT.<br>
                YOU SAVED THE SCHOOL NETWORK.

            </div>

        </div>

    `;


    systemMessage(
        "MISSION COMPLETE — SCHOOL SYSTEM FULLY RESTORED.",
        "success"
    );

}