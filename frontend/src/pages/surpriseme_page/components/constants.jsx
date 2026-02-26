import burger from "../../../assets/burger.jpg"
import hotpot from '../../../assets/hotpot.jpg'
import asian_food from '../../../assets/asian_food.jpg'
import bakery from '../../../assets/bakery.jpg'
import beer from '../../../assets/beer.jpg'
import chocolate from '../../../assets/chocolate.jpg'
import pizza from '../../../assets/pizza.jpg'
import sushi from '../../../assets/sushi.jpg'
import taco from '../../../assets/taco.jpg'
import vegan from '../../../assets/vege.jpg'
import noodle from '../../../assets/noodle.jpg'

const MOCK_SPOT = [
    {
        id: '1',
        name: 'Spicy Mala Hotpot',
        imageUrl: hotpot,
        price: 18.99,
        tags: [
            { label: 'Spicy', color: 'bg-red-500/80 text-white' },
            { label: 'Adventure', color: 'bg-slate-700/80 text-white' },
            { label: 'Budget', color: 'bg-yellow    -400 text-black' }
        ],
        address: '123 Szechuan Street, Foodie Town'
    },
    {
        id: '2',
        name: 'Neon Coffee Roasters',
        imageUrl: 'https://picsum.photos/id/1060/800/800',
        price: 6.50,
        tags: [
            { label: 'Cozy', color: 'bg-blue-500/80 text-white' },
            { label: 'Premium', color: 'bg-purple-700/80 text-white' },
            { label: 'Work Friendly', color: 'bg-emerald-500 text-white' }
        ],
        address: '45 Bean Boulevard, Caffeine City'
    },
    {
        id: '3',
        name: 'The Golden Burger',
        imageUrl: burger,
        price: 12.00,
        tags: [
            { label: 'Juicy', color: 'bg-orange-500/80 text-white' },
            { label: 'Classic', color: 'bg-stone-600/80 text-white' },
            { label: 'Fast', color: 'bg-yellow-500 text-black' }
        ],
        address: '88 Patty Lane, Grillington'
    },
    {
        id: '4',
        name: 'Sunset Sushi Bar',
        imageUrl: sushi,
        price: 22.50,
        tags: [
            { label: 'Fresh', color: 'bg-green-500/80 text-white' },
            { label: 'Seafood', color: 'bg-cyan-700/80 text-white' },
            { label: 'Chill', color: 'bg-gray-500 text-white' }
        ],
        address: '12 Ocean Avenue, Seaside'
    },
    {
        id: '5',
        name: 'Urban Taco Stand',
        imageUrl: taco,
        price: 9.75,
        tags: [
            { label: 'Street Food', color: 'bg-yellow-600/80 text-black' },
            { label: 'Quick', color: 'bg-red-400/80 text-white' },
            { label: 'Casual', color: 'bg-blue-300 text-black' }
        ],
        address: '77 Fiesta Road, Downtown'
    },
    {
        id: '6',
        name: 'Green Leaf Vegan',
        imageUrl: vegan,
        price: 14.25,
        tags: [
            { label: 'Vegan', color: 'bg-emerald-600/80 text-white' },
            { label: 'Healthy', color: 'bg-lime-400/80 text-black' },
            { label: 'Eco', color: 'bg-teal-500 text-white' }
        ],
        address: '5 Plant Lane, Veggie Ville'
    },
    {
        id: '7',
        name: 'Midnight Pizza',
        imageUrl: pizza,
        price: 16.00,
        tags: [
            { label: 'Late Night', color: 'bg-indigo-700/80 text-white' },
            { label: 'Cheesy', color: 'bg-yellow-500/80 text-black' },
            { label: 'Family', color: 'bg-pink-400 text-white' }
        ],
        address: '101 Slice Street, Night City'
    },
    {
        id: '8',
        name: 'Baker\'s Dozen',
        imageUrl: bakery,
        price: 7.80,
        tags: [
            { label: 'Bakery', color: 'bg-orange-300/80 text-black' },
            { label: 'Sweet', color: 'bg-pink-200/80 text-black' },
            { label: 'Breakfast', color: 'bg-yellow-200 text-black' }
        ],
        address: '33 Crust Crescent, Breadtown'
    },
    {
        id: '9',
        name: 'Pho Real',
        imageUrl: noodle,
        price: 13.50,
        tags: [
            { label: 'Noodles', color: 'bg-yellow-700/80 text-white' },
            { label: 'Comfort', color: 'bg-orange-500/80 text-white' },
            { label: 'Asian', color: 'bg-red-300 text-black' }
        ],
        address: '9 Broth Boulevard, Little Saigon'
    },
    {
        id: '10',
        name: 'The Salad Spot',
        imageUrl: vegan,
        price: 11.20,
        tags: [
            { label: 'Salad', color: 'bg-green-400/80 text-black' },
            { label: 'Fresh', color: 'bg-teal-300/80 text-black' },
            { label: 'Lunch', color: 'bg-blue-200 text-black' }
        ],
        address: '21 Garden Path, Greensville'
    },
    {
        id: '11',
        name: 'ChocoLuxe',
        imageUrl: chocolate,
        price: 8.90,
        tags: [
            { label: 'Dessert', color: 'bg-brown-500/80 text-white' },
            { label: 'Luxury', color: 'bg-purple-800/80 text-white' },
            { label: 'Date Night', color: 'bg-pink-600 text-white' }
        ],
        address: '88 Cocoa Court, Sweet City'
    },
    {
        id: '12',
        name: 'Wok This Way',
        imageUrl: asian_food,
        price: 15.30,
        tags: [
            { label: 'Asian', color: 'bg-red-500/80 text-white' },
            { label: 'Quick', color: 'bg-yellow-400/80 text-black' },
            { label: 'Takeout', color: 'bg-gray-700 text-white' }
        ],
        address: '56 Stirfry Street, Chinatown'
    },
    {
        id: '13',
        name: 'The Brew House',
        imageUrl: beer,
        price: 5.60,
        tags: [
            { label: 'Craft Beer', color: 'bg-amber-700/80 text-white' }
        ]
    }

];
export default MOCK_SPOT