document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', '../includes/header.html').then(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(savedTheme);

        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.checked = savedTheme === 'light';
            themeToggle.addEventListener('change', toggleTheme);
        }

        window.addEventListener('scroll', () => {
            const header = document.querySelector('.apple-header');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });
    });

    loadHTML('footer', '../includes/footer.html');
});

/**
 * Función para aplicar el tema al cargar la página
 * @param {string} theme - "light" o "dark"
 */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const newTheme = this.checked ? 'light' : 'dark';
    applyTheme(newTheme);
}


// Función para cargar un archivo HTML
function loadHTML(elementId, filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
}

document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        effect: 'slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

//Cambio de idioma
document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('language-toggle');

    let currentLang = localStorage.getItem('lang') || 'es';
    updateLanguage(currentLang);

    languageToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        if (lang === 'es') {
            languageToggle.textContent = '🌍 Español';
            document.documentElement.lang = 'es';
            // Aquí puedes cambiar el texto de la página a español
        } else {
            languageToggle.textContent = '🌍 English';
            document.documentElement.lang = 'en';
            // Aquí puedes cambiar el texto de la página a inglés
        }
    }
});
