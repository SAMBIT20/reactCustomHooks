<div align="center">
    <h1>reactCustomHooks ⚛️ 📦</h1>
    <p>An npm package including a slew of different hooks for your upcoming React ⚛️ project</p>
    <img src="https://user-images.githubusercontent.com/50833547/198498326-c1d532e4-07fa-4bd6-843e-e73a5fa14970.png"title="hover text">
    <p>
    https://www.npmjs.com/package/use-react-custom-hooks
    </p>
</div>



# 📗 Documentation

## Installing 🛠

```bash
# With npm
$ npm i use-react-custom-hooks

# With Yarn
$ yarn add use-react-custom-hooks
```

# Examples

## 🪟 useWindowResize
A really common need is to get the current size of the browser window. This hook returns an object containing the window's width and height.
### Usage

```jsx

import { useWindowResize } from "./hookindex";

function App() {

  const screenSize = useWindowResize();

  return (
    <div className="App">
      <h1>{screenSize.width <= 600 ? "mobile" : "Laptop"}</h1>
    </div>
  );
}

export default App;
```

## 🏀 useDebounce

Convert a normal function to a debounced function.

> Note: More about Debouncing : [here](https://www.geeksforgeeks.org/debouncing-in-javascript/)

### Usage

```jsx
import React from "react";
import { useDebounce } from "use-custom-hooks";

const LocalValue = () => {
  const fetchData = () => {
    //Fetch Data function
  };

  const debouncedFetchData = useDebounce(fetchData, 300);
  /*
   No matter how many times we call this function in 300ms, it will only
   execute once.
  */

  return <div>Lorem Ipsum</div>;
};
```
