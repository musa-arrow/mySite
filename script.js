document.addEventListener('DOMContentLoaded', () => {
    const editForm = document.getElementById('edit-form');
    const profileForm = document.getElementById('profile-form');
    const skillsContainer = document.getElementById('skills-container');

    // Default profile data
    const defaultProfileData = {
        name: "Musa Ok",
        title: "Full Stack Web Developer",
        about: "Bilgisayar mühendisliği öğrencisi olarak full stack web development alanında kendimi geliştiriyorum. Frontend tarafında HTML ve CSS, backend tarafında Python ve Java, veritabanı olarak SQLite kullanabiliyorum. Ayrıca C ve C++ ile sistem programlama ve algoritma geliştirme konularında deneyimim var. Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.",
        email: "musaok425@gmail.com",
        phone: "05454117205",
        skills: ["Python", "Java", "HTML", "CSS", "C", "C++", "SQLite", "Dosya İşlemleri", "Cursor AI Kullanımı"]
    };

    // Set default values in form
    document.getElementById('input-name').value = defaultProfileData.name;
    document.getElementById('input-title').value = defaultProfileData.title;
    document.getElementById('input-about').value = defaultProfileData.about;
    document.getElementById('input-email').value = defaultProfileData.email;
    document.getElementById('input-phone').value = defaultProfileData.phone;
    document.getElementById('input-skills').value = defaultProfileData.skills.join(', ');

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

        // Hide edit form
        editForm.style.display = 'none';

        // Save to localStorage
        const profileData = {
            name,
            title,
            about,
            email,
            phone,
            skills
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
}); 
