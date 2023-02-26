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
            ]
        }
    },

    getState(){
        return this._state;
    },
    _callSubcriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id:5,
            message: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubcriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText
        this._callSubcriber(this._state);
    },
    subscribe (observer) {
        this._callSubcriber = observer;
    }
}

export default store;