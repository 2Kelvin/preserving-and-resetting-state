# preserving-and-resetting-state

In this read, I learnt:

- from the JSX & React components you make, React creates a `UI tree` which `ReactDOM` uses to `update the browser DOM` and render it
- `state lives in react not in the actual components` i.e. `react holds / stores the state for the components that have state`. React just keeps track of where these components that have state are located in the UI tree and links / connects them with their correct state (variable).
- `removing a component that has state from the UI tree, resets its state to the default value & all the state updates it had lost / undone`. React keeps the (component's) state around as long as you render the same component at the same position
- when you render the same component at the same position, react `preserves` its state as long as you don't delete / remove the component
- `when react removes a component, it destroys its state`. Once you reinitialize the component, react `resets` its state
- `switching between different components at the same UI tree position will reset the state`. e.g. replacing a Counter component with a paragraph Message when a button/ input is clicked / checked. React will remove the Counter component from the UI tree and destroy its state & replace it with the new paragraph component. When you switch back to the Counter through the input click, a new Counter will be added to the UI tree with the default (reset) state
- `rendering a different component in the same position resets the state of the entire subtree` i.e. the component and its sub-components / children components
- to `preserve state between rerenders, the structure of your UI tree should match up from one render to another since React destroys state when components are removed from the UI tree`
- the reason a functional component should not be defined inside another functional component is because the state of the child (nested) component will always reset whenever the state of the parent changes causing it to rerender as a new parent component. Therefore, `always define functional components at the top level` i.e. `never nest functional component definitions`
- using `keys` in react tells react to use the key as part of the position of the component in the parent instead of using its order within the parent. `Keys only specify a component's position within its parent`
