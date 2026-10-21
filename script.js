(() => {
    'use strict';

    const root = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    const themeLabel = themeBtn.querySelector('.theme-label');
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    /* ---------- Theme toggle (remembers choice) ---------- */
    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        const next = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        themeLabel.textContent = next;
        themeBtn.setAttribute('aria-label', 'Switch to ' + next.toLowerCase());
    }

    let saved = null;
    try { saved = localStorage.getItem('portfolio-theme'); } catch (e) { /* storage unavailable */ }
    applyTheme(saved === 'light' ? 'light' : 'dark');

    themeBtn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('portfolio-theme', next); } catch (e) { /* ignore */ }
    });

    /* ---------- Mobile menu ---------- */
    function setMenu(open) {
        navLinks.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
    navLinks.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

    /* ---------- Active nav link on scroll ---------- */
    const links = [...navLinks.querySelectorAll('a')];
    const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

    const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));

    /* ---------- Skill bars fill when scrolled into view ---------- */
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function fillSkill(card) {
        const level = Number(card.dataset.level) || 0;
        const fill = card.querySelector('.fill');
        const pct = card.querySelector('.pct');
        fill.style.width = level + '%';

        if (reduceMotion) { pct.textContent = level + '%'; return; }
        const start = performance.now();
        const duration = 1300;
        (function tick(now) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            pct.textContent = Math.round(level * eased) + '%';
            if (t < 1) requestAnimationFrame(tick);
        })(start);
    }

    const skillObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { fillSkill(entry.target); obs.unobserve(entry.target); }
        });
    }, { threshold: 0.4 });
    document.querySelectorAll('.skill').forEach(card => skillObserver.observe(card));

    /* ---------- Only one reflection open at a time ---------- */
    const details = [...document.querySelectorAll('.topic details')];
    details.forEach(d => d.addEventListener('toggle', () => {
        if (d.open) details.forEach(other => { if (other !== d) other.open = false; });
    }));

    /* ---------- Footer year ---------- */
    document.getElementById('year').textContent = new Date().getFullYear();


})();

/* ---------- Hide / show About Me details ---------- */
const aboutToggle = document.getElementById('aboutToggle');
const aboutContent = document.getElementById('aboutContent');

aboutToggle.addEventListener('click', () => {
    const open = aboutToggle.getAttribute('aria-expanded') === 'true';
    aboutToggle.setAttribute('aria-expanded', String(!open));
    aboutToggle.textContent = open ? 'Show details' : 'Hide details';
    aboutContent.classList.toggle('collapsed', open);
    aboutContent.inert = open; // hidden links/buttons can't be tabbed to
});