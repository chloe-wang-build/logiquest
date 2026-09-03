const problemData = {
    id: "problem-004",

    title: "Eight Different Primes",

    topic: "Prime Numbers & Logical Elimination",

    level: "Start Here",

    source: {
        organization: "Centre for Education in Mathematics and Computing (CEMC)",
        contest: "Gauss",
        year: 2024,
        grade: 7,
        question: 25,
        copyright: "University of Waterloo",
        license: "CC BY-NC 4.0",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024Gauss7Contest.html"
    },

    problemText: `
        Suppose that w; x; y; z; (x + y); (x + z); (234 + z); and (234 - z) are 8 different prime numbers. If w+x+y = 234, and each of y and z is less than 50, the value of w 􀀀 y is
    `,

    learningObjective: `
        Use properties of prime numbers to eliminate impossible cases
        and systematically narrow several conditions to one solution.
    `,

    checkpoints: [

        {
            id: "find-even-prime",

            goal: "Use parity to find an important restriction.",

            prompt: `
                Look at x, y, z, x+y, and x+z.

                What is special about the number 2 compared with
                every other prime number?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Think about whether prime numbers are even or odd.
                    `
                }
            ],

            takeaway: `
                2 is the only even prime number.
                Every other prime number is odd.

                This gives us a powerful way to eliminate possibilities.
            `
        },


        {
            id: "locate-two",

            goal: "Determine which variable must equal 2.",

            prompt: `
                The numbers x, y, and z are all prime.

                If all three were odd, what would happen to
                x+y and x+z?

                Use this idea to determine which of x, y, or z
                must equal 2.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Odd + odd is even.

                        But x+y and x+z must also be prime.
                    `
                },

                {
                    level: 2,
                    type: "concrete-example",
                    prompt: `
                        Suppose y = 2.

                        Then x and z must both be odd primes.
                        What would that make x+z?
                    `
                },

                {
                    level: 3,
                    type: "strong-guidance",
                    prompt: `
                        y cannot be 2 because x+z would be an even
                        number greater than 2.

                        Similarly, z cannot be 2 because x+y would
                        be an even number greater than 2.

                        What possibility remains?
                    `
                }
            ],

            takeaway: `
                Exactly one of x, y, and z must be 2.

                It cannot be y or z, so

                x = 2.
            `
        },


        {
            id: "restrict-z",

            goal: "Use the prime conditions involving z.",

            prompt: `
                Now x = 2.

                This means both z and z+2 must be prime,
                and z < 50.

                Find the possible values of z.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        You are looking for primes below 50 for which
                        adding 2 gives another prime.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Check the prime pairs that differ by 2:

                        3 and 5
                        5 and 7
                        11 and 13
                        17 and 19
                        29 and 31
                        41 and 43

                        What values could z be?
                    `
                }
            ],

            takeaway: `
                The possible values are

                z = 3, 5, 11, 17, 29, or 41.

                We have reduced all primes below 50 to just six candidates.
            `
        },


        {
            id: "determine-z",

            goal: "Use the remaining conditions to determine z.",

            prompt: `
                Remember that both

                234 + z

                and

                234 - z

                must also be prime.

                Test the six possible values of z and determine
                which one survives all the conditions.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        You do not always need to fully factor a number.

                        Look first for easy divisibility by
                        3, 5, or 7.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        For example:

                        z = 3 gives 234 - 3 = 231,
                        which is divisible by 3.

                        Eliminate candidates as soon as one required
                        number is not prime.
                    `
                }
            ],

            takeaway: `
                Every candidate except z = 5 fails.

                For z = 5,

                234 - 5 = 229
                and
                234 + 5 = 239,

                and both are prime.

                Therefore,

                z = 5.
            `
        },


        {
            id: "restrict-y",

            goal: "Use the same prime pattern to restrict y.",

            prompt: `
                Since x = 2, both y and y+2 must also be prime.

                Also, y < 50, and all eight primes must be different.

                What values of y are still possible?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        The same prime pairs that differed by 2
                        were useful for z.

                        Can you reuse that list?
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        The possible first values are

                        3, 5, 11, 17, 29, 41.

                        But z is already 5, and all eight primes
                        must be different.
                    `
                }
            ],

            takeaway: `
                Since z = 5 is already used, the possible values are

                y = 3, 11, 17, 29, or 41.
            `
        },


        {
            id: "determine-y-w",

            goal: "Combine the equation with the remaining candidates.",

            prompt: `
                We know

                w + x + y = 234

                and x = 2.

                First express w in terms of y.

                Then test the remaining possible values of y.
                Remember that w must be a new prime number.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Substitute x = 2:

                        w + 2 + y = 234.

                        Rearrange this for w.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        w = 232 - y.

                        Test

                        y = 3, 11, 17, 29, 41.

                        Eliminate a value if w is composite
                        or duplicates one of the primes already used.
                    `
                }
            ],

            takeaway: `
                Testing the candidates leaves

                y = 41

                and therefore

                w = 232 - 41 = 191.

                Thus,

                y = 41
                and
                w = 191.
            `
        },


        {
            id: "final-answer",

            goal: "Calculate the requested value.",

            prompt: `
                You have found

                w = 191
                and
                y = 41.

                What is w - y?
            `,

            interaction: {
                type: "number-input",
                answer: 150
            },

            scaffolds: [],

            takeaway: `
                w - y = 191 - 41 = 150.

                The important strategy was not random trial and error:
                each prime condition reduced the number of possibilities
                until only one case remained.
            `
        }

    ]
};