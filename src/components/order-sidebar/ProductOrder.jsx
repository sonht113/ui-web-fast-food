import {selectRemainingOrderProducts, selectRemainingUser} from "../../redux/selector"
import { HiOutlineEmojiSad } from "react-icons/hi";
import {useSelector, useDispatch} from "react-redux"
import {useEffect, useState} from "react";
import orderSlice from "./orderSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductOrder() {
    const [subTotalPrice, setSubTotalPrice] = useState(0)
    const dispatch = useDispatch()
    const user = useSelector(selectRemainingUser)
  const orderListProducts = useSelector(selectRemainingOrderProducts)
    useEffect(() => {
        setSubTotalPrice(() => {
            let total = 0
            for(let product of orderListProducts) {
                total += product.priceTotal
            }
            return total.toFixed(1)
        })
    }, [orderListProducts])

    const handlePurchase = () => {
        if(user === undefined) {
            return toast.warn('🤩⚠️ You must login !!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            dispatch(orderSlice.actions.purchaseOrderProduct())
            toast.success(' 🥰 Purchase successfully !!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

  return (
    <div className="Product-Order flex flex-col mt-10 px-3">
      <div className="List-Product-Order flex flex-col">
        {
            !orderListProducts.length
                ? <div className="flex flex-col items-center">
                    <h1 className="text-sm text-gray-400 text-center">You have not ordered any products yet</h1>
                    <HiOutlineEmojiSad className="text-4xl fill-amber-400 stroke-pink-600" />
                </div>
                : orderListProducts.map((orderProduct) => (
                      <div key={orderProduct.product.id} className="Product-Order__Item flex items-center justify-around my-3 py-2 border shadow-lg rounded-2xl">
                        <div className="Product-Order__Item-Image py-1 px-7 bg-yellow-200 rounded-xl">
                          <img
                              src={orderProduct.product.image}
                              alt="product-order"
                              className="object-cover"
                              style={{ width: "70px", height: "70px" }}
                          />
                        </div>
                        <div className="Product-Order__Item-Title">
                          <p className="Name mb-2 text-sm 2xl:text-lg">{orderProduct.product.name}</p>
                          <p className="Price text-gray-400 text-sm 2xl:text-lg">
                            $<span>{orderProduct.product.price}</span>
                          </p>
                        </div>
                        <div className="Product-Order__Item-Count">
                          <p className="Count">
                            x<span className="text-sm 2xl:text-lg">{orderProduct.counter}</span>
                          </p>
                        </div>
                        <div className="Product-Order__Item-Total">
                          <p className="Total-Price text-gray-400 text-sm 2xl:text-lg">
                            $<span>{orderProduct.priceTotal.toFixed(1)}</span>
                          </p>
                        </div>
                      </div>
          ))
        }
      </div>
      <div className="w-full bg-gray-400 mt-5" style={{ height: "1px" }}></div>
      <div className="Sub-Total flex items-center justify-between mt-5">
        <div className="Sub-Total__Title">
          <span className="text-gray-400 text-lg">Sub Total:</span>
        </div>
        <div className="Sub-Total__Price">
          <span className="text-lg">
            $ <span>{ subTotalPrice }</span>
          </span>
        </div>
      </div>
      <div className="Purchase flex justify-center mt-14">
          <div></div>
        <div>
            <button
                onClick={() => handlePurchase()}
                disabled={!orderListProducts.length}
                className="px-24 2xl:px-36 py-6 2xl:py-8 text-xl text-pink-600 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition rounded-2xl border border-pink-300 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 duration-500">
              Purchase
            </button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
      </div>
    </div>
  );
}

export default ProductOrder;
