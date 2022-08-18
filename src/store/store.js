import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "./reducer/accountSlice";
import statusPackage from "./reducer/statusPackageSlice";
import statusDriverModeSlice from "./reducer/statusDriverMode";

export const store = configureStore({
    reducer: {
        account: accountSlice,
        statusPackage: statusPackage,
        statusDriverMode: statusDriverModeSlice
    },
});
