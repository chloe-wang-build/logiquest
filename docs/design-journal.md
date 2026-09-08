# LogiQuest Design Journal

## Problem 001 — 2024 Gauss Grade 8, Question 23

### Why this problem was selected

This problem was chosen as the first LogiQuest prototype because:

- it requires relatively little prerequisite mathematics;
- the problem is understandable to students who have not studied advanced number theory;
- it initially appears to have a large search space;
- it supports experimentation with a simpler concrete case;
- it naturally moves from example to generalization;
- several different conditions must be converted into mathematical constraints;
- it distinguishes finding an upper bound from proving that a value is actually achievable.

The mathematical topic is greatest common divisors and divisibility.

The more important LogiQuest objective is to teach students how to convert conditions in an unfamiliar problem into useful constraints.

---

### Overall reasoning goal

The intended reasoning progression is:

Problem
→ simplify
→ experiment
→ observe
→ generalize
→ create a bound
→ identify another constraint
→ combine constraints
→ verify existence
→ reflect
→ generalize further

The goal is not simply to guide the student to the answer.

The prompts should help the student practise reasoning behaviours that can later be initiated independently on unfamiliar problems.

---

## Step 1 — Start with a simpler case

### Prompt

Suppose the greatest common divisor were 10.

What would have to be true about all five numbers?

### Mathematical purpose

The student should recognize that every number must be a multiple of 10.

### Learning-design purpose

The key mathematical representation in the full problem will eventually be:

d, 2d, 3d, 4d, 5d

However, giving this representation directly would reveal an important part of the reasoning.

Instead, the abstract variable d is temporarily replaced with the concrete value 10.

The intention is for the student to discover the "multiples of the GCD" structure using a familiar number before generalizing it.

### Stuck prompt

Think about what "greatest common divisor = 10" tells you about every individual number.

### Design principle

A LogiQuest prompt should preferably help the student generate the next mathematical idea rather than reveal the idea directly.

### Revision — Concrete example moved to optional scaffolding

The original version began by asking the student to suppose that the
GCD was 10 and then generalized from 10 to d.

This was revised.

The main reasoning path now begins directly with d:

"What does greatest common divisor = d tell you about each integer?"

The concrete case d = 10 is only introduced if the student selects
"I'm stuck."

Reason:

The original design may over-scaffold students who are already capable
of reasoning algebraically. Since the intended audience includes high
school students, and potentially Grade 7–8 students comfortable with
algebra, the main path should preserve the abstraction of the original
problem.

A concrete numerical example remains available as scaffolding for
students who need it.

Design principle:

Start at the level of reasoning we want students to develop.
Scaffold downward only when needed.

---

## Step 2 — Build an example

### Prompt

The five numbers must be different and positive.

What are the smallest five possible numbers if they are all multiples of 10?

### Mathematical purpose

The student should obtain:

10, 20, 30, 40, 50

### Learning-design purpose

This forces the student to actively use two conditions from the original problem:

- positive;
- different.

The student begins to see how individual words in a contest problem create mathematical constraints.

---

## Step 3 — Generalize

### Prompt

Now suppose the greatest common divisor is d.

What are the smallest five different positive multiples of d?

### Mathematical purpose

The student should generalize the concrete example to:

d, 2d, 3d, 4d, 5d

### Learning-design purpose

The student moves through:

concrete example
→ pattern
→ algebraic representation

rather than receiving the general representation immediately.

### Design Iteration — August 29, 2026

#### Start with d, scaffold down only if needed
The first version began with a concrete example, d = 10. This was changed so the main path starts directly with d, which is more algebraic and better suited to the intended audience.

If a student gets stuck, d = 10 is used as optional scaffolding before returning to the general case.

#### Interaction design
Avoid unnecessary typing. Use short input when producing the answer is mathematically meaningful, and use choices or fill-in formats when typing would only add friction.

#### Navigation
Added a Previous button so students can move back through the reasoning without restarting the problem. Answer memory can be added later if needed.

#### Problem ending
The core problem remains focused on solving through constraints.

The generalization from five integers to k integers will be kept as an optional **Explore Further** section rather than part of the required solution.

#### Math Toolkit idea
Useful formulas or results that appear naturally in problems can later be collected in a separate **Math Toolkit**.

For this problem, the extension connects to:

