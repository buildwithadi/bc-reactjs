// updater function = A function passed as an argument to setState() usually. ex setyear(updater function)
// updater function: ex.: y => y + 1
// All ow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Good practice to use updater functions

import MyComponent from "./MyComponent"

function App() {
  return (
    <MyComponent />
  )
}

export default App
