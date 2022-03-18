import {HiOutlineEmojiSad, HiPencilAlt} from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "../../assets/css/CartModalOrder.css"

import Lottie from "lottie-react";
import shoppingCart from "../../lotties/shopping-cart.json"
import emptyCart from "../../lotties/empty-cart.json"
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectRemainingOrderProducts} from "../../redux/selector";
import orderSlice from "./orderSlice";

function HeaderOrderSidebar() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useDispatch()

    const listOrderProduct = useSelector(selectRemainingOrderProducts)

    const handleElcProduct = (index, product) => {
        let obj = Object.assign({}, product)
        obj.priceTotal += obj.product.price
        obj.counter ++
        dispatch(orderSlice.actions.updateOrderProduct({
            index,
            product: obj
        }))
    }
    const handleDelcProduct = (index, product) => {
        if(product.counter === 1) {
            return dispatch(orderSlice.actions.updateOrderProduct({index}))
        }
        let obj = Object.assign({}, product)
        obj.priceTotal -= obj.product.price
        obj.counter --
        dispatch(orderSlice.actions.updateOrderProduct({
            index,
            product: obj
        }))
    }

    return(
        <div className="flex items-center justify-between pt-5 pr-5" >
            <div className="Order-Title">
                <span className="text-4xl font-medium">Order <span className="font-extralight"> Menu</span></span>
            </div>
            <div className="Order-Icon p-3 shadow-lg cursor-pointer transition duration-300 ease-in-out hover:scale-125" onClick={() => setIsOpenModal(true)} >
                <HiPencilAlt className="text-xl fill-gray-500"/>
            </div>
            <div className={isOpenModal
                ? "fixed w-full h-[100%] top-0 left-0 z-[1000] flex items-start justify-center transition"
                : "fixed w-full h-[100%] top-0 left-0 z-[1000] flex items-start justify-center invisible opacity-0 scale-75 transition"}>
                <a className="w-full h-[100%] top-0 left-0 absolute bg-black opacity-60 z-[1] duration-100 transform delay-600" onClick={() => setIsOpenModal(false)}></a>
                <div className="modal relative max-w-[700px] w-full mt-10 bg-white z-[2] border-t-[6px] border-pink-600 transform delay-300 duration-500">
                    <div className="headerModal flex items-center justify-between pt-3 px-2">
                        <div className="modalTitle">
                            <h1 className="text-3xl font-medium text-pink-600">Cart</h1>
                        </div>
                        {/*Button close Modal*/}
                        <div className="modalClose group border p-1 hover:bg-red-500 duration-300" onClick={() => setIsOpenModal(false)}>
                            <AiOutlineClose className="text-3xl fill-black cursor-pointer group-hover:fill-white" />
                        </div>
                    </div>
                    <div className="animationModal flex justify-center">
                        <div></div>
                        <div>
                            <Lottie
                                className="w-[200px] duration-300"
                                animationData={!listOrderProduct.length ? emptyCart : shoppingCart}
                                loop={true}
                                autoplay={true}
                            />
                        </div>
                    </div>
                    <div className="listProductOrder px-10 pb-10 h-[400px] overflow-y-scroll">
                        {   !listOrderProduct.length
                            ? <div className="flex flex-col items-center">
                                <h1 className="text-sm text-gray-400 text-center">You have not ordered any products yet</h1>
                                <HiOutlineEmojiSad className="text-4xl fill-amber-400 stroke-pink-600" />
                            </div>
                            : listOrderProduct.map((orderProduct, index) => (
                                <div key={orderProduct.product.id} className="productOrderItem flex items-center gap-x-5 shadow-xl pl-7 mb-5">
                                    <div className="imageProductOrder w-[15%] h-[15%]">
                                        <img src={orderProduct.product.image} alt="imageProductOrder" className="w-full object-cover" />
                                    </div>
                                    <div className="titleProduct">
                                        <p className="">{orderProduct.product.name}</p>
                                        <p className="text-sm text-gray-400">$ <span>{orderProduct.product.price}</span></p>
                                    </div>
                                    <div className="countProductOrder w-1/4 flex justify-around">
                                        <button onClick={() => handleDelcProduct(index, orderProduct)} className="increaseCount">
                                            <span className="border py-2 px-3 shadow cursor-pointer text-lg font-extrabold hover:bg-gray-400 hover:text-white duration-300">-</span>
                                        </button>
                                        <div className="count">
                                            <span>{orderProduct.counter}</span>
                                        </div>
                                        <button onClick={() => handleElcProduct(index, orderProduct)} className="increaseCount">
                                            <span className="border py-2 px-3 shadow cursor-pointer text-lg font-extrabold hover:bg-gray-400 hover:text-white duration-300">+</span>
                                        </button>
                                    </div>
                                    <div onClick={() => dispatch(orderSlice.actions.updateOrderProduct({index}))} className="flex button-group">
                                        <div className="deleteProduct relative z-[2] group border px-3 py-3 cursor-pointer bg-white hover:bg-gray-400 duration-300">
                                            <AiOutlineClose className="text-lg group-hover:fill-white" />
                                        </div>
                                        <span className="bg-pink-600 relative z-[1] text-white text-sm py-3 px-1 opacity-0 cursor-pointer transform transition duration-300 -translate-x-3">Remove product</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderOrderSidebar;