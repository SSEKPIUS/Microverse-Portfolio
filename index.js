/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// Toggle menu on Humberger Button click
const menus = document.querySelectorAll('.toggle');
const menusArray = Array.from(menus);
function toggleMenu() {
  menusArray.forEach((element) => {
    element.classList.toggle('menu');
  });
  document.querySelector('.top-navigation .name span').classList.toggle('menu');
  document.querySelector('.top-navigation .name .fa-bars').classList.toggle('menu');
  document.querySelector('.top-navigation .name .fa-times').classList.toggle('menu');
  document.querySelector('.top-navigation').classList.toggle('fullHeight');
}
// Hide menu on Click
menusArray.forEach((element) => {
  element.addEventListener('click', () => {
    toggleMenu();
  });
});
// launch projects modal
let modalContent = {
  header: '',
  technologies: [],
  description: '',

};

document.querySelector('.modal-content i').addEventListener('click', (event) => {
  event.preventDefault();
  modalContent = {
    header: '',
    technologies: [],
    description: '',

  };
  document.querySelector('.modal').classList.toggle('hide');
});

function launchProject(id) {
  if (id >= 0) {
    modalContent.header = projects[id].name;
    modalContent.technologies = projects[id].technologies;
    modalContent.description = projects[id].description;

    document.querySelector('.modal').classList.toggle('hide');
    document.querySelector('.modal-content h2').innerText = modalContent.header;
    let ul_content = '';
    modalContent.technologies.forEach((item) => {
      ul_content += `<li><span>${item}</span></li>`;
    });
    const ul = document.querySelector('.modal-content ul');
    ul.innerHTML = ul_content;
    document.querySelector('.modal-content-body p').innerText = modalContent.description;
  }
}

// projects
let projects = [
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
// load projects
const container = document.querySelector('#content');

const ul_tiles = document.createElement('ul');
ul_tiles.classList.add('grid-container');

projects.forEach((project, index, projectArray) => {
  if (index == 0) {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = 'Image placeholder';
    const card_left = document.createElement('div');
    card_left.classList.add('card-left');
    card_left.appendChild(img);

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

    const card_right = document.createElement('div');
    card_right.classList.add('card-right');
    card_right.appendChild(h3);
    card_right.appendChild(p);
    card_right.appendChild(dv);
    card_right.appendChild(input);

    const card_works = document.createElement('div');
    card_works.classList.add('card-works');
    card_works.appendChild(card_left);
    card_works.appendChild(card_right);

    container.appendChild(card_works);
  } else if (index == 1) {
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

    ul_tiles.appendChild(li);
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

    ul_tiles.appendChild(li);
  }
});

const card_works_tiles = document.createElement('div');
card_works_tiles.classList.add('card-works');
card_works_tiles.appendChild(ul_tiles);
container.appendChild(card_works_tiles);