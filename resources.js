const productos = [
  { id:1, nombre:'Personalizadas', src:'img/personalizadas.jpg' },
  { id:2, nombre:'Retro', src:'img/retro.webp' },
  { id:3, nombre:'Aniversario', src:'img/aniversario.webp' },
  { id:4, nombre:'Vintage', src:'img/vintage.webp' }
];

const novedades = document.getElementById('novedades');

novedades.innerHTML = productos.map(p => `
  <article class="card">
    <img src="${p.src}" alt="${p.nombre}">
    <div class="card-body">${p.nombre}</div>
  </article>
`).join('');

let index = 0;
const slides = document.getElementById('slides');

setInterval(() => {
  index = (index + 1) % 3;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

const authModal = document.getElementById('authModal');
const openAuth = document.getElementById('openLogin');
const closeAuth = document.getElementById('closeAuth');
const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.auth-form');

openAuth.addEventListener('click', () => {
  authModal.classList.add('active');
});

closeAuth.addEventListener('click', () => {
  authModal.classList.remove('active');
});

authModal.addEventListener('click', (e) => {
  if (e.target === authModal) {
    authModal.classList.remove('active');
  }
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab + "Form").classList.add('active');
  });
});
