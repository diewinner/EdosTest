
const defaultStateNavigate = {
    navigate: 'Учебные сессии',
}



const CURRENT_TAB = "CURRENT_TAB"

export const navigateReducer = (state = defaultStateNavigate, action) => {
    switch (action.type) {
        case CURRENT_TAB:
            return {...state, navigate: action.payload }
        default:
            return state
    }
}



export const addCustomerAction = (payload) => ({type:CURRENT_TAB, payload})
