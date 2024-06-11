// // redux/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   isAuthenticated: false,
//   role: null, // Add role property
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login(state, action) {
//       state.user = action.payload.user;
//       state.isAuthenticated = true;
//       state.role = action.payload.role; // Update user's role
//     },
//     logout(state) {
//       state.user = null;
//       state.isAuthenticated = false;
//       state.role = null; // Clear user's role
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
