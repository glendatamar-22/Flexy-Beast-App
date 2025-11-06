// Stretch data for each category
const stretchesData = {
    arms: {
        title: 'Arm Stretches',
        stretches: [
            {
                name: 'Tricep Stretch',
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'Lift one arm up, bend elbow, gently pull with other hand. Hold 30 seconds each side.'
            },
            {
                name: 'Shoulder Stretch',
                image: 'https://images.ctfassets.net/6ilvqec50fal/bhjroHsgbjbRMi5H3Feul/122f628916267e5ea69753f3ccbe755c/tight-shoulder-stretch.jpg',
                description: 'Bring one arm across body, hold with other arm. 30 seconds each side.'
            },
            {
                name: 'Wrist Stretch',
                image: 'https://images.ctfassets.net/4f3rgqwzdznj/4GSIqElBbY09P0cf1IvZcJ/733fe5dfa6880b11aa66eccf359544e2/woman_doing_wrist_stretches-530994014.jpg',
                description: 'Pull fingers back gently with other hand. 20 seconds each.'
            }
        ]
    },
    legs: {
        title: 'Leg Stretches',
        stretches: [
            {
                name: 'Quad Stretch',
                image: 'https://www.verywellfit.com/thmb/ZhebQCbptSAeqWEms7TEzve85dY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-30-2696366-StandingStretch-2106-5993552eb501e800127d38d3.jpg',
                description: 'Stand on one leg, pull heel toward glutes. Hold 30 seconds each leg.'
            },
            {
                name: 'Hamstring Stretch',
                image: 'https://barbend.com/wp-content/uploads/2023/07/hamstring-stretch-barbend.com_.jpg',
                description: 'Sit with one leg extended, lean forward gently. Hold 30 seconds each leg.'
            },
            {
                name: 'Calf Stretch',
                image: 'https://goodexerciseguide.com/wp-content/uploads/2013/04/calfstretch-1.jpg',
                description: 'Step one foot back, press heel down. Hold 30 seconds each leg.'
            }
        ]
    },
    back: {
        title: 'Back Stretches',
        stretches: [
            {
                name: 'Cat-Cow Stretch',
                image: 'https://static.vecteezy.com/system/resources/previews/018/862/577/non_2x/man-doing-yoga-cat-cow-pose-stretch-exercise-flat-illustration-isolated-on-white-background-vector.jpg',
                description: 'On hands and knees, arch and round your back slowly. Repeat 10 times.'
            },
            {
                name: 'Spinal Twist',
                image: 'https://www.yogabasics.com/yogabasics2025/wp-content/uploads/2013/11/KneedDnTwist_9828.jpg',
                description: 'Lie on back, drop knees to one side. Hold 30 seconds each side.'
            },
            {
                name: 'Child\'s Pose',
                image: 'https://cdn.yogajournal.com/wp-content/uploads/2021/10/Childs-Pose_Andrew-Clark_1.jpg',
                description: 'Kneel and sit back on heels, reach arms forward. Hold 30 seconds.'
            }
        ]
    },
    'full-body': {
        title: 'Full Body Stretches',
        stretches: [
            {
                name: 'Side Lunge Stretch',
                image: 'https://media.hearstapps.com/loop/lunge-side-left-edited-1599484619.mp4/poster.jpg',
                description: 'Step wide to one side, bend that knee, keep other leg straight. Hold 30 seconds each side.'
            },
            {
                name: 'Lunge Stretch',
                image: 'https://www.verywellfit.com/thmb/2M77NtV1A9m_tN9QupDJpGm_dgE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/About-8-2911936-Low-Lunge-Kneel-Hamstring-Stretch01-131-12eb2bbe1c5c462e80313c7de44edd2e.jpg',
                description: 'Step forward into lunge position, lower back knee toward ground. Hold 30 seconds each side.'
            },
            {
                name: 'Elbow-to-Instep Lunge',
                image: 'https://static01.nyt.com/images/2014/10/23/health/well_advanced1/well_advanced1-blog480-v2.jpg',
                description: 'Step forward into lunge, place hand on ground, bring elbow down toward front foot. 3 times each side.'
            }
        ]
    }
};

// Show home page
function showHome() {
    document.getElementById('home-page').classList.add('active');
    document.getElementById('category-page').classList.remove('active');
    
    // Add class to body to prevent scrolling on mobile
    document.body.classList.add('home-page-active');
    document.body.classList.remove('category-page-active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Show category page
function showCategory(category) {
    const categoryData = stretchesData[category];
    if (!categoryData) return;

    // Remove home page class first to allow page transition
    document.body.classList.remove('home-page-active');
    document.body.classList.add('category-page-active');

    // Hide home page, show category page
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('category-page').classList.add('active');

    // Update title
    document.getElementById('category-title').textContent = categoryData.title;

    // Clear and populate stretches
    const container = document.getElementById('stretches-container');
    container.innerHTML = '';

    categoryData.stretches.forEach(stretch => {
        const stretchCard = document.createElement('div');
        stretchCard.className = 'stretch-card';
        
        stretchCard.innerHTML = `
            <h3 class="stretch-title">${stretch.name}</h3>
            <img src="${stretch.image}" alt="${stretch.name}" class="stretch-image" loading="lazy">
            <p class="stretch-description">${stretch.description}</p>
        `;
        
        container.appendChild(stretchCard);
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize body class for home page (prevent scrolling on mobile)
    if (document.getElementById('home-page').classList.contains('active')) {
        document.body.classList.add('home-page-active');
    }
    
    // Add click handlers to category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            showCategory(category);
        });
    });
});

