import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {
      id: "1",
      name: "Santosh",
      email: "santosh@email.com",
    },
    {
      id: "2",
      name: "Ankosh",
      email: "ankosh@email.com",
    },
  ];
export const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            
state.push(action.payload)        }
    }

})
export const {addUser}=userSlice.actions;
export default userSlice.reducer;