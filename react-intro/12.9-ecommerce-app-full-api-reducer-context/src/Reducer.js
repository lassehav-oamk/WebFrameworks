export const initialState = {
  items: [],
  productSearchString: "",
  adminModeActive: false,
  isLoading: true,
  isProcessingAdminOperation: false
}

const reducer = (state, action) => {
  switch (action.type) {

    case "UPDATE_ITEMS":
      return {...state, items: action.payload, isLoading: false};

    case "UPDATE_SEARCH_FILTER":
      return {...state, productSearchFilter: action.payload};

    case "TOGGLE_ADMIN_MODE":
      return {...state, adminModeActive: !state.adminModeActive};

    case "DELETE_ITEM":
      return {...state, items: state.items.filter(item => item.id !== action.payload)};

    default:
      throw new Error("Invalid action");
  }
}

export default reducer;