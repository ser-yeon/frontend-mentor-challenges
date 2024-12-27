# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./inbox/Screen%20Shot%202024-12-27%20at%2014.13.31.png)
![](./inbox/Screen%20Shot%202024-12-27%20at%2014.13.52.png)

### Links

- Solution URL: [github](https://github.com/ser-yeon/frontend-mentor-challenges/tree/main/time-tracking-dashboard-main)
- Live Site URL: [live site](https://ser-yeon.github.io/frontend-mentor-challenges/time-tracking-dashboard-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow

### what I learned

- [Problem Summary](#problem solving)
  1.  [How to change SVG color](#q1)
  2.  [how to access inputs associated with labels using the Tab key when inputs are invisible](#q2)
  3.  [How to prevent the parent element's hover state when hovering over a child element.](#q3)

#### Problem Solving

##### Q1

How to change SVG color:

A:
In this situation, the `filter` property with `brightness(100%)` can make the color appear white.

##### Q2

how to access inputs associated with labels using the Tab key when inputs are invisible:

A:
Using`input { display: hidden; }` , not `input { display: none; }`

##### Q3

How to prevent the parent element's hover state when hovering over a child element:

A:
Using the `:not` and `:has` Pseudo-classes

```css
.card_data article:hover:not(:has(button:hover)) {

    cursor: pointer;

    background-color: var(--Dark-blue-hover);

}
```

### Continued development

I need to figure out how to write this code more concisely. I'm wondering if each `<article>` can use the same code block.

## Author

- Frontend Mentor - [@ser-yeon](https://www.frontendmentor.io/profile/ser-yeon)
