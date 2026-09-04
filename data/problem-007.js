const problemData = {
    id: "problem-007",

    title: "School Trip Activities",

    topic: "Sets, Percentages & Constraints",

    level: "Start Here",

    source: {
        organization: "Centre for Education in Mathematics and Computing (CEMC)",
        contest: "Gauss",
        year: 2023,
        grade: 7,
        question: 25,
        copyright: "University of Waterloo",
        license: "CC BY-NC 4.0",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2023/2023Gauss7Contest.html"
    },

    problemText: `
        <p>
        A school trip offered its participants three activities: hiking, canoeing and swimming. Attendance records show that of all participants
        </p>
   
        <ul class="problem-conditions">

        <li>10 students participated in all three activities,</li>
        <li>50% participated in at least hiking and canoeing,</li>
        <li>60% participated in at least hiking and swimming,</li>
        <li>k% participated in at least canoeing and swimming, and</li>
        <li>no students participated in fewer than two activities.</li>
        </UL>

        <P>
        If k is a positive integer, what is the sum of all possible values of k?
        </P>
        `,

    learningObjective: `
        Translate overlapping groups into variables, combine percentage
        conditions, and systematically determine the possible cases.
    `,

    checkpoints: [

        {
            id: "define-groups",

            goal: "Represent the overlapping groups.",

            prompt: `
                Let n be the total number of students.

                We already know that 10 students did all three activities.

                How could you represent the students who did exactly
                two activities?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        There are three possible pairs of activities:

                        hiking and canoeing,
                        hiking and swimming,
                        canoeing and swimming.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Let

                        x = hiking and canoeing only,
                        y = hiking and swimming only,
                        z = canoeing and swimming only.

                        The remaining 10 students in the overlaps
                        participated in all three.
                    `
                }
            ],

            takeaway: `
                We can divide everyone into four groups:

                x = hiking and canoeing only
                y = hiking and swimming only
                z = canoeing and swimming only
                10 = all three

                Since nobody did fewer than two activities,

                x + y + z + 10 = n.
            `
        },


        {
            id: "use-percentages",

            goal: "Translate the two known percentages.",

            prompt: `
                50% of the students participated in at least
                hiking and canoeing.

                60% participated in at least hiking and swimming.

                Write x and y in terms of n.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        "At least hiking and canoeing" includes:

                        x students who did exactly those two,
                        plus the 10 who did all three.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Therefore,

                        x + 10 = n/2

                        and

                        y + 10 = 3n/5.
                    `
                }
            ],

            takeaway: `
                Rearranging gives

                x = n/2 - 10

                and

                y = 3n/5 - 10.
            `
        },


        {
            id: "restrict-n",

            goal: "Use the fact that student counts are integers.",

            prompt: `
                The quantities n/2 and 3n/5 represent numbers
                of students, so they must be whole numbers.

                What does this tell you about n?
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        For n/2 to be an integer, n must be divisible by 2.

                        What is required for 3n/5?
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        n must be divisible by both 2 and 5.
                    `
                }
            ],

            takeaway: `
                n must be divisible by 10.

                So instead of considering every possible total,
                we only need to consider

                10, 20, 30, 40, ...
            `
        },


        {
            id: "find-z",

            goal: "Express the third group in terms of n.",

            prompt: `
                We know

                x + y + z + 10 = n.

                Substitute your expressions for x and y
                and simplify to find z in terms of n.
            `,

            interaction: {
                type: "short-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        Start with

                        z = n - 10 - x - y.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Substitute

                        x = n/2 - 10

                        and

                        y = 3n/5 - 10.
                    `
                }
            ],

            takeaway: `
                Simplifying gives

                z = 10 - n/10.
            `
        },


        {
            id: "possible-totals",

            goal: "Determine which totals are actually possible.",

            prompt: `
                Remember that x, y, and z count students,
                so none of them can be negative.

                n must also be a positive multiple of 10.

                What possible values of n remain?
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "focus",
                    prompt: `
                        n = 10 does not work because

                        x = n/2 - 10

                        would be negative.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Since

                        z = 10 - n/10,

                        z becomes negative once n > 100.

                        Check the multiples of 10 between these limits.
                    `
                }
            ],

            takeaway: `
                The possible totals are

                n = 20, 30, 40, 50, 60,
                    70, 80, 90, 100.
            `
        },


        {
            id: "find-k",

            goal: "Find which values of k are positive integers.",

            prompt: `
                The students who participated in at least
                canoeing and swimming are

                z + 10.

                Therefore,

                k = ((z + 10) / n) × 100.

                Test the possible values of n and keep only
                the cases where k is a positive integer.
            `,

            interaction: {
                type: "open-response"
            },

            scaffolds: [
                {
                    level: 1,
                    type: "concrete-example",
                    prompt: `
                        Try n = 20.

                        Then

                        z = 8,

                        so 18 of the 20 students participated
                        in at least canoeing and swimming.

                        This gives k = 90.
                    `
                },

                {
                    level: 2,
                    type: "strong-guidance",
                    prompt: `
                        Continue systematically for

                        n = 30, 40, ..., 100.

                        The integer values of k are

                        90, 40, 30, 15, and 10.
                    `
                }
            ],

            takeaway: `
                Only five cases give a positive integer k:

                k = 90, 40, 30, 15, 10.
            `
        },


        {
            id: "combine",

            goal: "Find the requested sum.",

            prompt: `
                The possible positive integer values are

                90, 40, 30, 15, and 10.

                What is their sum?
            `,

            interaction: {
                type: "number-input",
                answer: 185
            },

            scaffolds: [],

            takeaway: `
                90 + 40 + 30 + 15 + 10 = 185.
            `
        }

    ]
};