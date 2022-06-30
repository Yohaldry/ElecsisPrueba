import axios from "axios"
//CONSTANTES

const dataInicial = {
    array: []
}

//Types


const GET_ApiUsers = 'GET_ApiUsers'

//REDUCERS

export default function APIreducer(state = dataInicial, action){
        switch(action.type){
             case GET_ApiUsers:
                return {...state, array: action.payload}
                default:
                    return state
        }
}

//ACTIONS

export const Get_users_Acction = () => async(dispatch, getState) => {
        try {
            const res = await axios.get('https://gorest.co.in/public/v2/users')
            dispatch({
                type: GET_ApiUsers,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
}