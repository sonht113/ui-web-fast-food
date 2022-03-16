import { combineReducers} from "redux";
import filtersReducer from "../components/content/filterSlice"

const rootReducer = combineReducers({
    filters: filtersReducer
})
export default rootReducer