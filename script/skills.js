document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    // intersection observer to reveal skills when visible
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skill = entry.target;
                skill.classList.add('show');

                // animate bar fill width
                const fill = skill.querySelector('.bar-fill');
                const perc = Math.max(0, Math.min(100, Number(fill.dataset.perc || 0)));
                fill.style.width = perc + '%';

                observer.unobserve(skill); // play once
            }
        });
    }, { threshold: 0.3 });

    skills.forEach(skill => observer.observe(skill));
});