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

// ------------------header nav toggle
const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header-nav');
let hamburgerStatus = 'inactive';

hamburger.addEventListener('click', () => {
  if(hamburgerStatus === 'inactive') {
    hamburger.classList.add('active-ham');
    headerNav.classList.add('active-header-nav');
    hamburgerStatus = 'active';
  } else {
    hamburger.classList.remove('active-ham');
    headerNav.classList.remove('active-header-nav');
    hamburgerStatus = 'inactive';
  }
});

//--------------------------------about---------------------------
const aboutNavs = document.querySelectorAll('.about-nav');
const aboutContent = document.querySelector('.about-content');

// Define the content for each navigation item
const content = {
  'autobiography': autobiography,
  'hobbies': hobbies,
  'skills': skills
};

// default content
aboutContent.innerHTML = autobiography;

// Set up the event listeners using forEach()
aboutNavs.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the 'active' class from all navigation items
    aboutNavs.forEach(nav => nav.classList.remove('active'));

    // Add the 'active' class to the clicked navigation item
    item.classList.add('active');

    // Update the content based on the clicked navigation item
    aboutContent.innerHTML = content[item.id];
  });
});
