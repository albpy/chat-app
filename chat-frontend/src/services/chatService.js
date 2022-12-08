import API from './api'


const ChatService = {

    fetchChats: () => {
        return API.get('/chats')
            .then(({ data }) => {

                return data
            })
            .catch(err => {
                 if(err.data){
                 console.log("Data :", err.data.data);//status code out of the range of 2xx
                 }
                 else if (err.request){
                 console.log("this is err", err.response.status);//request was made but no response was received
                 console.log("this is err", err.response.data) 
                 }
                 else{
                 console.log('Auth service err', err);} //error on setting up the requst
                //throw err
            })
    }
}
export default ChatService