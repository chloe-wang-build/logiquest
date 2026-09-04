const problemData = {
    id: "problem-006",

    title: "Circle Colourings",

    topic: "Counting & Symmetry",

    level: "Start Here",

    source: {
        organization: "Centre for Education in Mathematics and Computing (CEMC)",
        contest: "Gauss",
        year: 2023,
        grade: 7,
        question: 24,
        copyright: "University of Waterloo",
        license: "CC BY-NC 4.0",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2023/2023Gauss7Contest.html"
    },

    problemText: `
        A circle is divided into six equal sections. Each section is
        to be coloured with a single colour so that three sections
        are red, one is blue, one is green, and one is yellow. Two
        circles have the same colouring if one can be rotated to
        match the other. In the diagram, Figure 1 and Figure 2
        have the same colouring, while Figure 1 and Figure 3
        have different colourings. How many different colourings
        are there for the circle?

        <img
            src="images/problem-006-diagram.png"
            alt="Three example circle colourings showing rotational equivalence"
            class="problem-diagram"
        >
    `,

    learningObjective: `
        Use rotational symmetry to remove equivalent arrangements
        before counting the remaining possibilities.
    `,

    checkpoints: [

        {
            id: "understand-rotation",

            goal: "Understand what counts as a different colouring.",

            prompt: `
                Imagine rotating a completed circle without changing
                any of its colours.

                Would this create a new colouring, or would it still
                count as the same colouring?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Look back at the examples in the question.

                        What makes Figure 1 and Figure 2 count
                        as the same colouring?
                    `
                }
            ],

            takeaway: `
                Rotating the entire circle does not create a new colouring.

                So we care about the positions of the colours relative
                to one another, not their absolute positions on the page.
            `
        },


        {
            id: "fix-blue",

            goal: "Use symmetry to fix one colour.",

            prompt: `
                There is exactly one blue section.

                Since rotating the entire circle does not create
                a new colouring, do we really need to consider
                all six possible positions for blue?

                What could we do instead?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Any colouring can be rotated until its blue
                        section is at the top.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Fix the blue section at the top.

                        This does not remove any genuinely different
                        colourings because every colouring has exactly
                        one blue section.
                    `
                }
            ],

            takeaway: `
                We can fix blue in one chosen section.

                Rotation lets us do this without losing any
                genuinely different colourings.
            `
        },


        {
            id: "place-green",

            goal: "Count the possibilities for green.",

            prompt: `
                Blue is now fixed.

                How many sections remain where the single green
                section could be placed?
            `,

            interaction: {
                type: "number-input",
                answer: 5
            },

            scaffolds: [],

            takeaway: `
                Five sections remain.

                Therefore, there are 5 possible positions for green.
            `
        },


        {
            id: "place-yellow",

            goal: "Count the possibilities for yellow.",

            prompt: `
                Suppose blue and green have now both been placed.

                How many possible sections remain for the single
                yellow section?
            `,

            interaction: {
                type: "number-input",
                answer: 4
            },

            scaffolds: [],

            takeaway: `
                Four sections remain.

                Therefore, for each choice of green,
                there are 4 choices for yellow.
            `
        },


        {
            id: "red-forced",

            goal: "Recognize when the remaining choices are forced.",

            prompt: `
                Blue, green, and yellow have now each been placed.

                What choices are left for the remaining three sections?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        The problem requires exactly three red sections.
                    `
                }
            ],

            takeaway: `
                There are no more choices to make.

                All three remaining sections must be red.
            `
        },


        {
            id: "combine",

            goal: "Count the different colourings.",

            prompt: `
                There are 5 choices for the position of green.

                For each of those, there are 4 choices for yellow.

                The remaining sections are then forced to be red.

                How many different colourings are there?
            `,

            interaction: {
                type: "number-input",
                answer: 20
            },

            scaffolds: [],

            takeaway: `
                There are

                5 × 4 = 20

                different colourings.

                The key was using rotational symmetry first,
                so equivalent rotations were not counted repeatedly.
            `
        }

    ]
};