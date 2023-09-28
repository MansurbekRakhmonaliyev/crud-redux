import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
    name:'crud',
    initialState:{
        users:[
            {
              id: 1,
              name: "Foydalanuvchi 1",
              email: "foydalanuvchi1@gmail.com"
            },
            {
              id: 2,
              name: "Foydalanuvchi 2",
              email: "foydalanuvchi2@gmail.com"
            },
            {
              id: 3,
              name: "Foydalanuvchi 3",
              email: "foydalanuvchi3@gmail.com"
            },
            {
              id: 4,
              name: "Foydalanuvchi 4",
              email: "foydalanuvchi4@gmail.com"
            },
            {
              id: 5,
              name: "Foydalanuvchi 5",
              email: "foydalanuvchi5@gmail.com"
            }
          ]},
          reducers:{
            create:(state, {payload})=>{
              state.users.push(payload)
            },
            deleted:(state, {payload})=>{
              const arr = []
              state.users.forEach((item, idx)=>{
                if(idx != payload){
                  arr.push(item)
                }
              })
              state.users = arr
            },
            update:(state, {payload})=>{
              const {name, email, index} = payload
              state.users[index].name = name
              state.users[index].email = email
            }
          }
    
})

export const {create, deleted, update} = crudSlice.actions
export default crudSlice.reducer