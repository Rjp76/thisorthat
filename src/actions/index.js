export function addTodo(message){
    return {
        type: 'ADD_TODO', //Action type. called by reducer
        message: message, //the item to do
        completed: false // is it done yet?
    };
}
export function completeTodo(index){
    return{
        type: 'COMPLETE_TODO',
        index:index
    };
}
export function deleteTodo(index){
    return{
        type: 'DELETE_TODO',
        index:index
    };
}
export function clearTodo(){
    return{
        type:'CLEAR_TODO'
    };
}
