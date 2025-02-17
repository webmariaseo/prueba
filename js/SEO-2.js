document.addEventListener("DOMContentLoaded", () => {
    // --- Navegación móvil ---
    const navMobile = document.getElementById("nav-mobile");
    const navMenu = document.querySelector(".nav-menu");

    navMobile.addEventListener("click", () => {
        navMobile.classList.toggle("open");
        navMenu.classList.toggle("open-menu");
    });

    // --- Animaciones con GSAP para el Hero Section ---
    // Título del hero
    gsap.fromTo(
        "#hero-title",
        { y: -50, opacity: 0 }, // Estado inicial
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            onComplete: () => {
                document.querySelector("#hero-title").style.opacity = "1";
            },
        }
    );

    // Subtítulo
    gsap.fromTo(
        ".subtitle",
        { y: 50, opacity: 0 }, // Estado inicial
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: 0.5,
            ease: "power3.out",
        }
    );

    // Botón de llamada a la acción
    gsap.fromTo(
        ".cta-button",
        { scale: 0.9, opacity: 0 }, // Estado inicial
        {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: "power3.out",
        }
    );

    // --- IntersectionObserver para tarjetas de servicio ---
    const serviceCards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute("data-visible", "true");
                }
            });
        },
        { threshold: 0.1 } // Detectar cuando el 10% de la tarjeta es visible
    );

    serviceCards.forEach((card) => observer.observe(card));

    // --- Animaciones de hover en tarjetas de servicio ---
    document.querySelectorAll(".tarjeta-servicio").forEach((tarjeta) => {
        tarjeta.addEventListener("mouseenter", () => {
            gsap.to(tarjeta.querySelector("h3"), { y: -10, duration: 0.3 });
            gsap.to(tarjeta.querySelector("p"), { y: -10, duration: 0.3 });
        });

        tarjeta.addEventListener("mouseleave", () => {
            gsap.to(tarjeta.querySelector("h3"), { y: 0, duration: 0.3 });
            gsap.to(tarjeta.querySelector("p"), { y: 0, duration: 0.3 });
        });
    });

    // --- Cambios en el header y logo al hacer scroll ---
    const header = document.getElementById("main-header");
    const logoImg = document.getElementById("logo-img");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#FFD7C4"; // Cambia el fondo a salmón
            if (logoImg) {
                logoImg.src = "imagenes/Logo/Logo-scroll.png"; // Cambia al logo alternativo
            }
        } else {
            header.style.backgroundColor = "transparent"; // Fondo transparente
            if (logoImg) {
                logoImg.src = "imagenes/Logo/Logo-SEO-specialist.png"; // Restaurar el logo original
            }
        }
    });
});



/********************Peguntas********************/
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Cerrar todas las demás preguntas
            document.querySelectorAll('.accordion-header').forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', false);
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });

            // Cambiar el estado de aria-expanded solo para el elemento actual
            header.setAttribute('aria-expanded', !isExpanded);

            // Desplegar o cerrar el contenido actual
            body.classList.toggle('active');
        });
    });
});

// Lógica para alternar el contenido desplegable con íconos de FontAwesome
document.querySelectorAll('.toggle-item').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        const icon = item.querySelector('.toggle-button i');

        // Cierra todos los desplegables antes de abrir el actual
        document.querySelectorAll('.toggle-content').forEach(el => {
            if (el !== content) {
                el.classList.remove('active');
                el.previousElementSibling.querySelector('.toggle-button i').classList.remove('fa-angle-up');
                el.previousElementSibling.querySelector('.toggle-button i').classList.add('fa-angle-down');
            }
        });

        // Alternar estado del actual (abrir o cerrar)
        const isActive = content.classList.contains('active');
        content.classList.toggle('active', !isActive);
        icon.classList.toggle('hr', isActive);
        icon.classList.toggle('fa-angle-up', !isActive);
    });
});


/*******************Scroll Top**************************/
window.addEventListener("scroll", function () {
    document.querySelector(".scroll-top").style.display = window.scrollY > 500 ? "block" : "none";
});

document.querySelector(".scroll-top").addEventListener("click", function () {
    smoothScrollToTop();
});

function smoothScrollToTop() {
    let currentScroll = window.scrollY; // Obtener la posición actual en cada frame

    if (currentScroll > 0) {
        window.scrollTo(0, Math.max(currentScroll - 40, 0)); // Ajusta el 10 para cambiar la velocidad
        window.requestAnimationFrame(smoothScrollToTop); // Llamada recursiva solo después de desplazar
    }
}

