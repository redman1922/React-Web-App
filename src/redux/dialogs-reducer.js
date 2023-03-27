
const SEND_MASSAGE = 'SEND_MASSAGE';


let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MASSAGE:{
            let body = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages,{id:6,message:body}]
            };
        }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) =>{
    return{
        type:'SEND_MASSAGE',
        newMessageBody:newMessageBody
    }
}

export default dialogsReducer;