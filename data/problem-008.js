const problemData = {
    id: "problem-008",

    title: "Painted Rectangular Prism",

    topic: "Geometry & Factors",

    level: "Start Here",

    source: {
        organization: "Centre for Education in Mathematics and Computing (CEMC)",
        contest: "Gauss",
        year: 2024,
        grade: 7,
        question: 23,
        copyright: "University of Waterloo",
        license: "CC BY-NC 4.0",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024Gauss7Contest.html"
    },

    problemText: `
        A rectangular prism has integer edge lengths and has a volume of V . The six faces
        of the prism are painted and then the prism is cut into 1 by 1 by 1 cubes. Of these
        cubes, 50 cubes have no paint on them. What is the mean (average) of all possible
        values of V ?
    `,

    learningObjective: `
        Translate a geometric condition into dimensions, then use
        factorization to systematically find all possible cases.
    `,

    checkpoints: [

        {
            id: "locate-unpainted",

            goal: "Understand where the unpainted cubes are.",

            prompt: `
                All six outside faces of the original prism are painted.

                After it is cut into 1 × 1 × 1 cubes, which cubes
                would have no paint on them?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Think about a cube touching one of the outside
                        faces of the prism. Would it have paint on it?
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Only cubes completely inside the prism,
                        not touching any outside face, have no paint.
                    `
                }
            ],

            takeaway: `
                The unpainted cubes are exactly the cubes in the
                interior of the prism.

                Together, they form a smaller rectangular prism.
            `
        },


        {
            id: "interior-volume",

            goal: "Translate the count into an interior volume.",

            prompt: `
                Exactly 50 unit cubes have no paint.

                What does this tell you about the volume of the
                interior rectangular prism?
            `,

            interaction: {
                type: "number-input",
                answer: 50
            },

            scaffolds: [],

            takeaway: `
                Each unit cube has volume 1.

                Therefore, the interior prism has volume 50.
            `
        },


        {
            id: "factor-50",

            goal: "Find all possible interior dimensions.",

            prompt: `
                The interior prism has positive integer dimensions
                whose product is 50.

                Find all possible sets of three dimensions.
                The order of the dimensions does not matter.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Start with the factorization

                        50 = 2 × 5 × 5.

                        Remember that a dimension can also be 1.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        The four possibilities are

                        1 × 1 × 50
                        1 × 2 × 25
                        1 × 5 × 10
                        2 × 5 × 5.
                    `
                }
            ],

            takeaway: `
                There are four possible interior prisms:

                1 × 1 × 50
                1 × 2 × 25
                1 × 5 × 10
                2 × 5 × 5.
            `
        },


        {
            id: "recover-original",

            goal: "Connect the interior dimensions to the original dimensions.",

            prompt: `
                Suppose one dimension of the interior prism is 5.

                The original prism has one painted layer of cubes
                on each side of this interior dimension.

                What would the corresponding original dimension be?

                More generally, how do you recover each original
                dimension from an interior dimension?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        There is one extra layer on one side and
                        another extra layer on the opposite side.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Add 2 to each interior dimension.
                    `
                }
            ],

            takeaway: `
                Each original dimension is 2 greater than the
                corresponding interior dimension.

                For example, an interior dimension of 5 corresponds
                to an original dimension of 7.
            `
        },


        {
            id: "find-volumes",

            goal: "Calculate all possible original volumes.",

            prompt: `
                Add 2 to each dimension of the four interior prisms,
                then calculate the volume of each original prism.

                What four volumes do you get?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "concrete-example",
                    prompt: `
                        Start with

                        1 × 1 × 50.

                        The original dimensions are

                        3 × 3 × 52.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        The four original dimensions are:

                        3 × 3 × 52
                        3 × 4 × 27
                        3 × 7 × 12
                        4 × 7 × 7.
                    `
                }
            ],

            takeaway: `
                The four possible volumes are

                468, 324, 252, and 196.
            `
        },


        {
            id: "find-mean",

            goal: "Find the mean of the possible volumes.",

            prompt: `
                The possible volumes are

                468, 324, 252, and 196.

                What is their mean?
            `,

            interaction: {
                type: "number-input",
                answer: 310
            },

            scaffolds: [],

            takeaway: `
                The mean is

                (468 + 324 + 252 + 196) / 4
                = 1240 / 4
                = 310.
            `
        }

    ]
};