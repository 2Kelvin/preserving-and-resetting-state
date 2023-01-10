# preserving-and-resetting-state

In this read, I learnt:

- from the JSX & React components you make, React creates a `UI tree` which `ReactDOM` uses to `update the browser DOM` and render it
- `state lives in react not in the actual components` i.e. `react holds / stores the state for the components that have state`. React just keeps track of where these components that have state are located in the UI tree and links / connects them with their correct state (variable).
- `removing a component that has state from the UI tree, resets its state to the default value & all the state updates it had lost / undone`. React keeps the (component's) state around as long as you render the same component at the same position
-
