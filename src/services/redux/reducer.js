import { useReducer } from "react";

const initialState = {
    listidact:'',//Indica el id de la lista actual seleccionada donde insertaremos una nueva task.
    visibility: 'ALL',
    listas:[
        {
            titulo: 'Lista demo 1',
            id: 1,
            tareas:[
                {
                    titulo: 'Tarea demo 1_1',
                    descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    id: 1,
                },
                {
                    titulo: 'Tarea demo 1_2',
                    descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    id: 2,
                },
            ]
        },
        {
            titulo: 'Lista demo 2',
            id: 2,
            tareas:[
                {
                    titulo: 'Tarea demo 2_1',
                    descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    id: 1,
                }
            ]
        },
    ], 
};

function reducer (state=initialState, action){
    console.log('reducer.action:', action);
    switch (action.type){
        case 'ACT_LISTID':
            return{
                ...state,
                listidact:action.payload,
            }; 
        case 'ADD_NEWLIST':
            return{
                ...state,
                listas:[
                    ...state.listas,
                    {
                      titulo: action.payload,
                      //id: action.id 
                      tareas:[
                        //...state.listas.tareas,
                        // {
                        //   titulo:'Tarea demo',
                        // }
                      ],  
                    },  
                ],  
            };
        case 'ADD_NEWTASK':
            return{
                ...state,
                listas:state.listas.map(
                    (lista)=>{
                        if(lista.id===action.payload3){
                            lista.tareas =[
                                ...lista.tareas,
                                {
                                    titulo: action.payload,
                                    descripcion:action.payload2,
                                    id: 1,  
                                }
                            ]
                        }
                        return lista
                    }
                ),                    
            };
        case 'DELETE_TASK':
            return{

            }
        
        case 'DELETE_LIST':
            return{
               ...state,
                listas: [state.listas.filter(
                 dlista=>dlista.id !== action.payload
                )],
                //...state,
            }
        default: return state;    
    }
}

export default reducer;

