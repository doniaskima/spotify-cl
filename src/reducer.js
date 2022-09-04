export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVING AFTER DEVELOPING
    token:"BQCkbevnvNaJZ_SjMUP1CM45uTGm7alNveqgoXu3QIOyLczA8haeZQnE5-dvDL7BUJ21_1J7qYrJe3yHUy-5yvk4PInds2Uw5AouZvTri5VxTQ2Fk0w7bVMeKjyL1mX1_oufVdpsw9Bzy4W8KgqbLsRZwJkqniBp9FHxxk02Mfugalyz4p-nlMpck3HWj6yH5DXd9snXV_hvpFGdT-Zm"
}

const reducer = (state, action) => {
    console.log(action)
    //Action-> type ,[payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
                // update the user slice whatever the action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;