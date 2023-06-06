import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
    error: null,
    userInfo: 0,
    userName: null
  },
  reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            localStorage.setItem('token', action.payload.token);
        },
        error: (state, action) => {
          state.error = action.payload;
        },
        user: (state, action) => {
          state.userInfo = action.payload;
          state.isLoggedIn = true
        },
        setUserName: (state, action) => {
          state.userName = action.payload
        }
        
  },
});

export const { loginSuccess, user, setUserName } = slice.actions;

// Thunk action to log in a user
export const loginUser = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/login', {
        userName: username,
        password: password
    });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(error(error));
  }
};

//Thunk action to check if a user is logged in
export const checkLoginStatus = () => async dispatch => {
  // console.log("In")
  try {
    const token = localStorage.getItem("token");
        const getUser = await axios.get(
          "http://localhost:8080/auth/",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          }
        );
        console.log(getUser.data)
    dispatch(user(getUser.data.data.id));
    dispatch(setUserName(getUser.data.data.userName))
    // console.log(getUser.data.id)
  } catch (error) {
    console.log(error);
  }
};

export const signupUser = (email, username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/signup', {
        email: email,
        userName: username,
        password: password
    });
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
};
export default slice.reducer;