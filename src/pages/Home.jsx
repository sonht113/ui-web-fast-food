import Content from "../components/content/Content";
import OrderSidebar from "../components/order-sidebar/OrderSidebar"

function Home() {
    return(
        <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
                <Content />
            </div>
            <div className="col-span-4">
                <OrderSidebar />
            </div>
        </div>
    )
}

export default Home;