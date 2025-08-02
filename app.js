document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    injectFooter();
    initMenuToggle();
    initFooterObserver();
    renderSkills();
    renderProjects();
});

function getBasePath() {
    return window.location.pathname.includes('/projects/') ? '../' : '';
}

function injectNavbar() {
    const container = document.getElementById('navbar');
    if (!container) return;
    const base = getBasePath();
    container.innerHTML = `
    <nav class="navbar">
        <div class="navbar__container">
            <a href="${base}index.html" id="navbar__logo">
                <i class="fa-solid fa-laptop-code"></i>
            </a>
            <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="${base}projects.html" class="navbar__links">Projects</a>
                </li>
                <li class="navbar__item">
                    <a href="${base}about.html" class="navbar__links">About</a>
                </li>
                <li class="navbar__item">
                    <a href="${base}resume.html" class="navbar__links">Resume</a>
                </li>
                <li class="navbar__btn">
                    <a href="${base}contact.html" class="button">Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>`;
}

function injectFooter() {
    const container = document.getElementById('footer');
    if (!container) return;
    container.innerHTML = `
    <div class="footer__container">
        <div class="footer__content">
            <div class="footer__topHeading">
                <h1 class="contact__name">EYOB TESHOME</h1>
                <div class="contact__info">
                    <p class="contact__title">Software Engineer</p>
                    <p class="contact__location">Based in Sacramento, California</p>
                </div>
            </div>
            <div class="contact_details">
                <p class="contact__label">Get in touch at</p>
                <p class="contact__email">berhanemeskel68@gmail.com</p>
                <p class="contact__phone">(916) 546-0992</p>
            </div>
            <div class="social__media">
                <a href="https://facebook.com" class="social__icon--link" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://instagram.com/eyob.ts" class="social__icon--link" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://github.com/eyob-tesh" class="social__icon--link" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://linkedin.com/in/eyobte" class="social__icon--link" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>`;
}

function initMenuToggle() {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    if (!menu || !menuLinks) return;
    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
}

function initFooterObserver() {
    const footer = document.querySelector('.footer__container');
    if (!footer) return;
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    footerObserver.observe(footer);
}

const skillData = {
    technical: [
        { icon: 'fa-brands fa-python', label: 'Python' },
        { icon: 'fa-solid fa-database', label: 'SQL & RDBMS' },
        { icon: 'fa-brands fa-php', label: 'PHP' },
        { icon: 'fa-solid fa-code', label: 'C++' },
        { icon: 'fa-solid fa-code-branch', label: 'Git' },
        { icon: 'fa-solid fa-file-excel', label: 'Microsoft Office' }
    ],
    soft: [
        { icon: 'fa-solid fa-users', label: 'Team Building' },
        { icon: 'fa-solid fa-comments', label: 'Communication' },
        { icon: 'fa-solid fa-lightbulb', label: 'Initiative' },
        { icon: 'fa-solid fa-flag', label: 'Leadership' }
    ],
    interests: [
        { icon: 'fa-solid fa-network-wired', label: 'Distributed Systems' },
        { icon: 'fa-solid fa-code', label: 'Software Development' },
        { icon: 'fa-solid fa-project-diagram', label: 'Algorithm Design' },
        { icon: 'fa-solid fa-shield-alt', label: 'Cybersecurity' }
    ],
    languages: [
        { label: 'English (Fluent)' },
        { label: 'Amharic (Professionaly)' }
    ]
};

function renderSkills() {
    const root = document.getElementById('skills-root');
    if (!root) return;
    const sections = [
        { key: 'technical', title: 'Technical Skills' },
        { key: 'soft', title: 'Soft Skills' },
        { key: 'interests', title: 'Interests' },
        { key: 'languages', title: 'Languages' }
    ];

    sections.forEach(sec => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = `body__section body__${sec.key}`;
        sectionDiv.innerHTML = `<div class="body__header"><h3>${sec.title}</h3></div>`;
        const grid = document.createElement('div');
        grid.className = 'skills-grid';
        skillData[sec.key].forEach(item => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            if (item.icon) {
                card.innerHTML = `<i class="${item.icon} fa-3x"></i><p>${item.label}</p>`;
            } else {
                card.innerHTML = `<p>${item.label}</p>`;
            }
            grid.appendChild(card);
        });
        sectionDiv.appendChild(grid);
        root.appendChild(sectionDiv);
    });
}

const projects = [
    {
        title: 'Distributed Systems Project',
        description: 'Scalable distributed system with fault tolerance',
        link: 'projects/distributed-project.html'
    },
    {
        title: 'Trash Can Project',
        description: 'Automated trashcan that notified users to throw out their trash',
        link: 'projects/trash-can-project.html'
    },
    {
        title: 'Movie Tracker Application',
        description: 'Somewhere to store what movies you have seen and what movies you want to see later',
        link: 'projects/movie-tracker-project.html'
    },
    {
        title: 'Personal Website',
        description: 'Created a personal website for myself',
        link: 'projects/personal-website-project.html'
    },
    {
        title: 'Personal Daily Reminder App',
        description: 'An App to help you keep on top of your day',
        link: 'projects/daily-reminder-project.html'
    },
    {
        title: 'Local Neighborhood Service Marketplace',
        description: 'An App for local business to advertise their business',
        link: 'projects/neighborhood-marketplace-project.html'
    }
];

function renderProjects() {
    const container = document.getElementById('projects-list');
    if (!container) return;
    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'projects__card';
        card.innerHTML = `<h2>${p.title}</h2><p>${p.description}</p><button onclick="location.href='${p.link}'">View Details</button>`;
        container.appendChild(card);
    });
}


