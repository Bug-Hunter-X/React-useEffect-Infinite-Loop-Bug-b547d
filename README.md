# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug arises from an incorrect dependency array, leading to an infinite loop.

## Bug Description

The `MyComponent` component uses `useState` to track a count.  The `useEffect` hook attempts to increment the count until it reaches 5. However, because `count` is not correctly included in the dependency array, the effect runs continuously, leading to the infinite loop.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the continuously incrementing count in the browser console.

## Solution

The solution involves correctly specifying the `count` variable in the dependency array. By doing so, the effect will only run when the value of `count` changes.

## Lessons Learned

- Always carefully review your useEffect dependencies to avoid unintended side effects.
- Pay attention to how your state updates influence the behavior of your effects.