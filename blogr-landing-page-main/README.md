# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./inbox/Screen%20Shot%202025-02-14%20at%2013.52.09.png)
![](./inbox/Screen%20Shot%202025-02-14%20at%2013.52.32.png)

### Links

- Solution URL: [github](https://github.com/ser-yeon/frontend-mentor-challenges/tree/main/blogr-landing-page-main)
- Live Site URL: [github pages](https://ser-yeon.github.io/frontend-mentor-challenges/blogr-landing-page-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](https://sass-lang.com/)

### what I learned

- [Problem Summary](#problem solving)
  1.  [Which HTML element is most appropriate for a dropdown menu?](#q1)
  2.  [How do i create a diagonal gradient from the top-left to the bottom-right corner?](#q2)
  3.  [Why do we need to use `=== "true" ` when checking the `aria-expanded` arrtibute?](#q3)
  4.  [How can child elements remain visible when they exceed the boundaries of a parent container with `overflow: hidden`?](#q4)
  5.  [How can i rotate a background-image of 180° around its center using JavaScript?](#q5)

#### Problem Solving

##### Q1. Which HTML element is most appropriate for a dropdown menu?

A:
Using `<button> + <ul>`

```html
<button id="dropdown-btn" aria-expanded="false">Menu</button>
<ul id="dropdown-menu" hidden>
  <li><a href="#">Option 1</a></li>
  <li><a href="#">Option 2</a></li>
  <li><a href="#">Option 3</a></li>
</ul>
```

##### Q2. How do i create a diagonal gradient from the top-left to the bottom-right corner?

A:
I tried two methods. The first one didn't work for unknown reasons, while the second one did. However, I later realized that this challenge requires using a radial-gradient (the third method) instead of a linear-gradient.

method1

```scss
background-image: linear-gradient(45deg, $Very-light-red, $Light-red);
```

method2

```scss
background-image: linear-gradient(to bottom right, $Very-light-red, $Light-red);
```

method3

```scss
background-image: radial-gradient(
  circle at left top,
  /* 从左上角开始 */ $Very-light-red,
  $Light-red
);
```

##### Q3. Why do we need to use `=== "true"` when checking the `aria-expanded` attribute?

A:
When using `getAttribute("aria-expanded")`, it returns a string. Using `=== "true"` ensures it's correctly interpreted as a boolean value.

```js
const expanded = hamburgerButton.getAttribute("aria-expanded") === "true";
```

##### Q4. How can child elements remain visible when they exceed the boundaries of a parent container with `overflow: hidden`?

A:
The simplest solution is to remove the child element from the parent container.

##### Q5. How can i rotate a background-image of 180° around its center using JavaScript?

A:
I can use the `::after` pseudo-element to rotate the `background-image` without rotating the element itself.

```css
    .dropdown-btn::after {
        vertical-align: text-bottom;
        content: "";
        display: inline-block;
        width: 1rem;
        height: 24px;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url("../../images/icon-arrow-dark.svg");
    }

    .dropdown-btn.rotated::after {
        transform: rotate(180deg);
    }
```

```js
btn.classList.toggle("rotated");
```

### Continued development

Developing mobile styles first helps prevent CSS complexity and code redundancy. Unless absolutly necessary, always address the mobile version before proceeding with desktop CSS.

## Author

- Frontend Mentor - [@ser-yeon](https://www.frontendmentor.io/profile/ser-yeon)
