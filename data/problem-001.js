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
    }
    ]
};