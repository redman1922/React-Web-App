import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: 15},
                {id: 2, message: 'It\'s my first post', like: 20},
                {id: 3, message: 'It\'s my first post', like: 25}
            ],
            newPostText:'Denis Davidov'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Welcome'},
                {id: 4, message: 'Nobody'}
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Viktor'},
                {id: 3, name: 'Denis'},
                {id: 4, name: 'Aleksandr'},
                {id: 5, name: 'Nasty'},
                {id: 6, name: 'Viktoria'}
            ],
            newMessageBody:""
        },
        sidebar:{}
    },
    getState(){
        return this._state;
    },
    _callSubcriber() {
    },
    subscribe (observer) {
        this._callSubcriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubcriber(this._state)
    },

}

export default store;