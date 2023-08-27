  import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { axiosClient } from '../../utils/axiosClient';


export const getmyinfo  = createAsyncThunk('user/getmyinfo' , async () =>{
    try {
      
       
        const response = await axiosClient.get('/user/getmyinfo'); 
                 
     return response.result;   

    } catch (error) {
        return Promise.reject(error); 
    }
   
}); 


export const updateMyProfile = createAsyncThunk(
    "user/updateMyProfile",
    async (body) => {
        try {
            const response = await axiosClient.put("/user/", body);
            return response.result;
        } catch (error) {
            return Promise.reject(error);
        } 
    }
);
  
const appconfigSlice = createSlice({ 

    name:'appconfigSlice', 
    initialState:{
        isLoading:false, 
        myprofile:null, 
        toast:{}, 
    },
    reducers:{
    setLoading:(state , action)=>{
        state.isLoading = action.payload; 
        },
        showToast:(state, action) => {
            state.toast = action.payload; 
        }
    },     

    extraReducers:(builder)=>{      
     builder.addCase(getmyinfo.fulfilled , (state , action)=>{
       
          state.myprofile = action.payload.user
        })
        .addCase(updateMyProfile.fulfilled, (state, action) => {
            state.myprofile = action.payload.user;
        });
    }, 

}); 


export default appconfigSlice.reducer; 
export const {setLoading , showToast} = appconfigSlice.actions; 
