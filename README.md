# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/add-solution-url-here)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS (Flexbox)
- Mobile-first responsive design
- JavaScript (form validation + UI state toggle)

### What I learned

In this project I practiced building a responsive layout using `picture` for different illustration sizes, and handling form validation states (error UI + success message).

Example: simple email validation + switching views.

```js
const form = document.getElementById("signup-form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg"); 

form.addEventListener("submit", (e)=>{
  e.preventDefault();
   const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        errorMsg.textContent = "Valid email required";
        email.classList.add("error");
    }
    else {
        errorMsg.textContent = "";
        email.classList.remove("error");
    }
});
```

### Continued development

- Improve accessibility (ARIA for error message, focus management when switching to success view)
- Add smoother transitions between sign-up and success states
- Refine form validation (edge cases + better UX feedback)

### Useful resources

- [MDN - Constraint validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Helped me understand form validation patterns.
- [MDN - Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - Useful for `picture` and `srcset`.

### AI Collaboration

I used AI tools during development to speed up debugging and improve responsiveness.

- Tools used: ChatGPT / GitHub Copilot
- How I used them:
  - Fixing CSS responsiveness issues across mobile/tablet/desktop
  - Adjusting layout behavior to match the design (image on top for smaller screens)
  - Reviewing duplicated CSS rules and simplifying media queries
- What worked well:
  - Fast suggestions for breakpoints and layout fixes
- What didn’t:
  - Some suggestions needed manual tweaking to match the exact Frontend Mentor layout

## Author

- Frontend Mentor - [@ruqiash12-oss](https://www.frontendmentor.io/profile/ruqiash12-oss)
- GitHub - [@ruqiash12-oss](https://github.com/ruqiash12-oss)

## Acknowledgments

Thanks to Frontend Mentor for the challenge and the community for feedback and inspiration.