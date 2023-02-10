// ---------------------------------about------------------------------

const autobioNav = document.querySelector('#autobiography');
const hobbiesNav = document.querySelector('#hobbies');
const skillsNav = document.querySelector('#skills');

const autobiography = document.querySelector('.autobiography');
const hobbies = document.querySelector('.hobbies');
const skills = document.querySelector('.skills');

// events

autobioNav.addEventListener('click', () => {
  autobioNav.classList = 'about-nav active';
  hobbiesNav.classList = 'about-nav';
  skillsNav.classList = 'about-nav'

  autobiography.style.display = 'block';
  hobbies.style.display = 'none';
  skills.style.display = 'none';
});

hobbiesNav.addEventListener('click', ()=> {
  autobioNav.classList = 'about-nav';
  hobbiesNav.classList = 'about-nav  active';
  skillsNav.classList = 'about-nav';

  autobiography.style.display = 'none';
  hobbies.style.display = 'block';
  skills.style.display = 'none';
});

skillsNav.addEventListener('click', ()=> {
  autobioNav.classList = 'about-nav';
  hobbiesNav.classList = 'about-nav';
  skillsNav.classList = 'about-nav active';

  autobiography.style.display = 'none';
  hobbies.style.display = 'none';
  skills.style.display = 'block';
});

