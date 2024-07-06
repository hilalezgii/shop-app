import { combineReducers } from 'redux';
import AsyncStorage from "@react-native-async-storage/async-storage";


const initialState = {
    user: null,
    isAuthLoading: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            const { user } = action.payload;
            user ?
                AsyncStorage.setItem('@USER', JSON.stringify(user)) :
                AsyncStorage.removeItem('@USER');
            return { ...state, user };
            case 'REMOVE_USER':
                AsyncStorage.removeItem('@USER');
                return { ...state, user:null};



        default:
            return state;
    }
};

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
