import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions/actions';
import { initialState } from '../context/product_context';
type ProductState = typeof initialState;
const products_reducer = (state: ProductState, action: any) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
