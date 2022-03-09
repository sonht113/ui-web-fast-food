import { AiOutlineFire, AiOutlineCoffee } from "react-icons/ai";
import { FaHamburger, FaPizzaSlice, FaIceCream, FaHotdog } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";

function Category() {
    return(
        <div className="Category grid grid-cols-7 gap-x-14 mt-10 justify-center">
            <div className="Category-Item group flex flex-col items-center rounded-2xl shadow-lg cursor-pointer hover:bg-yellow-400 duration-500">
                <div className="Category-Icon p-6 mt-2 rounded-2xl bg-white border">
                  <AiOutlineFire className="text-4xl fill-gray-400 group-hover:fill-black"/>      
                </div>
                <div className="Category-Title my-5">
                    <span className="text-gray-400 font-medium group-hover:text-black">Hot</span>    
                </div>
            </div>
            <div className="Category-Item group flex flex-col items-center rounded-2xl shadow-lg cursor-pointer hover:bg-yellow-400 duration-500">
                <div className="Category-Icon p-6 mt-2 rounded-2xl bg-white border">
                  <FaHamburger className="text-4xl fill-gray-400 group-hover:fill-black"/>      
                </div>
                <div className="Category-Title my-5">
                    <span className="text-gray-400 font-medium group-hover:text-black">Burger</span>    
                </div>
            </div>
            <div className="Category-Item group flex flex-col items-center rounded-2xl shadow-lg cursor-pointer hover:bg-yellow-400 duration-500">
                <div className="Category-Icon p-6 mt-2 rounded-2xl bg-white border">
                  <FaPizzaSlice className="text-4xl fill-gray-400 group-hover:fill-black"/>      
                </div>
                <div className="Category-Title my-5">
                    <span className="text-gray-400 font-medium group-hover:text-black">Pizza</span>    
                </div>
            </div>
            <div className="Category-Item group flex flex-col items-center rounded-2xl shadow-lg cursor-pointer hover:bg-yellow-400 duration-500">
                <div className="Category-Icon p-6 mt-2 rounded-2xl bg-white border">
                  <BiDrink className="text-4xl fill-gray-400 group-hover:fill-black"/>      
                </div>
                <div className="Category-Title my-5">
                    <span className="text-gray-400 font-medium group-hover:text-black">Sort Drink</span>    
                </div>
            </div>
            <div className="Category-Item group flex flex-col items-center rounded-2xl shadow-lg cursor-pointer hover:bg-yellow-400 duration-500">
                <div className="Category-Icon p-6 mt-2 rounded-2xl bg-white border">
                  <AiOutlineCoffee className="text-4xl fill-gray-400 group-hover:fill-black"/>      
                </div>
                <div className="Category-Title my-5">
                    <span className="text-gray-400 font-medium group-hover:text-black">Coffee</span>    
                </div>
            </div>
            <div className="Category-Item group flex flex-col items-center rounded-2xl shadow-lg cursor-pointer hover:bg-yellow-400 duration-500">
                <div className="Category-Icon p-6 mt-2 rounded-2xl bg-white border">
                  <FaIceCream className="text-4xl fill-gray-400 group-hover:fill-black"/>      
                </div>
                <div className="Category-Title my-5">
                    <span className="text-gray-400 font-medium group-hover:text-black">Ice Cream</span>    
                </div>
            </div>
            <div className="Category-Item group flex flex-col items-center rounded-2xl shadow-lg cursor-pointer hover:bg-yellow-400 duration-500">
                <div className="Category-Icon p-6 mt-2 rounded-2xl bg-white border">
                  <FaHotdog className="text-4xl fill-gray-400 group-hover:fill-black"/>      
                </div>
                <div className="Category-Title my-5">
                    <span className="text-gray-400 font-medium group-hover:text-black">Hotdog</span>    
                </div>
            </div>
        </div>
    );
}

export default Category;