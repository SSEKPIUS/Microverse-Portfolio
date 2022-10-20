/* eslint-disable no-multi-assign */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const menus = document.querySelectorAll('.toggle');// Toggle menu on Humberger Button click
const menusArray = Array.from(menus);

const projects = [// projects
  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no
    accounts or sign-ups required. has been the industry's
    standard dummy text ever since the 1500s, when an unknown
    printer took a standard dummy text.`,
    image: 'img/ImgPlaceholder.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: '',
    description: '',
    image: 'img/ImgPlaceholder1.png',
    technologies: [],
    link_live: '#',
    link_source: '#',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: `A daily selection of privately
    personalized reads; no accounts or sign-ups required. has
    been the industry's standard`,
    image: 'img/ImgPlaceholder2.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: 'Website Protfolio',
    description: `A daily selection of privately
    personalized reads; no accounts or sign-ups required. has
    been the industry's standard`,
    image: 'img/ImgPlaceholder3.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: 'Profesional Art Printing Data More',
    description: `A daily selection of privately
    personalized reads; no accounts or sign-ups required. has
    been the industry's standard`,
    image: 'img/ImgPlaceholder4.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: `A daily selection of privately
    personalized reads; no accounts or sign-ups required. has
    been the industry's standard`,
    image: 'img/ImgPlaceholder2.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: 'Website Protfolio',
    description: `supporting-text">A daily selection of privately
    personalized reads; no accounts or sign-ups required. has
    been the industry's standard`,
    image: 'img/ImgPlaceholder3.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    link_live: '#',
    link_source: '#',
  },
];

function toggleMenu() {
  menusArray.forEach((element) => {
    element.classList.toggle('menu');
  });
  document.querySelector('.top-navigation .name span').classList.toggle('menu');
  document.querySelector('.top-navigation .name .fa-bars').classList.toggle('menu');
  document.querySelector('.top-navigation .name .fa-times').classList.toggle('menu');
  document.querySelector('.top-navigation').classList.toggle('fullHeight');
}

menusArray.forEach((element) => { // Hide menu on Click
  element.addEventListener('click', () => {
    toggleMenu();
  });
});

let modalContent = { // launch projects modal
  header: '',
  technologies: [],
  description: '',
  img: '',
};

document.querySelector('.modal-content i').addEventListener('click', (event) => {
  event.preventDefault();
  modalContent = {
    header: '',
    technologies: [],
    description: '',
    img: '',

  };
  document.querySelector('.modal').classList.toggle('hide');
});

function launchProject(id) {
  if (id >= 0) {
    modalContent.header = projects[id].name;
    modalContent.technologies = projects[id].technologies;
    modalContent.description = projects[id].description;
    modalContent.img = projects[id].image;

    document.querySelector('.modal').classList.toggle('hide');
    document.querySelector('.modal-content h2').innerText = modalContent.header;
    document.querySelector('.modal-content-body > div:first-child').style.setProperty('background-image', `url("${modalContent.img}")`);
    let ulContent = '';
    modalContent.technologies.forEach((item) => {
      ulContent += `<li><span>${item}</span></li>`;
    });
    const ul = document.querySelector('.modal-content ul');
    ul.innerHTML = ulContent;
    document.querySelector('.modal-content-body p').innerText = modalContent.description;
  }
}

const container = document.querySelector('#content');// load projects

const ulTiles = document.createElement('ul');
ulTiles.classList.add('grid-container');

