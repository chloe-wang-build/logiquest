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
         title: "Start with a simpler case",
         text: `
            Suppose the greatest common divisor were 10.

            What would have to be true about all five numbers?
        `,
         answerType: "text",
         expectedIdea: "Each number must be a multiple of 10.",
         stuckHint: `
            Think about what "greatest common divisor = 10" tells you
            about every individual number.
        `
    },

        {
            type: "experiment",
            title: "Build an example",
            text: `
                The five numbers must be different and positive.

                What are the smallest five possible numbers if they are all multiples of 10?
            `
        },

        {
            type: "generalize",
            title: "Replace 10 with d",
            text: `
                Now suppose the greatest common divisor is d.

                What are the smallest five different positive multiples of d?
            `
        }
    ]
};