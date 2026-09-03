const problemData = {
    id: "problem-002",

    title: "Tiny Numbers",

    topic: "Counting & Cases",

    level: "Start Here",

    source: {
    organization: "Centre for Education in Mathematics and Computing (CEMC)",
    contest: "Gauss",
    year: 2024,
    grade: 7,
    question: 24,
    copyright: "University of Waterloo",
    license: "CC BY-NC 4.0",
    url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024Gauss7Contest.html"
},

    problemText: `
        A three-digit integer is an integer from 100 to 999, inclusive. A three-digit integer is called Tiny if no rearrangement of its digits gives a three-digit integer that is smaller. For example, 138, 207, and 566 are Tiny, but 452, 360, and 727 are not. 
        
        How many three-digit integers are Tiny?

        `,

    learningObjective: `
        Characterize possible objects, divide them into exhaustive
        cases, and count each case systematically.
    `,

    checkpoints: [

    {
        id: "understand-tiny",

        goal: "Understand what the definition of Tiny requires.",

        prompt: `
            Look at the examples:

            Tiny: 138, 207, 566
            Not Tiny: 452, 360, 727

            What seems to make a number Tiny?
        `,

        interaction: {
            type: "open-response"
        },

        scaffolds: [
            {
                level: 1,
                type: "focus",
                prompt: `
                    Focus first on 452.

                    Can you rearrange its digits to make a smaller
                    three-digit number?
                `
            },
            {
                level: 2,
                type: "concrete-example",
                prompt: `
                    452 can be rearranged as 245.

                    Since 245 < 452, the original number is not Tiny.

                    Now compare that idea with 138.
                    Can its digits be rearranged to make a smaller
                    three-digit number?
                `
            }
        ],

        takeaway: `
            A Tiny number must already be the smallest valid
            three-digit arrangement of its digits.
        `
    },


    {
        id: "notice-zero",

        goal: "Recognize why zero requires special treatment.",

        prompt: `
            If Tiny numbers simply had their digits in increasing order,
            207 would seem strange because 0 is smaller than 2.

            Why can we not just move the 0 to the front?
        `,

        interaction: {
            type: "short-response"
        },

        scaffolds: [
            {
                level: 1,
                type: "focus",
                prompt: `
                    What happens if 207 is rearranged as 027?

                    Is 027 a three-digit integer?
                `
            }
        ],

        takeaway: `
            A rearrangement only matters if it is still a
            three-digit integer. Therefore, zero creates a special case.
        `
    },


    {
        id: "create-cases",

        goal: "Divide all possibilities into exhaustive cases.",

        prompt: `
            Since zero behaves differently, it will help to separate
            Tiny numbers according to where zeros appear.

            Can you identify useful cases that cover every possibility?
        `,

        interaction: {
            type: "guided-discovery"
        },

        scaffolds: [
            {
                level: 1,
                type: "focus",
                prompt: `
                    Start with the units digit.

                    What happens if the units digit is 0?
                `
            },
            {
                level: 2,
                type: "strong-guidance",
                prompt: `
                    If the units digit is 0, think about whether the
                    tens digit could be nonzero.

                    Then consider separately:
                    - tens digit 0 but units digit nonzero
                    - neither tens nor units digit 0
                `
            }
        ],

        takeaway: `
            Every Tiny number falls into exactly one of three cases:

            1. Units digit is 0.
            2. Units digit is nonzero but tens digit is 0.
            3. Tens and units digits are both nonzero.
        `
    },


    {
        id: "case-one",

        goal: "Count Tiny numbers whose units digit is zero.",

        prompt: `
            Case 1: The units digit is 0.

            What must be true about the tens digit for the number
            to remain Tiny?
        `,

        interaction: {
            type: "short-response"
        },

        scaffolds: [
            {
                level: 1,
                type: "concrete-example",
                prompt: `
                    Consider 230.

                    Could switching the 3 and 0 produce a smaller
                    three-digit integer?
                `
            }
        ],

        takeaway: `
            The tens digit must also be 0.

            Therefore the numbers are:

            100, 200, ..., 900

            giving 9 Tiny numbers.
        `
    },


    {
        id: "case-two",

        goal: "Count Tiny numbers of the form x0z.",

        prompt: `
            Case 2: The number has the form x0z,
            where z is nonzero.

            What relationship between x and z is necessary
            for the number to be Tiny?
        `,

        interaction: {
            type: "short-response"
        },

        scaffolds: [
            {
                level: 1,
                type: "focus",
                prompt: `
                    What happens if x > z?

                    Compare 503 with 305.
                `
            }
        ],

        takeaway: `
            We need x ≤ z.

            If x = 1, there are 9 choices for z.
            If x = 2, there are 8.
            Then 7, 6, ..., 1.

            Total:

            9 + 8 + ... + 1 = 45.
        `
    },


    {
        id: "case-three",

        goal: "Characterize and count the no-zero case.",

        prompt: `
            Case 3: None of the digits after the hundreds place is zero.

            Write the number as xyz.

            What relationship among x, y, and z must hold
            for xyz to be Tiny?
        `,

        interaction: {
            type: "short-response"
        },

        scaffolds: [
            {
                level: 1,
                type: "focus",
                prompt: `
                    If a later digit were smaller than an earlier digit,
                    could rearranging the digits make the number smaller?
                `
            },
            {
                level: 2,
                type: "concrete-example",
                prompt: `
                    Compare 247 with 427 and 274.

                    Which ordering gives the smallest number?
                `
            }
        ],

        takeaway: `
            The digits must satisfy:

            x ≤ y ≤ z.

            Counting all such possibilities gives:

            45 + 36 + 28 + 21 + 15 + 10 + 6 + 3 + 1 = 165.
        `
    },


    {
        id: "combine-cases",

        goal: "Combine mutually exclusive cases.",

        prompt: `
            The three cases contain:

            9, 45, and 165 Tiny numbers.

            How many Tiny three-digit integers are there altogether?
        `,

        interaction: {
            type: "number-input",
            answer: 219
        },

        scaffolds: [],

        takeaway: `
            9 + 45 + 165 = 219.

            Therefore, there are 219 Tiny three-digit integers.
        `
    }

]
};