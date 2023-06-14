import { configureStore } from "@reduxjs/toolkit"
import auth from "../Utils/auth";
import offer from "./offer";
import filter from "./filter"
// import offers from "../Utils/offer.js"



const store = configureStore({
    reducer: {  //may have to add .reducer
        auth: auth,
        offers: offer,
        filter: filter
    },
  });
  
  export default store;
