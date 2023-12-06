const navToggle = document.getElementById('nav-toggle');




navToggle.addEventListener('click', (e) => {
    const navHeader = e.currentTarget.parentElement;
    navHeader.classList.toggle('show-links');

    const closeBtn = document.querySelector('.nav-close-btn');
    closeBtn.addEventListener('click', () => {
        navHeader.classList.remove('show-links');
    })
    
})