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

/**
 * Función para cambiar entre temas
 */
function toggleTheme() {
    const newTheme = this.checked ? 'light' : 'dark';
    applyTheme(newTheme);
}

/**
 * Función para cargar un archivo HTML
 * @param {string} elementId
 * @param {string} filePath
 */
function loadHTML(elementId, filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
}

/*Carrusel*/
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

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".filter-btn");
    const productos = document.querySelectorAll(".producto");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const categoria = boton.getAttribute("data-category");

            productos.forEach(producto => {
                if (categoria === "todos" || producto.getAttribute("data-category") === categoria) {
                    producto.style.display = "block";
                } else {
                    producto.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function(event) {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            event.preventDefault();
            alert("Por favor, ingrese un correo electrónico válido.");
            emailInput.focus();
        }
    });
});

//Script para la validacion de los campos del formulario
document.addEventListener('DOMContentLoaded', function() {
    const details = document.querySelectorAll('.faq details');

    details.forEach(detail => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                details.forEach(otherDetail => {
                    if (otherDetail !== this) {
                        otherDetail.open = false;
                    }
                });
            }
        });
    });
});

//Script para el faq
document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function() {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.display === "block";
            
            document.querySelectorAll(".faq-answer").forEach((answer) => {
                answer.style.display = "none";
            });

            if (!isOpen) {
                answer.style.display = "block";
            }
        });
    });
});

