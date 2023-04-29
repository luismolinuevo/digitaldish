import { configureStore } from "@reduxjs/toolkit"
import auth from "../Utils/auth";


const store = configureStore({
    reducer: {  //may have to add .reducer
        auth: auth
    },
  });
  
  export default store;