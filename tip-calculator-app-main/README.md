# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./inbox/Screen%20Shot%202025-01-18%20at%2014.00.33.png)

![](./inbox/Screen%20Shot%202025-01-18%20at%2014.00.53.png)

### Links

- Solution URL: [github](https://github.com/ser-yeon/frontend-mentor-challenges/tree/main/tip-calculator-app-main)
- Live Site URL: [live site](https://ser-yeon.github.io/frontend-mentor-challenges/tip-calculator-app-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass

### what I learned

- [Problem Summary](#problem solving)
  1.  [In some browsers, `<input>` may have a default `min-width` value.](#q1)
  2.  [How to restrict input to integers only?](#q2)
  3.  [How to remove the default styling of a fieldset?](#q3)

#### Problem Solving

##### Q2

How to restrict input to integers only:

A:
Using`replace(/[^0-9]/g, '')`

##### Q3

How to remove the default styling of a fieldset:

A:

```css
fieldset {

  border: none;

  margin: 0;

  padding: 0;

}



legend {

  margin: 0;

  padding: 0;

}
```

### Continued development

After two weeks without practice, I noticed my speed has slowed down significantly. It seems I need to write some code every day.

## Author

- Frontend Mentor - [@ser-yeon](https://www.frontendmentor.io/profile/ser-yeon)
