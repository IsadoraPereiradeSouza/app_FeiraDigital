export const InitialState = {
    avatar: '',
    favorites: [],
    appointments: []
};


export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        break;
        default:
            return state;
    }
}