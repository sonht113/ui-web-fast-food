import HeaderOrderSidebar from "./HeaderOrderSidebar"
import ProductOrder from "./ProductOrder"

function OrderSidebar() {
    return (
        <div className="Order-Sidebar">
            <HeaderOrderSidebar />
            <ProductOrder />
        </div>
    )
}
export default OrderSidebar;