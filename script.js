// header nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    let target = a.getAttribute("href");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let targetTop = document.querySelector(target).getBoundingClientRect().top + scrollTop;
    window.scrollTo({
      top: targetTop,
      behavior: "smooth"
    });
  });
});

// ---------------------------------about------------------------------
const autobioNav = document.querySelector('#autobiography');
const hobbiesNav = document.querySelector('#hobbies');
const skillsNav = document.querySelector('#skills');

const autobiography = document.querySelector('.autobiography');
const hobbies = document.querySelector('.hobbies');
const skills = document.querySelector('.skills');

let activeSection = autobiography;

// toggle function
const toggleActive = (newActiveSection) => {
  activeSection.style.display = 'none';
  newActiveSection.style.display = 'grid';
  activeSection = newActiveSection;
};

// events
autobioNav.addEventListener('click', () => {
  autobioNav.classList.add('active');
  hobbiesNav.classList.remove('active');
  skillsNav.classList.remove('active');
  toggleActive(autobiography);
});

hobbiesNav.addEventListener('click', () => {
  autobioNav.classList.remove('active');
  hobbiesNav.classList.add('active');
  skillsNav.classList.remove('active');
  toggleActive(hobbies);
});

skillsNav.addEventListener('click', () => {
  autobioNav.classList.remove('active');
  hobbiesNav.classList.remove('active');
  skillsNav.classList.add('active');
  toggleActive(skills);
});
