# Frontend Mentor - Intro section with dropdown navigation solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./inbox/Screen%20Shot%202024-12-20%20at%2020.47.31.png)
![](./inbox/Screen%20Shot%202024-12-20%20at%2020.47.37.png)
![](./inbox/Screen%20Shot%202024-12-20%20at%2020.47.46.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass

### What I learned

- [Problem](#problem-solving)
  1. [Controlling the size ratio of client's logo images](#Q1)
  2. [z-index not working as expected](#Q2)
  3. [Element positioning and the document flow](#Q3)
  4. [How CSS `transform` affects z-index behavior](#Q4)
  5. [Making the last element wrap in flexbox](#Q5)
  6. [Fixing dropdown menu overlapping issues](#Q6)
  7. [hover pseudo-class inheritance issues](#Q7)
  8. [How to create a desktop navigation bar without grouping](#Q8)
  9. [Handling window resize events with checkbox states](#Q9)

#### Problem Solving

##### Q1

When arranging the layout for client logos, I wasn’t sure how to control their sizes while maintaining their aspect ratios.

Solution:
My inspiration came from [gitub:jesuisbienbien](https://github.com/jesuisbienbien/intro-section-with-dropdown-navigation-main/blob/master/styles.css). She defined different widths for each image individually.
For example:

```css
.logo1 {
  width: 20%;
}
.logo2 {
  wodth: 15%;
}
.logo3 {
  width: 18%;
}
```

I realized I could allocate grid sizes for each image based on their original widths. Below is my solution:

```css
display: gird;
grid-template-columns: 114fr 73fr 90fr 83fr;
```

##### Q2

`z-index` not working as expected

Solution:
Ensure the position property is not set to static. z-index only works when `position` is set to `relative, absolute, fixed, or sticky`.

##### Q3

Element positions follow the document flow only with `position: static`:

Solution:
Understand the document flow and stacking contexts. Only elements with position: static occupy positions in the document flow. Other position values remove elements from the flow, and their positions are controlled by the top, right, bottom, and left properties.

##### Q4

How CSS `transform` affects z-index behavior:

Solution:
When an element has a transform property (other than transform: none), it creates a new stacking context, even if its z-index value is auto.

##### Q5

Making the last element wrap in flexbox:

Solution:
Use the flex-basis property to set the element's width, making it occupy the entire row:

```css
.container {
  flex-wrap: wrap;
}
.flex-item {
  flex-basis: 100%;
}
```

##### Q6

Overlapping issue with dropdown menus for features and company:

Solution:
Use JavaScript's offsetHeight property to calculate the height of the dropdown menu and adjust the position of the original text:

```js
checkbox.addEventListener("click", () => {
  if (window.innerWidth < 1024) {
    const targetElement = checkbox.parentElement.nextElementSibling;
    const parentElement = checkbox.parentElement;
    if (targetElement) {
      if (checkbox.checked) {
        const featuresHeight = parentElement.querySelector("ul");

        let height1 = featuresHeight.offsetHeight + "px";
        targetElement.style.marginTop = height1;
      } else {
        targetElement.style.marginTop = "0px";
      }
    }
  }
});
```

##### Q7

hover pseudo-class inheritance issues(Child elements inheriting the hover pseudo-class):

Solution:
Add a specific class to the elements you want to apply hover effects to, such as hover-item:

```html
<li class="dropdown features">
  <input type="checkbox" id="features-dropdown" class="sub-checkbox" />
  <label for="features-dropdown" class="hover-item">Features</label>
  <ul class="features-lists">
    <li class="hover-item">Todo List</li>
    <li class="hover-item">Calendar</li>
    <li class="hover-item">Reminders</li>
    <li class="hover-item">Planning</li>
  </ul>
</li>
<li class="dropdown company">
  <input type="checkbox" id="company-dropdown" class="sub-checkbox" />
  <label for="company-dropdown" class="hover-item">Company</label>
  <ul class="company-lists">
    <li class="hover-item">History</li>
    <li class="hover-item">Our Team</li>
    <li class="hover-item">Blog</li>
  </ul>
</li>
<li class="hover-item">Careers</li>
```

```css
.hover-item:hover {
    cursor: pointer;
    color: Black;
}
```

##### Q8

How to create a desktop navigation bar without grouping?

Solution:
Use a `<div>` to fill the remaining space:

```css
ul {
  display: grid;
  grid-template-columns: repeat(4, auto) 1fr repeat(2, auto);
  gap: 2.5em;
}
```

##### Q9

Handling window resize events and checkbox state changes:

Solution:
Reset the checkbox state when the window size changes to avoid layout issues:

```js
window.addEventListener("resize", () => {
  subCheckboxs.forEach((checkbox) => {
    checkbox.checked = false; //把mobile状态下的margin消除
    const targetElement = checkbox.parentElement.nextElementSibling;
    targetElement.style.marginTop = "0px";
  });
  const hamburger = document.querySelector("#hamburger");
  hamburger.checked = false;
});
```

### Continued development

This is my first time using Sass, and I need to use it more in future projects to become familiar with it. There is still a lot of knowledge about Grid and Flex that I need to learn.
This is also my first time writing a README, and doing it in English feels quite challenging. However, the difficulty indicates that it’s worth doing.

### Useful resources

- [# Guidelines for writing CSS code examples](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS) - This helped me understand some methods for managing CSS.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

- [gitub:jesuisbienbien](https://github.com/jesuisbienbien/intro-section-with-dropdown-navigation-main/blob/master/styles.css) - Her solution gave me some ideas for solving the problem.
- [Vanza Setia:The benefits of writing a good challenge README](https://www.frontendmentor.io/articles/the-benefits-of-writing-a-good-challenge-readme-3EIwMaYVgz) - Thanks to this article, I made up my mind to start writing README documentation.
