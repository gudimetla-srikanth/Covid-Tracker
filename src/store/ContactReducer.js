const initialstate = []
export const ContactReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...state, action.payload
            ];
        case "DELETE_ITEM":
            return [
                ...state.filter((val) => action.payload.lastname !== val.lastname)
            ];
        case "EDIT_ITEM":
            return [...state.map((val) => {
                if (action.payload.firstname === val.firstname) {
                    val.firstname = action.payload.firstname;
                    val.lastname = action.payload.lastname;
                    val.status = action.payload.status;
                    return val;
                }
                return val;
            })];
        default:
            return state;
    }
}

