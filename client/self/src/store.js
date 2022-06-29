import {configureStore} from "@reduxjs/toolkit"
import numberslice from "./reducer/numberslice";

export const store = configureStore({
    reducer : {
       counter :  numberslice
    }
});

