document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const flyoutMenu = document.getElementById('flyoutMenu');
    const overlay = document.getElementById('overlay');
    const mainContent = document.querySelector('main');
    const themeToggle = document.getElementById('themeToggle');
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');
    const body = document.body;

    menuIcon.addEventListener('click', function() {
        flyoutMenu.classList.toggle('translate-y-0');
        flyoutMenu.classList.toggle('-translate-y-full');
        overlay.classList.toggle('hidden');
        overlay.classList.toggle('opacity-100');
        mainContent.classList.toggle('blur-sm');
    });

    overlay.addEventListener('click', function() {
        flyoutMenu.classList.add('-translate-y-full');
        overlay.classList.add('hidden');
        overlay.classList.remove('opacity-100');
        mainContent.classList.remove('blur-sm');
    });

    searchIcon.addEventListener('click', function() {
        const isVisible = searchInput.classList.contains('hidden');
        if (isVisible) {
            searchInput.classList.remove('hidden');
            setTimeout(() => {
                searchInput.style.width = '150px';
                searchInput.style.opacity = '1';
            }, 10);
        } else {
            searchInput.style.width = '0';
            searchInput.style.opacity = '0';
            setTimeout(() => {
                searchInput.classList.add('hidden');
            }, 500);
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });

    setInterval(() => {
        const now = new Date();
        document.getElementById('score1').textContent = `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`;
        document.getElementById('time1').textContent = now.toLocaleTimeString();
        document.getElementById('score2').textContent = `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`;
        document.getElementById('time2').textContent = now.toLocaleTimeString();
        document.getElementById('score3').textContent = `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`;
        document.getElementById('time3').textContent = now.toLocaleTimeString();
        document.getElementById('score4').textContent = `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`;
        document.getElementById('time4').textContent = now.toLocaleTimeString();
        document.getElementById('score5').textContent = `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`;
        document.getElementById('time5').textContent = now.toLocaleTimeString();
        document.getElementById('score6').textContent = `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`;
        document.getElementById('time6').textContent = now.toLocaleTimeString();
        document.getElementById('score7').textContent = `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`;
        document.getElementById('time7').textContent = now.toLocaleTimeString();
        document.getElementById('score8').textContent = `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`;
        document.getElementById('time8').textContent = now.toLocaleTimeString();
    }, 10000); // Update every 5 seconds

    
});