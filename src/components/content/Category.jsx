import { AiOutlineFire, AiOutlineCoffee } from "react-icons/ai";
import { FaHamburger, FaPizzaSlice, FaIceCream, FaHotdog } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";

const categories = [
    {icon: AiOutlineFire, title: 'Hot'},
    {icon: FaHamburger, title: 'Burger'},
    {icon: FaPizzaSlice, title: 'Pizza'},
    {icon: BiDrink, title: 'Sort Drink'},
    {icon: AiOutlineCoffee, title: 'Coffee'},
    {icon: FaIceCream, title: 'Ice Cream'},
    {icon: FaHotdog, title: 'Hotdog'},
]
function Category() {
    return(
        <div className="Category grid grid-cols-7 gap-x-3 2xl:gap-x-14 mt-10 justify-center">
            {
                categories.map((category, index) => (
                    <div key={index} className="Category-Item group flex flex-col items-center rounded-2xl shadow-lg cursor-pointer hover:bg-yellow-400 duration-500">
                        <div className="Category-Icon p-6 mt-2 rounded-2xl bg-white border">
                            { category.icon({className: "text-4xl fill-gray-400 group-hover:fill-black"}) }
                        </div>
                        <div className="Category-Title my-5">
                            <span className="text-gray-400 font-medium group-hover:text-black">{category.title}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Category;