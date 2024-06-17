// reducers/contactReducer.js
const initialState = {
    contacts: {
        0 : {id:0, name:"Coding Ninja", email:"codingninjas@codingninjas.com", phone:"98725161833"}
    },
    id: 1
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: {...state.contacts, [action.payload.id]: action.payload},
                id: state.id+1
            };
        case 'DELETE_CONTACT':
            const { [action.payload]: deletedContact, ...updatedContacts } = state.contacts;
            return {
                ...state,
                contacts: updatedContacts,
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: {...state.contacts, [action.payload.id]: action.payload},
            };
        case 'RESET_CONTACT':
            return {
                ...state,
                contacts: {},
            };
        default:
        return state;
    }
};

export default contactReducer;
