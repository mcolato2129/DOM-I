
const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const nav = document.querySelectorAll('nav a');
const navLinks = Object.values(siteContent.nav);
nav.forEach((link, index) => {
  link.classList.add('italic');
  link.textContent = navLinks[index];
})

const logo = document.querySelector('#logo-img');
logo.setAttribute('src', 'http://localhost:9000/img/logo.png')

const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent['cta']['h1']
const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button']
const img1 = document.querySelector('#cta-img');

img1.setAttribute('src', siteContent['images']['cta-img']);
const img2 = document.querySelector('#middle-img')
img2.setAttribute('src', siteContent['images']['accent-img']);

const pTag = document.querySelectorAll('p');
const titles = document.querySelectorAll('h4');

titles[0].textContent = siteContent['main-content']['features-h4'];
pTag[0].textContent = siteContent['main-content']['features-content'];

titles[1].textContent = siteContent['main-content']['about-h4'];
pTag[1].textContent = siteContent['main-content']['about-content'];

titles[2].textContent = siteContent['main-content']['services-h4'];
pTag[2].textContent = siteContent['main-content']['services-content'];

titles[3].textContent = siteContent['main-content']['product-h4'];
pTag[3].textContent = siteContent['main-content']['product-content'];

titles[4].textContent = siteContent['main-content']['vision-h4'];
pTag[4].textContent = siteContent['main-content']['vision-content'];

titles[5].textContent = siteContent['contact']['contact-h4'];

const contact = document.querySelectorAll('.contact p');
contact[0].textContent = siteContent['contact']['address'];
contact[1].textContent = siteContent['contact']['phone'];
contact[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer a');
footer.classList.add('bold');
footer.textContent = siteContent['footer']['copyright'];