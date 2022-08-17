import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "./reducer/accountSlice";
import statusPackage from "./reducer/statusPackageSlice";

export const store = configureStore({
    reducer: {
        account: accountSlice,
        statusPackage: statusPackage
    },
});
