# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef).

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

## Overview

I Wanted to improve my layout skills with CSS and practise my JavaScript essential things like showing menu and minipulate HTML.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screen Shot](images\screenshot.png)

### Links

- Solution URL: [https://github.com/yousefomar724/sunnyside-agency-landing-page](https://github.com/yousefomar724/sunnyside-agency-landing-page)
- Live Site URL: [https://sunny-side-landing-page.netlify.app/](https://sunny-side-landing-page.netlify.app/)

## My process

 -Start with planning the project and the layouts
 -Then structure the HTML file and adding all extrnal files that I need
 -Construct CSS main variables and base properties

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Using semantic HTML tags with appropriate class names

```html
<section class="hero">
      <div class="hero__content">
        <h2 class="hero__title">We are creatives</h2>
```

Implementing best practices and modern Css layouts

```css
.creative__container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}
```

Accessing HTML with Javascript and minipulate it to control the menu

```js
// Toggle Menu
const menuToggle = document.querySelector('.menu__toggle');
menuToggle.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu');
});
```

### Continued development

Areas that I want to continue focusing on in future projects:

- Improve the layouts with the modern CSS
- Add some feature with Javascript like scrollup button or night mode
- Bring some movement in tha landing page by animations

### Useful resources

- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me understand the grid system very well. I really liked this article and will read it again.
- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is an amazing article which helped me finally understand flexbox. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Yousef Omar](https://portofolio-yousef-omar.netlify.app/)
- Frontend Mentor - [@yousefomar724](https://www.frontendmentor.io/profile/yousefomar724)
- Linkedin - [@yousef omar](https://www.linkedin.com/in/yousef-omar-556354123/)