projects.forEach((project, index, projectArray) => {
  if (index === 0) {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = 'Image placeholder';
    const cardLeft = document.createElement('div');
    cardLeft.classList.add('card-left');
    cardLeft.appendChild(img);

    const h3 = document.createElement('h3');
    h3.innerText = 'Multi-Post Stories';
    const p = document.createElement('p');
    p.innerText = `A daily selection of privately personalized reads; no
     accounts or sign-ups required. has been the industry's
     standard dummy text ever since the 1500s, when an unknown
     printer took a standard dummy text.`;
    const ul = document.createElement('ul');
    project.technologies.forEach((tec, index, arr) => {
      const li = document.createElement('li');
      li.innerText = tec;
      ul.appendChild(li);
    });
    const dv = document.createElement('div');
    dv.appendChild(ul);

    const input = document.createElement('input');
    input.type = 'submit';
    input.value = 'See Project';
    input.addEventListener('click', () => launchProject(0));

    const cardRight = document.createElement('div');
    cardRight.classList.add('card-right');
    cardRight.appendChild(h3);
    cardRight.appendChild(p);
    cardRight.appendChild(dv);
    cardRight.appendChild(input);

    const cardWorks = document.createElement('div');
    cardWorks.classList.add('card-works');
    cardWorks.appendChild(cardLeft);
    cardWorks.appendChild(cardRight);

    container.appendChild(cardWorks);
  } else if (index === 1) {
    const input = document.createElement('input');
    input.type = 'submit';
    input.value = 'See Project';
    input.addEventListener('click', () => launchProject(1));

    const dv = document.createElement('div');
    dv.classList.add('prj-01');
    dv.appendChild(input);
    dv.style.setProperty('background-image', `url("${project.image}")`);

    const li = document.createElement('li');
    li.appendChild(dv);

    ulTiles.appendChild(li);
  } else {
    const span1 = document.createElement('span');
    span1.classList.add('title-post');
    span1.innerText = project.name;

    const span2 = document.createElement('span');
    span2.classList.add('supporting-text');
    span2.innerText = project.description;

    const ul = document.createElement('ul');
    project.technologies.forEach((tec, index, arr) => {
      const li = document.createElement('li');
      li.innerText = tec;
      ul.appendChild(li);
    });
    const span3 = document.createElement('span');
    span3.classList.add('tags');
    span3.appendChild(ul);

    const dv = document.createElement('div');
    dv.classList.add('prj-01');
    dv.appendChild(span1);
    dv.appendChild(span2);
    dv.appendChild(span3);
    dv.style.setProperty('background-image', `url("${project.image}")`);

    const li = document.createElement('li');
    li.appendChild(dv);

    ulTiles.appendChild(li);
  }
});

const cardWorksTiles = document.createElement('div');
cardWorksTiles.classList.add('card-works');
cardWorksTiles.appendChild(ulTiles);
container.appendChild(cardWorksTiles);

// form validation
const form = document.querySelector('form');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');
const error = document.querySelector('.errors');
// eslint-disable-next-line prefer-const
let formData = {
  firstName: '',
  lastName: '',
  email: '',
  textarea: '',
};

form.addEventListener('submit', (event) => {
  // eslint-disable-next-line quotes, no-useless-escape
  const pattern = "[a-z0-9-]+@[a-z0-9-]+\.[a-z0-9-.]+";
  const mail = email.value;
  if (mail.match(pattern)[0] !== mail) {
    error.querySelector('span').textContent = 'Entered value needs to be an e-mail address in lower case';
    error.style.setProperty('display', 'block');
    event.preventDefault();
  } else {
    error.querySelector('span').textContent = '';
    error.style.setProperty('display', 'none');
  }
});
// Intiate local storage for form data
if (localStorage.getItem('form')) {
  const data = JSON.parse(localStorage.getItem('form'));
  formData.firstName = firstName.value = data.firstName;
  formData.lastName = lastName.value = data.lastName;
  formData.email = email.value = data.email;
  formData.textarea = textarea.value = data.textarea;
}
// Save form data to local storage
firstName.addEventListener('input', (event) => {
  formData.firstName = firstName.value;
  localStorage.setItem('form', JSON.stringify(formData));
});

lastName.addEventListener('input', (event) => {
  formData.lastName = lastName.value;
  localStorage.setItem('form', JSON.stringify(formData));
});

email.addEventListener('input', (event) => {
  formData.email = email.value;
  localStorage.setItem('form', JSON.stringify(formData));
});

textarea.addEventListener('input', (event) => {
  formData.textarea = textarea.value;
  localStorage.setItem('form', JSON.stringify(formData));
});