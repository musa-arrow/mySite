document.addEventListener('DOMContentLoaded', () => {
    const editForm = document.getElementById('edit-form');
    const profileForm = document.getElementById('profile-form');
    const skillsContainer = document.getElementById('skills-container');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Theme handling
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Scroll animations
    const revealElements = document.querySelectorAll('.about-content, .skills-container, .hobbies-container, .contact-info');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
            
            if (isVisible) {
                element.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // Default profile data
    const defaultProfileData = {
        name: "Musa Ok",
        title: "Yapay Zeka Geliştirici Adayı",
        about: "İstanbul Arel Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Yapay zeka ve makine öğrenmesi alanında tutkulu bir geliştiriciyim. Python ekosistemi (NumPy, Pandas) ve veri bilimi konularında deneyimliyim. Arel Yazılım Kulübü'nde aktif olarak çalışıyor ve sürekli kendimi geliştiriyorum. Hedefim, yapay zeka teknolojilerini kullanarak yenilikçi çözümler üretmek.",
        email: "musaok425@gmail.com",
        phone: "05454117205",
        skills: ["Python", "NumPy", "Pandas", "HTML", "CSS", "Cursor AI", "Java", "C", "C++", "Dosya İşlemleri", "Makine Öğrenmesi"],
        hobbies: ["Yüzme", "Futbol", "Masa Tenisi"]
    };

    // Set default values in form
    document.getElementById('input-name').value = defaultProfileData.name;
    document.getElementById('input-title').value = defaultProfileData.title;
    document.getElementById('input-about').value = defaultProfileData.about;
    document.getElementById('input-email').value = defaultProfileData.email;
    document.getElementById('input-phone').value = defaultProfileData.phone;
    document.getElementById('input-skills').value = defaultProfileData.skills.join(', ');
    document.getElementById('input-hobbies').value = defaultProfileData.hobbies.join(', ');

    // Update website content
    document.getElementById('name').textContent = defaultProfileData.name;
    document.getElementById('title').textContent = defaultProfileData.title;
    document.getElementById('about-text').textContent = defaultProfileData.about;
    document.getElementById('email').textContent = defaultProfileData.email;
    document.getElementById('phone').textContent = defaultProfileData.phone;

    // Update skills
    skillsContainer.innerHTML = '';
    defaultProfileData.skills.forEach(skill => {
        if (skill) {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item';
            skillElement.textContent = skill;
            skillsContainer.appendChild(skillElement);
        }
    });

    // Update hobbies
    const hobbiesContainer = document.getElementById('hobbies-container');
    hobbiesContainer.innerHTML = '';
    defaultProfileData.hobbies.forEach(hobby => {
        const hobbyItem = document.createElement('div');
        hobbyItem.className = 'hobby-item';
        hobbyItem.innerHTML = `
            <i class="fas fa-heart"></i>
            <h3>${hobby}</h3>
        `;
        hobbiesContainer.appendChild(hobbyItem);
    });

    // Hide edit form
    editForm.style.display = 'none';

    // Save to localStorage
    localStorage.setItem('profileData', JSON.stringify(defaultProfileData));

    // Handle form submission for future updates
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('input-name').value;
        const title = document.getElementById('input-title').value;
        const about = document.getElementById('input-about').value;
        const email = document.getElementById('input-email').value;
        const phone = document.getElementById('input-phone').value;
        const skills = document.getElementById('input-skills').value.split(',').map(skill => skill.trim());
        const hobbies = document.getElementById('input-hobbies').value.split(',').map(hobby => hobby.trim());

        // Update website content
        document.getElementById('name').textContent = name;
        document.getElementById('title').textContent = title;
        document.getElementById('about-text').textContent = about;
        document.getElementById('email').textContent = email;
        document.getElementById('phone').textContent = phone;

        // Update skills
        skillsContainer.innerHTML = '';
        skills.forEach(skill => {
            if (skill) {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill-item';
                skillElement.textContent = skill;
                skillsContainer.appendChild(skillElement);
            }
        });

        // Update hobbies
        hobbiesContainer.innerHTML = '';
        hobbies.forEach(hobby => {
            const hobbyItem = document.createElement('div');
            hobbyItem.className = 'hobby-item';
            hobbyItem.innerHTML = `
                <i class="fas fa-heart"></i>
                <h3>${hobby}</h3>
            `;
            hobbiesContainer.appendChild(hobbyItem);
        });

        // Hide edit form
        editForm.style.display = 'none';

        // Save to localStorage
        const profileData = {
            name,
            title,
            about,
            email,
            phone,
            skills,
            hobbies
        };
        localStorage.setItem('profileData', JSON.stringify(profileData));
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navOverlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}); 