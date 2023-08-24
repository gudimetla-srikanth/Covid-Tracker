const currentval=[{
    first:"srikanth"
}]

export const CurrentReducer=(state=currentval,action)=>{
    if(action.type ==="CURRENT_ITEM"){
        return [action.payload];
    }
    if(action.type === "REMOVE_ITEM"){
        return []
    }
    return state;
}