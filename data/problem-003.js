const problemData = {
    id: "problem-003",

    title: "Arithmetic Grid",

    topic: "Patterns & Algebra",

    level: "Start Here",

    source: {
        organization: "Centre for Education in Mathematics and Computing (CEMC)",
        contest: "Gauss",
        year: 2025,
        grade: 7,
        question: 25,
        copyright: "University of Waterloo",
        license: "CC BY-NC 4.0",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html"
    },

    problemText: `
        In an arithmetic grid, adjacent numbers increase by a fixed integer a > 0 moving left
to right within each row. Also, adjacent numbers increase by a fixed integer b > 0
moving top to bottom within each column. For example, the grid shown is a 3 x 3
arithmetic grid with a = 2 and b = 5.
<table class="math-grid">
    <tr>
        <td>1</td>
        <td>3</td>
        <td>5</td>
    </tr>
    <tr>
        <td>6</td>
        <td>8</td>
        <td>10</td>
    </tr>
    <tr>
        <td>11</td>
        <td>13</td>
        <td>15</td>
    </tr>
</table>
Suppose that an 8 x 8 arithmetic grid has a 1 in the top left corner, and a number
less than 75 in the bottom right corner. How many such grids have a 45 somewhere
in column 5?
    `,

    learningObjective: `
        Represent a pattern algebraically, use constraints to reduce
        the possibilities, and search the remaining cases systematically.
    `,

    checkpoints: [

        {
            id: "build-pattern",

            goal: "Describe how the grid grows.",

            prompt: `
                The top-left entry is 1.

                Without trying to fill the entire 8 × 8 grid,
                what would the entries immediately to the right
                and immediately below 1 be?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Moving one square right adds a.
                        Moving one square down adds b.
                    `
                }
            ],

            takeaway: `
                The entry to the right is 1 + a, while the entry
                below is 1 + b.

                This lets us describe locations in the grid using
                a and b instead of writing out every number.
            `
        },


        {
            id: "general-cell",

            goal: "Represent a position algebraically.",

            prompt: `
                Suppose a square is r rows down and c columns
                to the right of the top-left square.

                How could you express its value using a, b, r, and c?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Every move right adds a.
                        Every move down adds b.

                        Count how many of each type of move were made.
                    `
                },

                {
                    level: 2,
                    type: "concrete-example",
                    prompt: `
                        If you move 2 squares right and 3 squares down,
                        the value is

                        1 + 2a + 3b.

                        Now generalize that pattern.
                    `
                }
            ],

            takeaway: `
                A square c positions to the right and r positions
                down from the top-left has value

                1 + ca + rb.
            `
        },


        {
            id: "bottom-right",

            goal: "Translate the bottom-right condition into a constraint.",

            prompt: `
                To reach the bottom-right corner of an 8 × 8 grid,
                how many moves right and how many moves down are needed?

                Use this to express the bottom-right value.
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Starting in row 1, how many downward moves
                        are needed to reach row 8?

                        Do the same for the columns.
                    `
                }
            ],

            takeaway: `
                Reaching the bottom-right requires 7 moves right
                and 7 moves down.

                Its value is therefore

                1 + 7a + 7b.
            `
        },


        {
            id: "create-bound",

            goal: "Use the bottom-right value to restrict a and b.",

            prompt: `
                The bottom-right number is less than 75.

                Starting from

                1 + 7a + 7b < 75,

                what restriction can you obtain on a + b?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Subtract 1 first, then divide by 7.
                        Remember that a and b are positive integers.
                    `
                }
            ],

            takeaway: `
                We get

                7a + 7b < 74,

                so

                a + b < 74/7.

                Since a and b are integers,

                a + b ≤ 10.
            `
        },


        {
            id: "locate-45",

            goal: "Reduce where 45 could appear.",

            prompt: `
                Column 5 is four moves to the right of column 1.

                What is the entry in row 5, column 5?

                Use a + b ≤ 10 to decide whether 45 could appear
                there or anywhere above it.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Row 5 is four moves down and column 5 is
                        four moves right.

                        Its value is therefore 1 + 4a + 4b.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Since a + b ≤ 10,

                        1 + 4a + 4b ≤ 41.

                        What does that tell you about the first
                        five entries in column 5?
                    `
                }
            ],

            takeaway: `
                Row 5, column 5 is at most 41.

                Since values increase as we move downward, 45 cannot
                occur in rows 1 through 5 of column 5.

                Therefore, 45 can only appear in rows 6, 7, or 8.
            `
        },


        {
            id: "row-six",

            goal: "Find the possibilities when 45 is in row 6.",

            prompt: `
                If 45 is in row 6, column 5, then

                1 + 4a + 5b = 45,

                so

                4a + 5b = 44.

                Find the positive integer pairs (a, b) that also
                satisfy a + b ≤ 10.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Because 4a and 44 are divisible by 4,
                        what must be true about 5b?
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        b must be a multiple of 4.

                        Since b is a positive integer and b ≤ 9,
                        check b = 4 and b = 8.
                    `
                }
            ],

            takeaway: `
                The valid pairs are

                (a, b) = (6, 4)
                and
                (a, b) = (1, 8).

                So row 6 gives 2 grids.
            `
        },


        {
            id: "row-seven",

            goal: "Find the possibilities when 45 is in row 7.",

            prompt: `
                If 45 is in row 7, column 5,

                1 + 4a + 6b = 45.

                Simplify this equation and find all valid
                positive integer pairs.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Simplifying gives

                        2a + 3b = 22.

                        What does parity tell you about b?
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        b must be even.

                        Check the possible positive even values
                        while remembering a + b ≤ 10.
                    `
                }
            ],

            takeaway: `
                The valid pairs are

                (8, 2), (5, 4), and (2, 6).

                So row 7 gives 3 grids.
            `
        },


        {
            id: "row-eight",

            goal: "Find the possibilities when 45 is in row 8.",

            prompt: `
                Now suppose 45 is in row 8, column 5.

                Form the corresponding equation and find
                the valid positive integer pairs.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        The equation is

                        4a + 7b = 44.

                        What divisibility condition does this place on b?
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        b must be a multiple of 4.

                        Check the possibilities allowed by b ≤ 9.
                    `
                }
            ],

            takeaway: `
                The only valid pair is

                (a, b) = (4, 4).

                So row 8 gives 1 grid.
            `
        },


        {
            id: "combine",

            goal: "Count all possible arithmetic grids.",

            prompt: `
                You found:

                2 grids with 45 in row 6,
                3 grids with 45 in row 7,
                1 grid with 45 in row 8.

                How many grids are possible altogether?
            `,

            interaction: {
                type: "number-input",
                answer: 6
            },

            scaffolds: [],

            takeaway: `
                2 + 3 + 1 = 6.

                Therefore, there are 6 possible arithmetic grids.
            `
        }

    ]
};