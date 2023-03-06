const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
    ],
    newMessageBody:""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY: {
          return   {
                ...state,
                newMessageBody:action.body
            };
        }
        case SEND_MASSAGE:{
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody : '',
                messages:[...state.messages,{id:6,message:body}]
            };
        }
        default:
            return state;
    }

}

export const sendMessageCreator = () =>{
    return{
        type:'SEND_MASSAGE'
    }
}

export const updateNewMessageBodyCreator = (body) =>{
    return{
        type:'UPDATE_NEW_MESSAGE_BODY',
        body: body
    }
}

export default dialogsReducer;