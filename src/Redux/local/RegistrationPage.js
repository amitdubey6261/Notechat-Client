import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    registerDisplay: false
}
export const Register = createReducer(initialState, {

    toggleRegister: (state, action) => {
        if (state.registerDisplay == false) {
            state.registerDisplay = true;
        }
        else {
            state.registerDisplay = false;
        }
    }
})