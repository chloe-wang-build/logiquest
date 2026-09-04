const problemData = {
    id: "problem-009",

    title: "Letter Grid",

    topic: "Logic & Constraints",

    level: "Start Here",

    source: {
        organization: "Centre for Education in Mathematics and Computing (CEMC)",
        contest: "Gauss",
        year: 2025,
        grade: 7,
        question: 24,
        copyright: "University of Waterloo",
        license: "CC BY-NC 4.0",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html"
    },

    problemText: `
        In the diagram, each row, each column, and each shape shown by the thick lines must contain the letters A, B, C, D, and E. If each square contains exactly one letter, what letter must be placed in the shaded square?

        <img
            src="images/problem-009-diagram.png"
            alt="5 by 5 letter grid with thick-bordered regions"
            class="problem-diagram"
        >
    `,

    learningObjective: `
        Use overlapping constraints to determine which possibilities
        are forced in a logic grid.
    `,

    checkpoints: [

        {
            id: "understand-constraints",

            goal: "Identify the three kinds of constraints.",

            prompt: `
                Look at any empty square.

                What three parts of the grid could restrict which
                letter can go in that square?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Each square belongs to a row, a column,
                        and one thick-bordered shape.
                    `
                }
            ],

            takeaway: `
                A square must satisfy three constraints at once:
                its row, its column, and its thick-bordered shape.

                Each must contain A, B, C, D, and E.
            `
        },


        {
            id: "place-c",

            goal: "Use overlapping constraints to place C.",

            prompt: `
                Start with the C already shown in the grid.

                Look at the thick-bordered shape containing the D.

                Where must C go in that shape?
                Explain how the existing C rules out other positions.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        The existing C is in column 2.

                        Which squares in the D-shaped region
                        therefore cannot contain C?
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Also remember that a thick-bordered shape
                        itself can contain C only once.

                        These restrictions force C into the
                        rightmost square of the second row.
                    `
                }
            ],

            takeaway: `
                C must go in the rightmost square of the second row.

                This is the main strategy: combine restrictions from
                different parts of the grid until only one position remains.
            `
        },


        {
            id: "place-e",

            goal: "Continue the constraint chain.",

            prompt: `
                Now focus on the thick-bordered shape containing
                the given E.

                Where must the other relevant E be placed once you
                use both the row and shape restrictions?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Row 5 already contains E.

                        So no other square in row 5 can be E.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        This forces E into row 4, column 2.
                    `
                }
            ],

            takeaway: `
                E is forced into row 4, column 2.

                One forced placement can create new restrictions
                elsewhere in the grid.
            `
        },


        {
            id: "build-chain",

            goal: "Use the new information to create more forced placements.",

            prompt: `
                Now use the letters you have placed together with
                the original A, B, C, D, and E.

                What other squares can you force?

                Try to find a chain of deductions rather than
                guessing.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Look closely at row 2.

                        After placing C, which letters are still
                        missing from that row?
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Row 2 is missing B and E.

                        Column 2 already contains E, so:

                        row 2, column 1 = E
                        row 2, column 2 = B.
                    `
                }
            ],

            takeaway: `
                Row 2 forces two more placements:

                row 2, column 1 = E
                row 2, column 2 = B.

                The useful pattern is to revisit earlier rows,
                columns, and shapes whenever new information appears.
            `
        },


        {
            id: "approach-shaded",

            goal: "Propagate the constraints toward the shaded square.",

            prompt: `
                Continue from these forced placements.

                Can you use the thick-bordered shapes and columns
                to determine enough additional letters to restrict
                the shaded square?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Useful placements to investigate next are:

                        row 1, column 1
                        row 5, column 2
                        row 5, column 4
                        row 3, column 4.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        The deductions lead to:

                        row 1, column 1 = A
                        row 5, column 2 = A
                        row 5, column 4 = D
                        row 3, column 4 = B.
                    `
                }
            ],

            takeaway: `
                Combining the row, column, and shape restrictions
                forces several more letters.

                We now have enough information to determine the
                shaded square without completing the entire grid.
            `
        },


        {
            id: "shaded-square",

            goal: "Determine the shaded square.",

            prompt: `
                Return to the shaded square.

                Using the constraints you have established,
                which letter must be in the shaded square?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Focus on the thick-bordered shape containing
                        the shaded square.

                        Which letters have already been accounted for,
                        and which one is still needed?
                    `
                }
            ],

            takeaway: `
                The shaded square must contain B.

                The answer is B.
            `
        }

    ]
};