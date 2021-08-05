# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

```html
<button id='one' onClick={numberClick}>1</button>
<button id='two' onClick={numberClick}>2</button>
...
```
```css
display: grid;
gap: 25px;
justify-items: center;
align-items: center;
grid-template-areas: 
"seven eight nine del"
"four five six add"
"one two three subtract"
"dot zero divide multiply"
"reset reset equals equals";
```
```js
const useCalcMemo = (state) => {
  const [value, setValue] = useState(state)
  const [prevValue, setPrevValue] = useState('')

  return {
    value,
    setValue,
    prevValue,
    setPrevValue
  }
}
const Keys = ({calcMemo: {value, setValue, prevValue, setPrevValue}}) => {...}
```

### Useful resources

- https://www.youtube.com/watch?v=j59qQ7YWLxw

## Author

- Website - [LenyPython](404)
- Frontend Mentor - [@LenyPython](https://www.frontendmentor.io/profile/LenyPython)
