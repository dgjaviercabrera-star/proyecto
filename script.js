document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Compensa la altura del header fijo
            behavior: 'smooth'
        });
    });
});

// ==== Carrusel ====
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

// Obtenemos el ancho real del contenedor del carrusel para asegurar un centrado perfecto.
const slideWidth = slides.parentElement.clientWidth;

function showSlide(i) {
  index = (i + images.length) % images.length;
  // Usamos el ancho dinámico para calcular el desplazamiento.
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Carrusel automático cada 3 segundos
setInterval(() => showSlide(index + 1), 5000);

// ==== Scroll suave en la navegación ====
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60, // Compensa header fijo
    behavior: 'smooth'
    });
    });
});

// Efecto de scroll en el header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Destacar enlace activo según la sección visible
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// Animación de aparición para elementos del navbar
window.addEventListener('load', () => {
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Inicializar estilos para la animación de carga
document.querySelectorAll('.nav-link').forEach(link => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(-20px)';
    link.style.transition = 'all 0.3s ease';
});



