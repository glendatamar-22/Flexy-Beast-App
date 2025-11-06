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
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'Stand on one leg, pull heel toward glutes. Hold 30 seconds each leg.'
            },
            {
                name: 'Hamstring Stretch',
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'Sit with one leg extended, lean forward gently. Hold 30 seconds each leg.'
            },
            {
                name: 'Calf Stretch',
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'Step one foot back, press heel down. Hold 30 seconds each leg.'
            }
        ]
    },
    back: {
        title: 'Back Stretches',
        stretches: [
            {
                name: 'Cat-Cow Stretch',
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'On hands and knees, arch and round your back slowly. Repeat 10 times.'
            },
            {
                name: 'Spinal Twist',
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'Lie on back, drop knees to one side. Hold 30 seconds each side.'
            },
            {
                name: 'Child\'s Pose',
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'Kneel and sit back on heels, reach arms forward. Hold 30 seconds.'
            }
        ]
    },
    'full-body': {
        title: 'Full Body Stretches',
        stretches: [
            {
                name: 'Standing Forward Fold',
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'Stand tall, fold forward and let arms hang. Hold 30 seconds.'
            },
            {
                name: 'Sun Salutation',
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'Flow through: reach up, fold forward, plank, upward dog, downward dog. Repeat 3 times.'
            },
            {
                name: 'Supine Twist',
                image: 'https://shopyogastrong.com/cdn/shop/articles/yoga-strong-blog_c2000aa5-4ba0-4648-bb33-15e3989f9936_1950x.jpg?v=1721426042',
                description: 'Lie on back, hug knees, twist to one side. Hold 30 seconds each side.'
            }
        ]
    }
};

// Show home page
function showHome() {
    document.getElementById('home-page').classList.add('active');
    document.getElementById('category-page').classList.remove('active');
}

// Show category page
function showCategory(category) {
    const categoryData = stretchesData[category];
    if (!categoryData) return;

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

    // Show category page, hide home page
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('category-page').classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            showCategory(category);
        });
    });
});

