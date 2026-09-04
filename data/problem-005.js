const problemData = {
    id: "problem-005",

    title: "Rectangular Prism Digits",

    topic: "Number Sense & Constraints",

    level: "Start Here",

    source: {
        organization: "Centre for Education in Mathematics and Computing (CEMC)",
        contest: "Gauss",
        year: 2023,
        grade: 7,
        question: 23,
        copyright: "University of Waterloo",
        license: "CC BY-NC 4.0",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2023/2023Gauss7Contest.html"
    },

    problemText: `
        The digits from 1 to 9 are each used exactly once to write three one-digit integers and 
        three two-digit integers. The one-digit integers are equal to the length, width
        and height of a rectangular prism. The two-digit integers are equal to the areas of
        the faces of the same prism. What is the surface area of the rectangular prism?
    `,

    learningObjective: `
        Use digit restrictions and multiplication relationships
        to systematically eliminate impossible cases.
    `,

    checkpoints: [

        {
            id: "connect-dimensions-areas",

            goal: "Connect the dimensions to the face areas.",

            prompt: `
                Suppose the three one-digit dimensions are a, b, and c.

                How are the three two-digit face areas related
                to these dimensions?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        A rectangular face uses two of the three dimensions.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        The three face areas are

                        ab, ac, and bc.
                    `
                }
            ],

            takeaway: `
                If the dimensions are a, b, and c,
                the three different face areas are

                ab, ac, and bc.

                So the six numbers are not independent:
                the three two-digit numbers are determined
                by the three one-digit dimensions.
            `
        },


        {
            id: "digit-five",

            goal: "Determine where the digit 5 can appear.",

            prompt: `
                Every digit from 1 through 9 must appear exactly once.

                Could 5 be one of the prism's dimensions?

                Think about what would happen when 5 is multiplied
                by either of the other dimensions.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        What is the units digit of a product involving 5?
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Multiplying 5 by another digit gives a number
                        ending in either 0 or 5.

                        But 0 is unavailable, and digit 5 cannot
                        be used twice.
                    `
                }
            ],

            takeaway: `
                5 cannot be one of the dimensions.

                Therefore, digit 5 must appear somewhere in one
                of the two-digit face areas.
            `
        },


        {
            id: "where-five-in-area",

            goal: "Restrict the possible face area containing 5.",

            prompt: `
                We now know that 5 appears in a two-digit face area.

                Could it be the units digit?

                If not, where must it appear?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        A product ending in 5 would require one
                        of its one-digit factors to be 5.
                    `
                }
            ],

            takeaway: `
                5 cannot be the units digit because that would require
                5 to be one of the dimensions.

                Therefore, 5 must be the tens digit of a face area.
            `
        },


        {
            id: "possible-products",

            goal: "Find the possible products in the 50s.",

            prompt: `
                Find the two-digit numbers from 50 to 59 that can
                be written as the product of two different one-digit
                integers, without using 5 as a factor.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Look for products of two different digits
                        from 1 through 9.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        The only possibilities are

                        54 = 6 × 9

                        and

                        56 = 7 × 8.
                    `
                }
            ],

            takeaway: `
                One pair of dimensions must therefore be either

                6 and 9

                or

                7 and 8.
            `
        },


        {
            id: "eliminate-78",

            goal: "Eliminate one of the two candidate pairs.",

            prompt: `
                Suppose two dimensions were 7 and 8.

                Then one face area would be 56.

                The digits 5, 6, 7, and 8 would already be used.

                Try the remaining possible digits for the third dimension.
                Can any one of them produce two valid face areas
                without repeating a digit?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        The remaining digits are

                        1, 2, 3, 4, 9.

                        Check what happens when each is multiplied
                        by 7 and by 8.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Each possibility fails:

                        1 does not make two-digit areas;
                        2 gives 16, repeating 6;
                        3 gives 21 and 24, repeating 2;
                        4 gives 28, repeating 8;
                        9 gives 63, repeating 6.
                    `
                }
            ],

            takeaway: `
                The pair 7 and 8 is impossible.

                Therefore, two of the dimensions must be

                6 and 9.
            `
        },


        {
            id: "find-third-dimension",

            goal: "Determine the remaining dimension.",

            prompt: `
                Two dimensions are 6 and 9, giving the face area 54.

                Which remaining digit can be the third dimension
                so that all digits from 1 through 9 are used exactly once?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Test a remaining digit by multiplying it by
                        both 6 and 9.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Try 3.

                        3 × 6 = 18
                        3 × 9 = 27
                        6 × 9 = 54

                        Now inspect all nine digits.
                    `
                }
            ],

            takeaway: `
                The third dimension is 3.

                The dimensions are

                3, 6, 9,

                and the three face areas are

                18, 27, 54.

                Together these use every digit from 1 through 9
                exactly once.
            `
        },


        {
            id: "surface-area",

            goal: "Calculate the surface area.",

            prompt: `
                The three different face areas are

                18, 27, and 54.

                A rectangular prism has two faces of each type.

                What is the total surface area?
            `,

            interaction: {
                type: "number-input",
                answer: 198
            },

            scaffolds: [],

            takeaway: `
                Surface area

                = 2(18 + 27 + 54)
                = 2(99)
                = 198.
            `
        }

    ]
};