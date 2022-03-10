import { HiPencilAlt } from "react-icons/hi";

function HeaderOrderSidebar() {
    return(
        <div className="flex items-center justify-between pt-5 pr-5">
            <div className="Order-Title">
                <span className="text-4xl font-medium">Order <span className="font-extralight"> Menu</span></span>
            </div>
            <div className="Order-Icon p-3 shadow-lg cursor-pointer transition duration-300 ease-in-out hover:scale-125">
                <HiPencilAlt className="text-xl fill-gray-500"/>
            </div>
        </div>
    )
}

export default HeaderOrderSidebar;