import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "./reducer/accountSlice";

export const store = configureStore({
    reducer: {
        account: accountSlice
    },
});
