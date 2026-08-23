// Get elements from the HTML page
const problemTitle = document.getElementById("problem-title");
const problemSource = document.getElementById("problem-source");
const problemText = document.getElementById("problem-text");
const learningContent = document.getElementById("learning-content");
const startButton = document.getElementById("start-button");


// Put the problem data onto the page
problemTitle.textContent = problemData.title;
problemSource.textContent = problemData.source;

problemText.innerHTML = `
    <p>${problemData.problemText}</p>
`;


// Start with no learning steps visible
learningContent.innerHTML = "";


// Keep track of the current step
let currentStep = 0;


// Display one learning step
function showStep() {
    const step = problemData.steps[currentStep];

    if (currentStep === 0) {
        learningContent.innerHTML = `
            <div class="learning-step">

                <p class="step-type">
                    ${step.type}
                </p>

                <h4>
                    ${step.title}
                </h4>

                <p>
                    ${step.text}
                </p>

                <textarea
                    id="student-answer"
                    rows="4"
                    placeholder="Write what you think here..."
                ></textarea>

                <br>

                <button id="check-thinking-button">
                    Check my thinking
                </button>

                <button id="stuck-button">
                    I'm stuck
                </button>

                <div id="feedback-area"></div>

            </div>
        `;

        setupFirstStepButtons(step);
    }

    else {
        learningContent.innerHTML = `
            <div class="learning-step">

                <p class="step-type">
                    ${step.type}
                </p>

                <h4>
                    ${step.title}
                </h4>

                <p>
                    ${step.text}
                </p>

                <button id="next-step-button">
                    Continue
                </button>

            </div>
        `;

        const nextButton = document.getElementById("next-step-button");

        nextButton.addEventListener("click", function () {
            goToNextStep();
        });
    }
}

function setupFirstStepButtons(step) {
    const checkButton = document.getElementById("check-thinking-button");
    const stuckButton = document.getElementById("stuck-button");
    const answerBox = document.getElementById("student-answer");
    const feedbackArea = document.getElementById("feedback-area");


    checkButton.addEventListener("click", function () {
        const studentAnswer = answerBox.value.trim();

        if (studentAnswer === "") {
            feedbackArea.innerHTML = `
                <p>
                    Write down an idea first, even if you are unsure.
                </p>
            `;

            return;
        }

        feedbackArea.innerHTML = `
            <h4>Compare your thinking</h4>

            <p>
                A key observation is:
                <strong>${step.expectedIdea}</strong>
            </p>

            <button id="continue-after-check">
                Continue
            </button>
        `;

        const continueButton =
            document.getElementById("continue-after-check");

        continueButton.addEventListener("click", function () {
            goToNextStep();
        });
    });


    stuckButton.addEventListener("click", function () {
        feedbackArea.innerHTML = `
            <h4>Smaller prompt</h4>

            <p>
                ${step.stuckHint}
            </p>
        `;
    });
}


function goToNextStep() {
    currentStep++;

    if (currentStep < problemData.steps.length) {
        showStep();
    }

    else {
        learningContent.innerHTML = `
            <h4>Checkpoint</h4>

            <p>
                You have reached the end of the current prototype.
            </p>
        `;
    }
}

// Start the reasoning process
startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    showStep();
});