import burger from "../../assets/images/burger2.png";

import { useState } from 'react';
function ProductOrder() {

    const [count, setCount] = useState(1)

  return (
    <div className="Product-Order flex flex-col mt-10 px-3">
      <div className="List-Product-Order flex flex-col">
        <div className="Product-Order__Item flex items-center justify-around my-3 py-2 shadow-lg rounded-2xl">
          <div className="Product-Order__Item-Image py-1 px-7 bg-yellow-200 rounded-xl">
            <img
              src={burger}
              alt="product-order"
              className="object-cover"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
          <div className="Product-Order__Item-Title">
            <p className="Name mb-2">Cheese Burger</p>
            <p className="Price text-gray-400">
              $<span>5.48</span>
            </p>
          </div>
          <div className="Product-Order__Item-Count">
            <p className="Count">
              x<span>{count}</span>
            </p>
          </div>
          <div className="Product-Order__Item-Total">
            <p className="Total-Price text-gray-400">
              $<span>10.96</span>
            </p>
          </div>
        </div>
        <div className="Product-Order__Item flex items-center justify-around my-3 py-2 shadow-lg rounded-2xl">
          <div className="Product-Order__Item-Image py-1 px-7 bg-yellow-200 rounded-xl">
            <img
              src={burger}
              alt="product-order"
              className="object-cover"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
          <div className="Product-Order__Item-Title">
            <p className="Name mb-2">Cheese Burger</p>
            <p className="Price text-gray-400">
              $<span>5.48</span>
            </p>
          </div>
          <div className="Product-Order__Item-Count">
            <p className="Count">
              x<span>{count}</span>
            </p>
          </div>
          <div className="Product-Order__Item-Total">
            <p className="Total-Price text-gray-400">
              $<span>10.96</span>
            </p>
          </div>
        </div>
        <div className="Product-Order__Item flex items-center justify-around my-3 py-2 shadow-lg rounded-2xl">
          <div className="Product-Order__Item-Image py-1 px-7 bg-yellow-200 rounded-xl">
            <img
              src={burger}
              alt="product-order"
              className="object-cover"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
          <div className="Product-Order__Item-Title">
            <p className="Name mb-2">Cheese Burger</p>
            <p className="Price text-gray-400">
              $<span>5.48</span>
            </p>
          </div>
          <div className="Product-Order__Item-Count">
            <p className="Count">
              x<span>{count}</span>
            </p>
          </div>
          <div className="Product-Order__Item-Total">
            <p className="Total-Price text-gray-400">
              $<span>10.96</span>
            </p>
          </div>
        </div>
        <div className="Product-Order__Item flex items-center justify-around my-3 py-2 shadow-lg rounded-2xl">
          <div className="Product-Order__Item-Image py-1 px-7 bg-yellow-200 rounded-xl">
            <img
              src={burger}
              alt="product-order"
              className="object-cover"
              style={{ width: "70px", height: "70px" }}
            />
          </div>
          <div className="Product-Order__Item-Title">
            <p className="Name mb-2">Cheese Burger</p>
            <p className="Price text-gray-400">
              $<span>5.48</span>
            </p>
          </div>
          <div className="Product-Order__Item-Count">
            <p className="Count">
              x<span>{count}</span>
            </p>
          </div>
          <div className="Product-Order__Item-Total">
            <p className="Total-Price text-gray-400">
              $<span>10.96</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-400 mt-5" style={{ height: "1px" }}></div>
      <div className="Sub-Total flex items-center justify-between mt-5">
        <div className="Sub-Total__Title">
          <span className="text-gray-400 text-lg">Sub Total:</span>
        </div>
        <div className="Sub-Total__Price">
          <span className="text-lg">
            $ <span>30.34</span>
          </span>
        </div>
      </div>
      <div className="Purchase flex justify-center mt-14">
          <div></div>
        <div>
        <button className="px-36 py-8 text-xl text-pink-600 font-semibold rounded-2xl border border-pink-300 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 duration-500">
          Purchase
        </button>
        </div>
      </div>
    </div>
  );
}

export default ProductOrder;