1 + 2 + ... + k = k(k + 1) / 2

The toolkit would be a reference for useful mathematical knowledge encountered through solving problems, separate from the main reasoning lessons.

## Problem 002 — Tiny Numbers

### Design Update — September 1, 2026

Problem 2 is the first test of a reusable LogiQuest problem architecture.

### Standardized Checkpoint System

Problems are divided into a flexible number of reasoning checkpoints rather than a fixed number of hints.

Each checkpoint contains:

- a reasoning goal
- a main prompt
- an interaction
- optional scaffolds
- a key takeaway

Students only see deeper scaffolds if they need them.

Typical progression:

Main prompt → Hint 1 → Hint 2 → stronger guidance

A student who solves the checkpoint independently skips the hints.

### Interaction Types

The engine currently supports:

- `open-response`
- `short-response`
- `guided-discovery`
- `number-input`

Open reasoning uses **Compare my thinking**, while exact answers use **Check my answer**.

### Problem 2 Structure

Tiny Numbers currently has seven checkpoints covering:

1. Understanding what makes a number Tiny
2. Recognizing the special role of zero
3. Creating exhaustive cases
4. Counting the first case
5. Counting numbers of the form x0z
6. Counting the no-zero case
7. Combining the totals

### Source Handling

The original problem wording is preserved.

Multiple-choice answers are omitted.

Full source information is stored in the problem data and displayed through a small `ⓘ Source` control so the contest grade is not shown prominently before solving.

### Technical Architecture

Problem 2 now uses:

```text
problem-002.html
        ↓
data/problem-002.js
        ↓
js/checkpoint-engine.js

### Update 9/2/2026
Problem 3 tester found the number of checkpoints somewhat long, but reported that each checkpoint helped scaffold the reasoning. Decision: retain current structure and gather more testing evidence before modifying checkpoint length or presentation.

## Student Testing — Checkpoint Interface

### Update September 3, 2026
Problem 4.
A student tested the guided problem system across the current problems.

### Observation

The tester found that:
- the reasoning breakdown was useful
- the hints and guidance were easy to follow
- each step helped scaffold the solution

However, labels such as **Thinking Process**, **Reasoning Checkpoint**, and **Goal** made the experience feel segmented and game-like. The tester found these labels distracting because knowing the internal step number or purpose did not help them solve the problem.

### Design Decision

Keep the checkpoint architecture internally, but simplify what the student sees.

The engine will continue to use checkpoints, goals, prompts, scaffolds, and takeaways, while the interface will hide unnecessary structural labels.

**Principle:** The reasoning structure should organize the experience without announcing itself to the student.

### Next Test

Remove the visible structural labels, keep the mathematical scaffolding unchanged, and test whether the problem-solving experience feels more continuous.

### Update September 3, 2026 — Problems 5–7

Problems 5–7 were built using the same reusable structure:

problem.html?id=XXX  
→ data/problem-XXX.js  
→ js/checkpoint-engine.js

Each problem now has its own data file, while the execution code stays shared.

The question display was also improved so problems can include:
- paragraphs
- bullet points
- tables
- source images

This was useful for questions with diagrams or several separate conditions.

Problem 4 is now the main template for new problems. Problems 2–3 will be reviewed later after the full nine-problem test set is finished. Problem 1 will stay as an earlier prototype.

Next: build Problems 8 and 9, then do a consistency review.

### Update September 3, 2026 — Problems 8–9

Problems 8 and 9 were added using the same reusable problem system.

Problem 8 tested geometry and factorization, while Problem 9 tested logic and constraint propagation. Problem 9 also used an original source diagram in the question display.

Both problems worked correctly in local testing.

The current system now supports different problem types without changing the shared checkpoint engine.

Next: send the site to more students for testing, collect feedback, then review the problems together for consistency.

### update 9/3/2026, night
Added button links in the home page to each questions. 
I plan to send to logiquest.ca to more student tester tomorrow

### Update September 7, 2026 — Interface Facelift

Several testers said the problem-solving process worked well, but the interface felt too plain.

The visual design was updated without changing the reasoning engine. The homepage now uses problem titles, reasoning tags, and small reference codes instead of a numbered sequence. Problem pages were also updated with clearer spacing, cards, buttons, and feedback areas.

Next: test the updated interface with a larger group of students before making further changes.