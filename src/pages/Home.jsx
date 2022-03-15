import Content from "../components/content/Content";
import OrderSidebar from "../components/order-sidebar/OrderSidebar"
import AnimatedPage from "../animation-page/AnimatedPage";

function Home() {
    return(
        <AnimatedPage>
            <div className="grid grid-cols-12 gap-10 min-h-screen">
                <div className="col-span-8">
                    <Content />
                </div>
                <div className="col-span-4">
                    <OrderSidebar />
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Home;