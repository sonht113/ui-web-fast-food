import HeaderProducts from "./HeaderProducts";
import burger from '../../assets/images/burger2.png';


function Products() {
    return(
        <div className="Products">
            <HeaderProducts/>
            <div className="List-Products grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-16 gap-y-16 md:gap-x-5 px-10 mt-14">
                <div className="flex flex-col items-center shadow-lg cursor-pointer py-5 rounded-lg transition group ease-in-out delay-150 hover:scale-110 duration-300">
                    <div className="Product-image p-3 bg-yellow-200 rounded-full">
                        <img src={burger} alt="burger" className="w-full object-cover group-hover:scale-100 " style={{width: "100px", height: "100px"}}/>
                    </div>    
                    <div className="Product-Content text-center mt-5">
                        <h2 className="text-lg">Tripple Burger</h2> 
                        <p className="text-gray-500">$<span>5.48</span></p>
                    </div>
                </div>
                <div className="flex flex-col items-center shadow-lg cursor-pointer py-5 rounded-lg transition group ease-in-out delay-150 hover:scale-110 duration-300">
                    <div className="Product-image p-3 bg-yellow-200 rounded-full">
                        <img src={burger} alt="burger" className="w-full object-cover group-hover:scale-100 " style={{width: "100px", height: "100px"}}/>
                    </div>    
                    <div className="Product-Content text-center mt-5">
                        <h2 className="text-lg">Tripple Burger</h2> 
                        <p className="text-gray-500">$<span>5.48</span></p>
                    </div>
                </div>
                <div className="flex flex-col items-center shadow-lg cursor-pointer py-5 rounded-lg transition group ease-in-out delay-150 hover:scale-110 duration-300">
                    <div className="Product-image p-3 bg-yellow-200 rounded-full">
                        <img src={burger} alt="burger" className="w-full object-cover group-hover:scale-100 " style={{width: "100px", height: "100px"}}/>
                    </div>    
                    <div className="Product-Content text-center mt-5">
                        <h2 className="text-lg">Tripple Burger</h2> 
                        <p className="text-gray-500">$<span>5.48</span></p>
                    </div>
                </div>
                <div className="flex flex-col items-center shadow-lg cursor-pointer py-5 rounded-lg transition group ease-in-out delay-150 hover:scale-110 duration-300">
                    <div className="Product-image p-3 bg-yellow-200 rounded-full">
                        <img src={burger} alt="burger" className="w-full object-cover group-hover:scale-100 " style={{width: "100px", height: "100px"}}/>
                    </div>    
                    <div className="Product-Content text-center mt-5">
                        <h2 className="text-lg">Tripple Burger</h2> 
                        <p className="text-gray-500">$<span>5.48</span></p>
                    </div>
                </div>
                <div className="flex flex-col items-center shadow-lg cursor-pointer py-5 rounded-lg transition group ease-in-out delay-150 hover:scale-110 duration-300">
                    <div className="Product-image p-3 bg-yellow-200 rounded-full">
                        <img src={burger} alt="burger" className="w-full object-cover group-hover:scale-100 " style={{width: "100px", height: "100px"}}/>
                    </div>    
                    <div className="Product-Content text-center mt-5">
                        <h2 className="text-lg">Tripple Burger</h2> 
                        <p className="text-gray-500">$<span>5.48</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products