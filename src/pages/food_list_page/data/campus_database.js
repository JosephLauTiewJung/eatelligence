export const CAMPUS_DATABASE = [
    {
        id: 'spot_1',
        name: 'Ayam Penyet Special',
        stall: 'Warung Penyet',
        location: 'KK8 Cafeteria',
        price: 8.50,
        calories: 650,
        protein: 35,
        tags: ['Halal', 'Spicy', 'Heavy'],
        rating: 4.5,
        distance: 150, // meters from center
        openHours: { start: 7, end: 21 },
        popularity: 92,
        imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'spot_2',
        name: 'Nasi Lemak Budget',
        stall: 'Mak Cik Corner',
        location: 'Faculty of Engineering',
        price: 3.50,
        calories: 450,
        protein: 15,
        tags: ['Budget', 'Halal', 'Breakfast'],
        rating: 4.2,
        distance: 300,
        openHours: { start: 6, end: 14 },
        popularity: 88,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Nasi_Lemak_dengan_Chili_Nasi_Lemak_dan_Sotong_Pedas%2C_di_Penang_Summer_Restaurant.jpg/960px-Nasi_Lemak_dengan_Chili_Nasi_Lemak_dan_Sotong_Pedas%2C_di_Penang_Summer_Restaurant.jpg',
    },
    {
        id: 'spot_3',
        name: 'Grilled Chicken Salad',
        stall: 'Healthy Bites',
        location: 'KK12 Bistro',
        price: 12.00,
        calories: 320,
        protein: 42,
        tags: ['Healthy', 'Western', 'Low-Cal'],
        rating: 4.7,
        distance: 400,
        openHours: { start: 10, end: 20 },
        popularity: 75,
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'spot_4',
        name: 'Economy Rice',
        stall: 'Mixed Rice Stall',
        location: 'KK9 Food Court',
        price: 5.00,
        calories: 550,
        protein: 20,
        tags: ['Budget', 'Chinese', 'Variety'],
        rating: 4.0,
        distance: 200,
        openHours: { start: 10, end: 15 },
        popularity: 80,
        imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'spot_5',
        name: 'Roti Canai Set',
        stall: 'Mamak Corner',
        location: 'KK1 Cafeteria',
        price: 4.00,
        calories: 380,
        protein: 10,
        tags: ['Budget', 'Halal', 'Breakfast', 'Quick'],
        rating: 4.3,
        distance: 500,
        openHours: { start: 6, end: 23 },
        popularity: 95,
        imageUrl: 'https://delishglobe.com/wp-content/uploads/2025/04/Roti-Canai.png',
    },
    {
        id: 'spot_6',
        name: 'Mee Goreng Mamak',
        stall: 'Mamak Corner',
        location: 'KK1 Cafeteria',
        price: 6.00,
        calories: 520,
        protein: 18,
        tags: ['Halal', 'Spicy', 'Quick'],
        rating: 4.4,
        distance: 500,
        openHours: { start: 6, end: 23 },
        popularity: 90,
        imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'spot_7',
        name: 'Chicken Chop Western',
        stall: 'Western Delights',
        location: 'Faculty of Business',
        price: 11.00,
        calories: 720,
        protein: 40,
        tags: ['Western', 'Heavy', 'Protein'],
        rating: 4.1,
        distance: 350,
        openHours: { start: 11, end: 20 },
        popularity: 70,
        imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 'spot_8',
        name: 'Vegetarian Fried Rice',
        stall: 'Green Garden',
        location: 'KK4 Cafeteria',
        price: 5.50,
        calories: 400,
        protein: 12,
        tags: ['Vegetarian', 'Healthy', 'Budget'],
        rating: 4.0,
        distance: 250,
        openHours: { start: 7, end: 19 },
        popularity: 65,
        imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop',
    }
];

// AI-like recommendation algorithms
export const getRecommendationScore = (item, context) => {
    const { budget, mood, bmi, currentHour, userAllergies = [], dietary = {} } = context;
    let score = 50; // Base score

    // Budget scoring (higher score for better value within budget)
    if (budget) {
        const budgetNum = parseBudget(budget);
        if (item.price <= budgetNum) {
            score += 20 + (budgetNum - item.price) * 2; // Bonus for being under budget
        } else {
            score -= 30; // Penalty for over budget
        }
    }

    // Location/Distance scoring (closer = higher score)
    score += Math.max(0, 20 - (item.distance / 50));

    // Time-aware scoring (is it open now?)
    if (currentHour >= item.openHours.start && currentHour < item.openHours.end) {
        score += 15;
    } else {
        score -= 50; // Major penalty if closed
    }

    // Popularity scoring
    score += item.popularity * 0.1;

    // Health-aware scoring based on BMI
    if (bmi) {
        const bmiNum = parseFloat(bmi);
        if (bmiNum > 25 && item.calories < 500) {
            score += 15; // Prefer low-cal for overweight
        }
        if (bmiNum < 18.5 && item.calories > 500) {
            score += 10; // Prefer calorie-dense for underweight
        }
    }

    // Mood-based scoring
    if (mood) {
        if (mood.includes('Stressed') && item.tags.includes('Heavy')) score += 10;
        if (mood.includes('Tired') && item.tags.includes('Quick')) score += 15;
        if (mood.includes('Happy') && item.rating > 4.3) score += 10;
        if (mood.includes('Hungry') && item.calories > 500) score += 15;
    }

    // Dietary compliance
    if (dietary.halal && !item.tags.includes('Halal')) score -= 100;
    if (dietary.vegetarian && !item.tags.includes('Vegetarian')) score -= 100;

    // Allergy check
    userAllergies.forEach(allergy => {
        if (item.name.toLowerCase().includes(allergy.toLowerCase())) {
            score -= 100;
        }
    });

    return Math.max(0, Math.min(100, score));
};

const parseBudget = (budget) => {
    if (budget.includes('3-5')) return 5;
    if (budget.includes('5-10')) return 10;
    if (budget.includes('10-15')) return 15;
    if (budget.includes('15')) return 20;
    return 10;
};
