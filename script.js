import { autobiography, hobbies, skills } from "./about.js";

// header nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    let target = a.getAttribute("href");
    let scrollTop = document.documentElement.scrollTop;
    let targetTop = document.querySelector(target).getBoundingClientRect().top + scrollTop;
    window.scrollTo({
      top: targetTop,
      behavior: "smooth"
    });
  });
});

// ---------------------------------about---------------------------
const autobioNav = document.querySelector('#autobiography');
const hobbiesNav = document.querySelector('#hobbies');
const skillsNav = document.querySelector('#skills');
const aboutContent = document.querySelector('.about-content');

aboutContent.innerHTML = autobiography;

// events
autobioNav.addEventListener('click', () => {
  autobioNav.classList.add('active');
  hobbiesNav.classList.remove('active');
  skillsNav.classList.remove('active');
  aboutContent.innerHTML = autobiography;
});

hobbiesNav.addEventListener('click', () => {
  autobioNav.classList.remove('active');
  hobbiesNav.classList.add('active');
  skillsNav.classList.remove('active');
  aboutContent.innerHTML = hobbies;
});

skillsNav.addEventListener('click', () => {
  autobioNav.classList.remove('active');
  hobbiesNav.classList.remove('active');
  skillsNav.classList.add('active');
  aboutContent.innerHTML = skills;
});
