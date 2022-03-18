import { v4 as uuidv4} from "uuid"
const categories = ['Hot', 'Burger', 'Pizza', 'Sort Drink', 'Coffee', 'Ice Cream', 'Hotdog']

const names = [
    'Tree Burger',
    'Cheese Burger',
    'Double Cheese',
    'Origin Burger',
    'Coca-cola',
    'Milk-Coffee',
    'Cheese Hotdog',
    'Double Hotdog',
    'ice-cream banana',
    'ice-cream kiwi',
    'Tree Hotdog',
    'Pepsi', '7 Up',
    'Coffee-Tea',
    'Coffee-not-sugar',
    'Tree Pizza',
    'Double Pizza',
    'Cheese Pizza',
    'Cheese-Coffee'
]

const prices = [12.00, 13.45, 23.67, 12.45, 15.00, 15.23, 21.22, 14.56, 11.46, 10.34, 16.78, 10.56, 43.89, 16.23];

const images = [
    "/images/burger2.png",
    "/images/burger.png",
    "/images/coca.png",
    "/images/coffee1.png",
    "/images/hotdog.png",
    "/images/pepsi.png",
    "/images/pizza.png",
    "images/pizza2.png"
]



function randomProduct(count) {
    const PRODUCTS = []
    // eslint-disable-next-line no-unused-vars
    for(let i = 0; i < count; i++) {
        let product = {
            id: uuidv4(),
            category: categories[randomIndex(categories.length)],
            name: names[randomIndex(names.length)],
            price: prices[randomIndex(prices.length)],
            image: images[randomIndex(images.length)],
            new: randomIndex(3) === 1
        }
        PRODUCTS.push(product)
    }
    return PRODUCTS
}

const randomIndex = (max) => {
    return Math.floor(Math.random() * (max - 1));
}

export default randomProduct