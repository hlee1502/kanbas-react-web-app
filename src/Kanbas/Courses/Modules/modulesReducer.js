import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    modules: db.modules,
    module: { name: "New Module 123", description: "New Description" },
};

const moduleSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModules: (state, action) => {
            state.modules = [
                {...action.payload, _id: new Date().getTime().toString() }, ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.paylaod
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return action.payload
                } else {
                    return module;
                }
            });
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});

export const { addModule, deleteModule, updateModule, setModule } = moduleSlice.actions;
export default moduleSlice.reducer;