// Get elements from the HTML page
const problemTitle = document.getElementById("problem-title");
const problemSource = document.getElementById("problem-source");
const problemText = document.getElementById("problem-text");
const learningContent = document.getElementById("learning-content");
const startButton = document.getElementById("start-button");


// Load problem information
problemTitle.textContent = problemData.title;

// Do not display the contest source prominently
problemSource.innerHTML = `
    ${problemData.topic} · ${problemData.level}

    <button id="source-button" class="source-button">
        ⓘ Source
    </button>

    <span id="source-details" class="source-details" hidden>
        <br>
        ${problemData.source.year}
        ${problemData.source.contest} Contest,
        Grade ${problemData.source.grade},
        Question ${problemData.source.question}.
        ${problemData.source.organization}.
        © ${problemData.source.copyright}.
        Licensed under ${problemData.source.license}.
        <a
            href="${problemData.source.url}"
            target="_blank"
            rel="noopener noreferrer"
        >
            View original
        </a>
    </span>
`;

const sourceButton =
    document.getElementById("source-button");

const sourceDetails =
    document.getElementById("source-details");

sourceButton.addEventListener("click", function () {
    sourceDetails.hidden = !sourceDetails.hidden;
});

problemText.innerHTML = problemData.problemText;;

learningContent.innerHTML = "";


// Track where the student is
let currentCheckpoint = 0;
let currentScaffold = 0;


// Display a checkpoint
function showCheckpoint() {
    const checkpoint =
        problemData.checkpoints[currentCheckpoint];

    currentScaffold = 0;

    const interactionHTML =
        createInteractionHTML(checkpoint.interaction);

    const checkButtonLabel =
    checkpoint.interaction.type === "number-input"
        ? "Check my answer"
        : "Compare my thinking";    

    learningContent.innerHTML = `
        <div class="learning-step">

    <p>
    ${checkpoint.prompt}
    </p>

            ${interactionHTML}

            <br>

            ${
                currentCheckpoint > 0
                    ? `
                        <button id="previous-button">
                            Previous
                        </button>
                      `
                    : ""
            }

            <button id="check-button">
                ${checkButtonLabel}
            </button>

            ${
                checkpoint.scaffolds.length > 0
                    ? `
                        <button id="stuck-button">
                            I'm stuck
                        </button>
                      `
                    : ""
            }

            <div id="feedback-area"></div>

        </div>
    `;

    setupCheckpointButtons(checkpoint);
}


// Create the correct interaction
function createInteractionHTML(interaction) {

    // Exact numerical answer
    if (interaction.type === "number-input") {
        return `
            <input
                id="student-response"
                type="number"
                placeholder="Enter your answer"
            >
        `;
    }


    // Short mathematical or verbal response
    if (interaction.type === "short-response") {
        return `
            <input
                id="student-response"
                type="text"
                placeholder="Enter a short response"
            >
        `;
    }


    // Longer reasoning
    if (
        interaction.type === "open-response" ||
        interaction.type === "guided-discovery"
    ) {
        return `
            <textarea
                id="student-response"
                rows="4"
                placeholder="Write what you think..."
            ></textarea>
        `;
    }


    // Fallback
    return `
        <textarea
            id="student-response"
            rows="4"
            placeholder="Write what you think..."
        ></textarea>
    `;
}


// Set up buttons for the checkpoint
function setupCheckpointButtons(checkpoint) {

    const checkButton =
        document.getElementById("check-button");

    const stuckButton =
        document.getElementById("stuck-button");

    const previousButton =
        document.getElementById("previous-button");

    const responseBox =
        document.getElementById("student-response");

    const feedbackArea =
        document.getElementById("feedback-area");


    // Previous
    if (previousButton) {
        previousButton.addEventListener("click", function () {
            currentCheckpoint--;
            showCheckpoint();
        });
    }


    // Check response
    checkButton.addEventListener("click", function () {

        const studentResponse =
            responseBox.value.trim();

        if (studentResponse === "") {
            feedbackArea.innerHTML = `
                <p>
                    Try writing an idea first.
                </p>
            `;
            return;
        }


        // Exact checking for number answers
        if (checkpoint.interaction.type === "number-input") {

            const isCorrect =
                Number(studentResponse) ===
                Number(checkpoint.interaction.answer);

            if (!isCorrect) {
                feedbackArea.innerHTML = `
                    <p>
                        Not quite. Check your counting and try again.
                    </p>
                `;
                return;
            }
        }


        feedbackArea.innerHTML = `
            <h4>Key idea</h4>

            <p>
                ${checkpoint.takeaway}
            </p>

            <button id="continue-button">
                Continue
            </button>
        `;

        const continueButton =
            document.getElementById("continue-button");

        continueButton.addEventListener("click", function () {
            goToNextCheckpoint();
        });
    });


    // Optional scaffolding
    if (stuckButton) {

    stuckButton.addEventListener("click", function () {

        const scaffold =
            checkpoint.scaffolds[currentScaffold];

        feedbackArea.innerHTML = `
        <p>
            <strong>Hint</strong>
        </p>

        <p>
            ${scaffold.prompt}
        </p>
        `;


        currentScaffold++;


        // More scaffolding is available
        if (
            currentScaffold <
            checkpoint.scaffolds.length
        ) {
            stuckButton.textContent =
                "Another hint";
        }

        // Student has reached the deepest scaffold
        else {
            stuckButton.style.display = "none";
        }
    });
}
}

// Move forward
function goToNextCheckpoint() {

    currentCheckpoint++;

    if (
        currentCheckpoint <
        problemData.checkpoints.length
    ) {
        showCheckpoint();
    }

    else {
        showProblemComplete();
    }
}


// End screen
function showProblemComplete() {

    learningContent.innerHTML = `
        <div class="learning-step">

            <h3>Problem Complete</h3>

            <p>
                You've worked through the problem.
            </p>

            <button id="previous-button">
                Previous
            </button>

        </div>
    `;

    const previousButton =
        document.getElementById("previous-button");

    previousButton.addEventListener("click", function () {
        currentCheckpoint =
            problemData.checkpoints.length - 1;

        showCheckpoint();
    });
}


// Start
startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    showCheckpoint();
});