import { createSlice } from "@reduxjs/toolkit";
const initialState = [
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
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  
  editUser: (state, action) => {
    const { id, name, email } = action.payload;
    const existingUser = state.find((user) => user.id === id);
    if (existingUser) {
      existingUser.name = name;
      existingUser.email = email;
    }
  },
  deleteuser:(state,action)=>{
    const {id}=action.payload;
    const existingUser=state.find(user=>user.id!==id);
    if(existingUser){
return state.filter(user=>user.id!==id);
    }
  }
},
});
export const { addUser, editUser,deleteuser } = userSlice.actions;
export default userSlice.reducer;
