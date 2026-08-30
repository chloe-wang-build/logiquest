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

    if (currentStep === 0)
    
    {
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

    else if (currentStep === 1) {
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

            <input
                id="student-list-answer"
                type="text"
                placeholder="Example: d, 2d, ..."
            >

            <br>

            <button id="previous-step-button">
                Previous
            </button>

            <button id="check-list-button">
                Check my answer
            </button>

            <button id="list-stuck-button">
                I'm stuck
            </button>

            <div id="feedback-area"></div>

        </div>
    `;

    setupSecondStepButtons(step);
    const previousButton =
    document.getElementById("previous-step-button");

    previousButton.addEventListener("click", function () {
    goToPreviousStep();
    });
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

                <button id="previous-step-button">
                    Previous
                </button>

                <button id="next-step-button">
                    Continue
                </button>

            </div>
        `;
        const previousButton =
            document.getElementById("previous-step-button");

        previousButton.addEventListener("click", function () {
           goToPreviousStep();
        });

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
            <h4>Try a concrete case</h4>

            <p>
                ${step.stuckHint}
            </p>

            <textarea
                id="stuck-answer"
                rows="3"
                placeholder="Write what you notice..."
            ></textarea>

            <br>

            <button id="return-button">
                Connect it back to d
            </button>
        `;

        const returnButton = document.getElementById("return-button");

        returnButton.addEventListener("click", function () {
            feedbackArea.innerHTML = `
                <h4>Now generalize</h4>

                <p>
                    ${step.stuckFollowUp}
                </p>
            `;
        }); 
    });
}

function setupSecondStepButtons(step) {
    const checkButton = document.getElementById("check-list-button");
    const stuckButton = document.getElementById("list-stuck-button");
    const answerBox = document.getElementById("student-list-answer");
    const feedbackArea = document.getElementById("feedback-area");


    checkButton.addEventListener("click", function () {
        const studentAnswer = normalizeAnswer(answerBox.value);

        if (studentAnswer === "") {
            feedbackArea.innerHTML = `
                <p>
                    Enter the five integers first.
                </p>
            `;

            return;
        }


        const isCorrect = step.acceptedAnswers.some(function (answer) {
            return normalizeAnswer(answer) === studentAnswer;
        });


        if (isCorrect) {
            feedbackArea.innerHTML = `
                <h4>Exactly.</h4>

                <p>
                    The smallest possibilities are:
                    <strong>${step.expectedIdea}</strong>
                </p>

                <p>
                    Notice what happened: the words
                    <strong>positive</strong>,
                    <strong>different</strong>, and
                    <strong>multiple of d</strong>
                    all contributed to this representation.
                </p>

                <button id="continue-after-list">
                    Continue
                </button>
            `;

            const continueButton =
                document.getElementById("continue-after-list");

            continueButton.addEventListener("click", function () {
                goToNextStep();
            });
        }

        else {
            feedbackArea.innerHTML = `
                <p>
                    Not quite yet.

                    Check that every number is a positive multiple of d,
                    that all five are different, and that you have chosen
                    the smallest possibilities.
                </p>
            `;
        }
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

function goToPreviousStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
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

            <button id="previous-step-button">
            Previous
            </button>
        `;
        const previousButton =
        document.getElementById("previous-step-button");

        previousButton.addEventListener("click", function () {
        goToPreviousStep();
        });
    }
}

function normalizeAnswer(answer) {
    return answer
        .toLowerCase()
        .replace(/\s/g, "")
        .replace(/\*/g, "");
}

// Start the reasoning process
startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    showStep();
});