# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

![](./inbox/Screen%20Shot%202025-01-27%20at%2014.09.57.png)
![](./inbox/Screen%20Shot%202025-01-28%20at%2008.21.35.png)

### Links

- Solution URL: [github](https://github.com/ser-yeon/frontend-mentor-challenges/tree/main/sunnyside-agency-landing-page-main)
- Live Site URL: [github pages](https://ser-yeon.github.io/frontend-mentor-challenges/sunnyside-agency-landing-page-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow

### what I learned

- [Problem Summary](#problem solving)
  1.  [improving accessibility for social media link icons](#q1)
  2.  [implementing underline](#q2)
  3.  [creating a triangle in CSS](#q3)
  4.  [how to make an element take up an entire row in a flex container](#q4)

#### Problem Solving

##### Q1

Improving accessibility for social media link icons:

A:

```html
<li>
  <a href="#" aria-label="Visit our Facebook profile">
    <img src="./images/icon-facebook.svg" alt="Facebook" />
  </a>
</li>
```

##### Q2

Implementing underline:

A:

```css
.btn {

    position: relative;

}

.btn:hover {

    cursor: pointer;

}



.btn::after {

    content: "";

    position: absolute;

    top: 0.6rem;

    left: 0;

    right: 0;

    height: 0.6rem;

    z-index: -1;

    border-radius: 0.3rem;

    opacity: 0.3;

}



.btn--yellow::after {

    background-color: var(--Yellow);

}
```

##### Q3

Creating a triangle in CSS:

A:

```css
.nav--mobile::before {

    content: "";

    position: absolute;

    top: -1.5rem;

    right: 0;

    border-width: 1.5rem 1.5rem 0 0;

    border-style: solid;

    border-color: transparent var(--White);

}
```

##### Q4

How to make an element take up an entire row in a flex container:

A:

```css
    h4 {

        width: 100%;

    }



    .section--3blocks {

        flex-direction: row;

        flex-wrap: wrap;

    }



    .div__client {

        flex: 1;

    }
```

### Continued development

There are some parts where I'm not sure if I used the right approach or if I made things too complicated. I think I should look at how others solve similar problems in the future.

## Author

- Frontend Mentor - [@ser-yeon](https://www.frontendmentor.io/profile/ser-yeon)
