const problemData = {
    title: "Problem 1: Building Constraints",

    source: "2024 Gauss Contest, Grade 8, Question 23 — CEMC",

    topic: "Number Theory",

    level: "Start Here",

    problemText: `
        Five different positive integers have a sum of 264.
        Their greatest common divisor is d.
        What is the sum of the digits of the largest possible value of d?
    `,

    steps: [
    {
    type: "thinking-prompt",
    title: "What does the GCD tell you?",
    text: `
        The greatest common divisor of the five integers is d.

        What does this tell you about each of the five integers?
    `,
    answerType: "text",
    expectedIdea: "Each integer must be a multiple of d.",
    stuckHint: `
        Let's make d concrete for a moment.

        Suppose d = 10. If 10 is the greatest common divisor,
        what would have to be true about each of the five integers?
    `,
    stuckFollowUp: `
    If d = 10, each integer would have to be a multiple of 10.

    Now return to the original problem.

    If the greatest common divisor is d instead,
    what must be true about each integer?
`
    },

    {
    type: "experiment",
    title: "Use all the conditions",
    text: `
        So each integer must be a multiple of d.

        The five integers are also positive and different.

        What are the five smallest possible integers they could be?

        Enter them from smallest to largest, separated by commas.
    `,
    answerType: "list",

    acceptedAnswers: [
        "d,2d,3d,4d,5d",
        "d,2*d,3*d,4*d,5*d"
    ],

    expectedIdea: "d, 2d, 3d, 4d, 5d",

    stuckHint: `
        Start listing the positive multiples of d in increasing order:

        d, 2d, 3d, ...

        Remember that all five integers must be different.
    `
},


    {
        type: "constraint",
        title: "Use the total",
        text: `
            What is the smallest possible sum of

            d, 2d, 3d, 4d, and 5d?

            Compare that with the actual total, 264.

            What does this tell you about how large d can be?
        `
    },

    {
        type: "checkpoint",
        title: "Have we found d?",
        text: `
            From the previous step, you should be able to show that d cannot be larger than 17.

            Does that automatically mean d = 17?

            Think carefully about the difference between an upper bound
            and a value that is actually possible.
        `
    },

    {
        type: "constraint",
        title: "Use another condition",
        text: `
            We have used the facts that the numbers are positive,
            different, and have sum 264.

            Now return to the fact that d divides every one of the five numbers.

            What must therefore be true about their sum, 264?
        `
    },

    {
        type: "combine",
        title: "Combine the constraints",
        text: `
            You now know two things:

            1. d is at most 17.
            2. d must divide 264.

            What is the largest possible value of d that satisfies both conditions?
        `
    },

    {
        type: "construct",
        title: "Prove that it can happen",
        text: `
            You have found the largest remaining candidate.

            But there is one final logical step:

            Can you construct five different positive integers
            with sum 264 and greatest common divisor equal to that value?
        `
    },

    {
        type: "solution",
        title: "Put the reasoning together",
        text: `
            The five integers have greatest common divisor d, so each
            integer must be a multiple of d.

            Since they are positive and different, the smallest five
            possible multiples are:

            d, 2d, 3d, 4d, 5d

            Their smallest possible sum is 15d.

            Since the actual sum is 264:

            15d ≤ 264

            so d ≤ 17.

            But this only gives an upper bound.

            Because d divides each of the five integers, d must also
            divide their sum, 264.

            Therefore, d must satisfy both:

            d ≤ 17
            and
            d divides 264.

            The largest divisor of 264 that is at most 17 is 12.

            This value is achievable, for example with:

            12, 24, 36, 48, 144

            These are five different positive integers, their sum is 264,
            and their greatest common divisor is 12.

            Therefore, the largest possible value of d is 12.

            The question asks for the sum of its digits:

            1 + 2 = 3
        `
    },

    {
        type: "reflection",
        title: "What actually solved the problem?",
        text: `
            The important idea was not simply calculating a GCD.

            You translated different pieces of information into constraints:

            • GCD = d → every integer is a multiple of d
            • positive and different → smallest possibilities are d, 2d, 3d, 4d, 5d
            • sum = 264 → d has an upper bound
            • d divides every integer → d must divide 264
            • combine the constraints → d = 12
            • construct an example → verify that 12 is actually possible

            A useful question for future problems is:

            "What does each condition force to be true?"
        `
    },
    {
        type: "generalization",
        title: "Can you generalize the idea?",
        text: `
            Suppose there are k different positive integers instead of five,
            and their greatest common divisor is d.

            The smallest possible integers would be:

            d, 2d, 3d, ..., kd

            What is their smallest possible sum?

            Think about how the expression

            d + 2d + 3d + ... + kd

            could be written more compactly.
        `
    }
    ]
};