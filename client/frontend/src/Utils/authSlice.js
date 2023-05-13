// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     email: "",
//     username: "",
//     password: "",
// };

// const authSlice = createSlice({
//     name: "auth",
//     initialState, 
//     reducers: {
//         setEmail: (state, action) => {
//             state.email = action.payload;
//         },
//         setUsername: (state, action) => {
//             state.username = action.payload;
//         },
//         setPassword: (state, action) => {
//             state.password = action.payload;
//         },
//         clearForm: (state) => {
//             state.email = "";
//             state.username = "";
//             state.password = "";
//         },
//     },
// });

// export const signupUser = (email, username, password) => async (dispatch) => {
//     try {
//       const response = await axios.post('http://localhost:8080/auth/login', {
//           email: 
//           userName: username,
//           password: password
//       });
//       console.log(response.data)
//       dispatch(loginSuccess(response.data));
//     } catch (error) {
//       dispatch(error(error));
//     }
//   };

// export const { setEmail, setUsername, setPassword, clearForm} = authSlice.actions;

// export default authSlice.reducer;