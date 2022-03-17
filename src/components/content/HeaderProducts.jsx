import {useDispatch} from "react-redux";
import filterSlice from "./filterSlice";
import {useState} from "react";


function HeaderProducts() {
  const [check, setCheck] = useState('All')

  const dispatch = useDispatch()

  const handleCheckFilter = (e) => {
    setCheck(e.target.value)
    dispatch(filterSlice.actions.selectFilter(e.target.value))
  }

  return (
    <div className="HeaderProducts flex justify-between items-center mt-10">
      <div className="TitleContent">
        <span className="text-2xl font-medium">
          Choose
          <span className="text-2xl font-extralight"> Order</span>
        </span>
      </div>
      <div className="Choose-Product flex items-center relative w-48">
        <div className="Choose-title w-48">
          <span className="text-lg">Sort By</span>
        </div>
        <select value={check} onChange={handleCheckFilter} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="All"> All </option>
          <option value="New">New</option>
          <option value="Popular">Popular</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeaderProducts;
