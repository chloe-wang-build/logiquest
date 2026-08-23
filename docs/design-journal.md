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