const translations = {
    es: {
        "bienvenidos": "Bienvenidos",
        "productos_destacados": "Productos y Servicios Destacados",
        "macbook_pro": "MacBook Pro",
        "descripcion_macbook": "Creado para la inteligencia de Apple. Personal, privado, poderoso.",
        "ipad_pro": "iPad Pro",
        "descripcion_ipad": "Ultra Retina XDR. La pantalla más avanzada del mundo. Brillo extremo y contraste preciso.",
        "mantenimiento": "Mantenimiento de Equipos",
        "descripcion_mantenimiento": "Servicio técnico especializado para mantener tus dispositivos en óptimas condiciones.",
        "desarrollo_web": "Desarrollo Web",
        "descripcion_desarrollo": "Expertos en desarrollo web listos para ayudarte a crear la página de tus sueños.",
        "novedades": "Novedades Tecnológicas",
        "nueva_macbook": "Nueva MacBook Air.",
        "nuevo_iphone": "El nuevo iPhone 16 Pro.",
        "nuevo_ipad": "Nueva iPad Air.",
        "mas_informacion": "Más información",
        "compartir_facebook": "📤 Compartir en Facebook",
        "bienvenida" : "Bienvenido",
        "inicio" : "Inicio",
        "productos" : "Productos",
        "nosotros" : "Nosotros",
        "servicios" : "Servicios",
        "contacto" : "Contacto",
        "clientes" : "Clientes",
        "empleo" : "Empleo",
        "blog" : "Blog",
        "faq" : "FAQ",
        "terminos" : "Términos y Condiciones",
        "titulo-historia" : "Historia de TechWorld",
        "historia1" : "TechWorld nació con la visión de proporcionar los mejores componentes y servicios tecnológicos del mercado. Desde nuestros inicios, hemos trabajado arduamente para ofrecer soluciones innovadoras y de alta calidad a nuestros clientes. Con más de una década de experiencia en el sector, hemos logrado consolidarnos como un referente en la industria, ofreciendo productos de última generación y un servicio excepcional.",
        "historia2" : "A lo largo de los años, hemos expandido nuestras operaciones, abriendo nuevas sucursales y ampliando nuestra gama de productos para satisfacer las necesidades cambiantes del mercado. Nuestro compromiso con la innovación y la excelencia nos ha permitido establecer relaciones duraderas con clientes y proveedores, asegurando siempre el mejor servicio." ,
        "mision" : "Misión",
        "mision1" : "Proveer productos y servicios tecnológicos de la más alta calidad, asegurando la satisfacción de nuestros clientes a través de soluciones innovadoras y un servicio excepcional. Nos esforzamos por ser un aliado confiable en el crecimiento tecnológico de nuestros clientes, brindando herramientas y conocimientos que les permitan alcanzar sus objetivos.",
        "vision" : "Visión",
        "vision1" : "Ser líderes en el sector tecnológico, impulsando la innovación y el desarrollo en el mercado. Queremos ser reconocidos por nuestra capacidad de adaptación a las nuevas tendencias y por nuestro compromiso con la calidad y el servicio al cliente. Aspiramos a seguir creciendo y expandiendo nuestro impacto en la industria tecnológica.",
        "valores" : "Valores",
        "rol1" : "CEO & Fundador",
        "rol2" : "Desarrolladora",
        "rol3" : "Agente de Ventas",
        "valor1": "Compromiso con la calidad: Nos aseguramos de que cada producto y servicio cumpla con los más altos estándares.",
        "valor2": "Innovación constante: Estamos en la vanguardia del desarrollo tecnológico, adoptando nuevas tendencias y mejorando continuamente nuestros procesos.",
        "valor3": "Atención al cliente excepcional: Nos preocupamos por brindar la mejor experiencia, resolviendo dudas y ofreciendo asesoramiento experto.",
        "valor4": "Ética y responsabilidad: Operamos con integridad, asegurando prácticas empresariales justas y sostenibles.",
        "valor5": "Trabajo en equipo: Fomentamos un ambiente de colaboración, donde cada miembro aporta valor a nuestro crecimiento.",
        "catalogo" : "Catálogo de Productos",
        "boton1" : "Todos",
        "boton2" : "Laptops",
        "boton3" : "Celulares",
        "boton4" : "Ipad",
        "boton5" : "Relojes",
        "boton6" : "Accesorios",
        "tituloservicios" : "Nuestros Servicios",
        "servicio1" : "Desarrollo Web",
        "servicio2" : "Mantenimiento de Equipos",
        "servicio3" : "Soporte IT",
        "serv1" : "Creación de sitios web responsivos, rápidos y optimizados para cualquier dispositivo.",
        "serv2" : "Servicio técnico especializado para mantener tus dispositivos en óptimas condiciones.",
        "serv3" : "Soluciones rápidas y eficientes para el mantenimiento y soporte de tus sistemas.",
        "servi1" : "Más información",
        "titulobeneficios1" : "Mejora en la eficiencia",
        "titulobeneficios2" : "Reducción de costos",
        "titulobeneficios3" : "Escalabilidad",
        "beneficio1" : "Optimización de procesos para mejorar la productividad y reducir tiempos.",
        "beneficio2" : "Soluciones rentables para maximizar tu inversión tecnológica.",
        "beneficio3" : "Soluciones tecnológicas que crecen contigo y tus necesidades.",
        "nombre1" : "Nombre",
        "email1" : "Correo Electrónico",
        "mensaje1" : "Mensaje",
        "enviar1" : "Enviar",
        "reiniciar1" : "Reiniciar",
        "redessoci" : "Redes Sociales",
        "testimoniosclien" : "Testimonios de los clientes",
        "testimonio1" : "Este servicio cambió mi negocio. ¡Altamente recomendado!",
        "testimonio2" : "El mejor servicio al cliente que he recibido, sin duda.",
        "testimonio3" : "La calidad es excelente, y los resultados superaron mis expectativas.",
        "buscaempleo1" : "Desarrollador Front-End",
        "buscaempleo2" : "Dependiente",
        "buscaempleo3" : "Técnico en computación",
        "buscaempleo4" : "Cajero",
        "razon1" : "Estamos buscando un desarrollador Front-End con experiencia en React y CSS para unirse a nuestro equipo",
        "razon2" : "Buscamos dos dependientes que tengan conocimiento en computación",
        "razon3" : "Buscamos un técnico en computación comprobable para realizar mantenimientos y ensambles",
        "razon4" : "Requerimos una persona con experiencia de cajero comprobable",
        "envio1" : "Compartir en Facebook",
        "postularse1" : "Postúlate",
        "tendencia1" : "Tendencias en Inteligencia Artificial",
        "tendencia2" : "Innovaciones en Hardware",
        "texto1" : "Descubre cómo la IA está revolucionando la industria tecnológica...",
        "texto2" : "Las últimas tarjetas gráficas",
        "compartir1" : "Compartir en Facebook",
        "titulofaq" : "Preguntas Frecuentes",
        "botonfaq1" : "¿Cuánto tardan en crear una página web?",
        "botonfaq2" : "¿Tienen productos en stock?",
        "botonfaq3" : "¿Cómo puedo saber si un producto es adecuado para mis necesidades?",
        "botonfaq4" : "¿Qué tipo de garantía tienen los productos que venden?",
        "botonfaq5" : "¿Cómo puedo hacer válida la garantía de un producto?",
        "botonfaq6" : "¿Puedo devolver un producto si no estoy satisfecho con él?",
        "botonfaq7" : "¿Ofrecen asesoría para la instalación de productos?",
        "botonfaq8" : "¿Cuánto tiempo tarda en llegar mi pedido?",
        "respuesta1" : "Dependiendo del trabajo que deseen que esta lleve, se puede tardar más o menos, pero por dar un aproximado, 22 días una sencilla.",
        "respuesta2" : "La disponibilidad de los productos varía según el artículo. Puedes revisar en línea el inventario actual o contactarnos para confirmar si el producto está en stock.",
        "respuesta3" : "Ofrecemos asesoría personalizada para ayudarte a elegir el producto que mejor se adapte a tus necesidades. También tenemos guías y reseñas de productos en nuestro sitio web.",
        "respuesta4" : "La mayoría de nuestros productos cuentan con una garantía de 1 año. La garantía cubre defectos de fabricación, pero no daños causados por el mal uso del producto.",
        "respuesta5" : "Si tu producto presenta un defecto de fabricación, por favor contáctanos a nuestro soporte técnico, y te indicaremos los pasos para hacer válida la garantía.",
        "respuesta6" : "Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre y cuando el producto esté en su estado original y sin abrir.",
        "respuesta7" : "Sí, ofrecemos servicios de instalación para varios productos. Puedes contratar este servicio adicional al momento de la compra.",
        "respuesta8" : "El tiempo de entrega depende de tu ubicación. Generalmente, los pedidos dentro de la GAM llegan el mismo día, mientras que los envíos fuera del GAM pueden tardar entre 5 y 7 días hábiles.",
        "tituloterminos" : "Términos y Condiciones de Uso",
        "termino1" : "1. Introducción",
        "termino2" : "2. Uso del Sitio Web",
        "termino3" : "3. Propiedad Intelectual",
        "termino4" : "4. Responsabilidad",
        "termino5" : "5. Política de Privacidad",
        "termino6" : "6. Modificaciones",
        "termino7" : "7. Contacto",
        "textotermino1" : "Bienvenido a nuestro sitio web. Al acceder a este sitio web, aceptas los términos y condiciones establecidos a continuación.",
        "textotermino2" : "Este sitio web y sus contenidos están destinados solo para uso personal. No está permitido el uso comercial sin el consentimiento explícito.",
        "textotermino3" : "Todo el contenido disponible en este sitio web, incluyendo texto, imágenes, logotipos y gráficos, es propiedad de la empresa y está protegido por derechos de autor.",
        "textotermino4" : "No somos responsables de cualquier daño o pérdida derivada del uso del sitio web. El uso de este sitio web es bajo tu propio riesgo.",
        "textotermino5" : "Tu privacidad es importante para nosotros. Para más detalles sobre cómo manejamos tus datos, consulta nuestra Política de Privacidad.",
        "textotermino6" : "Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Te recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio.",
        "textotermino7" : "Si tienes alguna pregunta sobre estos términos, puedes contactarnos a través de nuestra sección de contacto.",
        "footer1" : "2025 TechWorld. Todos los derechos reservados.",
        "footer2" : "Síguenos en redes sociales:",
        "bienvenida" : "Bienvenido a TechWorld",



    },
    en: {
        "bienvenidos": "Welcome",
        "productos_destacados": "Featured Products and Services",
        "macbook_pro": "MacBook Pro",
        "descripcion_macbook": "Designed for Apple intelligence. Personal, private, powerful.",
        "ipad_pro": "iPad Pro",
        "descripcion_ipad": "Ultra Retina XDR. The world's most advanced display. Extreme brightness and precise contrast.",
        "mantenimiento": "Equipment Maintenance",
        "descripcion_mantenimiento": "Specialized technical service to keep your devices in optimal condition.",
        "desarrollo_web": "Web Development",
        "descripcion_desarrollo": "Web development experts ready to help you create the website of your dreams.",
        "novedades": "Tech News",
        "nueva_macbook": "New MacBook Air.",
        "nuevo_iphone": "The new iPhone 16 Pro.",
        "nuevo_ipad": "New iPad Air.",
        "mas_informacion": "More information",
        "compartir_facebook": "📤 Share on Facebook",
        "bienvenida" : "Welcome",
        "inicio" : "Store",
        "productos" : "Products",
        "servicios" : "Services",
        "nosotros" : "About Us",
        "contacto" : "Contact",
        "clientes" : "Customers",
        "empleo" : "Employment",
        "blog" : "Blog",
        "faq" : "FAQ",
        "terminos" : "Terms and Conditions",
        "valor1": "Commitment to quality: We ensure that every product and service meets the highest standards.",
        "valor2": "Constant innovation: We are at the forefront of technological development, adopting new trends and continuously improving our processes.",
        "valor3": "Exceptional customer service: We care about providing the best experience, resolving doubts, and offering expert advice.",
        "valor4": "Ethics and responsibility: We operate with integrity, ensuring fair and sustainable business practices.",
        "valor5": "Teamwork: We foster a collaborative environment where every member contributes to our growth.",
        "titulo-historia" : "TechWorld's Story",
        "historia1" : "TechWorld was born with the vision of providing the best technological components and services on the market. From our beginnings, we have worked hard to offer innovative and high-quality solutions to our customers. With over a decade of experience in the sector, we have managed to establish ourselves as a reference in the industry, offering state-of-the-art products and exceptional service.",
        "historia2" : "Over the years, we have expanded our operations, opening new branches and expanding our range of products to meet the changing needs of the market. Our commitment to innovation and excellence has allowed us to establish lasting relationships with customers and suppliers, always ensuring the best service.",
        "mision" : "Mission",
        "mision1" : "To provide the highest quality technological products and services, ensuring customer satisfaction through innovative solutions and exceptional service. We strive to be a reliable ally in the technological growth of our customers, providing tools and knowledge to help them achieve their goals.",
        "vision" : "Vision",
        "vision1" : "To be leaders in the technological sector, driving innovation and development in the market. We want to be recognized for our ability to adapt to new trends and for our commitment to quality and customer service. We aspire to continue growing and expanding our impact in the technology industry.",
        "valores" : "Values",
        "rol1" : "CEO & Founder",
        "rol2" : "Developer",
        "rol3" : "Sales Agent",
        "catalogo" : "Product Catalog",
        "boton1" : "All",
        "boton2" : "Laptops",
        "boton3" : "Smartphones",
        "boton4" : "Ipad",
        "boton5" : "Watch",
        "boton6" : "Accesories",
        "tituloservicios": "Our Services",
        "servicio1": "Web Development",
        "servicio2": "Equipment Maintenance",
        "servicio3": "IT Support",
        "serv1": "Creation of responsive, fast, and optimized websites for any device.",
        "serv2": "Specialized technical service to keep your devices in optimal condition.",
        "serv3": "Fast and efficient solutions for the maintenance and support of your systems.",
        "servi1": "More information",
        "titulobeneficios1": "Improved Efficiency",
        "titulobeneficios2": "Cost Reduction",
        "titulobeneficios3": "Scalability",
        "beneficio1": "Process optimization to improve productivity and reduce time.",
        "beneficio2": "Cost-effective solutions to maximize your technological investment.",
        "beneficio3": "Technological solutions that grow with you and your needs.",
        "nombre1": "Name",
        "email1": "Email",
        "mensaje1": "Message",
        "enviar1": "Send",
        "reiniciar1": "Reset",
        "redessoci" : "Social Media",
        "testimoniosclien": "Customer Testimonials",
        "testimonio1": "This service changed my business. Highly recommended!",
        "testimonio2": "The best customer service I have ever received, without a doubt.",
        "testimonio3": "The quality is excellent, and the results exceeded my expectations.",
        "buscaempleo1": "Front-End Developer",
        "buscaempleo2": "Sales Assistant",
        "buscaempleo3": "Computer Technician",
        "buscaempleo4": "Cashier",
        "razon1": "We are looking for a Front-End developer with experience in React and CSS to join our team.",
        "razon2": "We are looking for two sales assistants with computer knowledge.",
        "razon3": "We need a certified computer technician for maintenance and assembly tasks.",
        "razon4": "We require a person with proven cashier experience.",
        "envio1": "Share on Facebook",
        "postularse1" : "Apply",
        "tendencia1": "Trends in Artificial Intelligence",
        "tendencia2": "Innovations in Hardware",
        "texto1": "Discover how AI is revolutionizing the tech industry...",
        "texto2": "The latest graphics cards",
        "compartir1": "Share on Facebook",
        "titulofaq": "Frequently Asked Questions",
        "botonfaq1": "How long does it take to create a website?",
        "botonfaq2": "Do you have products in stock?",
        "botonfaq3": "How can I know if a product is right for my needs?",
        "botonfaq4": "What kind of warranty do the products you sell have?",
        "botonfaq5": "How can I claim the warranty for a product?",
        "botonfaq6": "Can I return a product if I am not satisfied with it?",
        "botonfaq7": "Do you offer assistance for product installation?",
        "botonfaq8": "How long does it take for my order to arrive?",
        "respuesta1": "Depending on the features you want, the process may take more or less time. As an estimate, a simple website takes about 22 days.",
        "respuesta2": "Product availability varies by item. You can check the current inventory online or contact us to confirm if the product is in stock.",
        "respuesta3": "We offer personalized advice to help you choose the product that best suits your needs. We also have guides and product reviews on our website.",
        "respuesta4": "Most of our products come with a 1-year warranty. The warranty covers manufacturing defects but does not cover damage caused by misuse.",
        "respuesta5": "If your product has a manufacturing defect, please contact our technical support, and we will guide you through the warranty claim process.",
        "respuesta6": "Yes, we accept returns within 30 days of purchase, as long as the product is in its original, unopened condition.",
        "respuesta7": "Yes, we offer installation services for various products. You can add this service when making your purchase.",
        "respuesta8": "Delivery time depends on your location. Generally, orders within the GAM arrive the same day, while shipments outside the GAM may take between 5 and 7 business days.",
        "tituloterminos": "Terms and Conditions of Use",
        "termino1": "1. Introduction",
        "termino2": "2. Use of the Website",
        "termino3": "3. Intellectual Property",
        "termino4": "4. Liability",
        "termino5": "5. Privacy Policy",
        "termino6": "6. Modifications",
        "termino7": "7. Contact",
        "textotermino1": "Welcome to our website. By accessing this website, you agree to the terms and conditions set forth below.",
        "textotermino2": "This website and its contents are intended for personal use only. Commercial use is not allowed without explicit consent.",
        "textotermino3": "All content available on this website, including text, images, logos, and graphics, is the property of the company and is protected by copyright.",
        "textotermino4": "We are not responsible for any damage or loss resulting from the use of this website. The use of this website is at your own risk.",
        "textotermino5": "Your privacy is important to us. For more details on how we handle your data, please review our Privacy Policy.",
        "textotermino6": "We reserve the right to modify these terms and conditions at any time. We recommend reviewing this page periodically to stay informed of any changes.",
        "textotermino7": "If you have any questions about these terms, you can contact us through our contact section.",
        "footer1" : "2025 TechWorld. All rights reserved.",
        "footer2" : "Follow us on social media:",
        "bienvenida" : "Welcome to TechWorld",
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    localStorage.setItem("idioma", lang);

    const elements = document.querySelectorAll('[id]');
    
    elements.forEach(element => {
        const key = element.id;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === "LI" && element.querySelector("a")) {
                element.querySelector("a").textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    let savedLang = localStorage.getItem("idioma") || "es";
    changeLanguage(savedLang);
});

    function applyLanguageToHeaderFooter() {
        let savedLang = localStorage.getItem("idioma") || "es";
        changeLanguage(savedLang);
    }

    document.addEventListener("DOMContentLoaded", function() {
        fetch('../includes/footer.html')
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('beforeend', data);
                applyLanguageToHeaderFooter();
            });
    
        let savedLang = localStorage.getItem("idioma") || "es";
        changeLanguage(savedLang);
    });