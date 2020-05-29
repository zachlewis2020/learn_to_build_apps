import React, { createContext, useReducer, Dispatch } from "react";
import {
    dataReducer,
    dataViewReducer,
    DataActions,
    DataViewActions
} from "./Reducers";

type DataType = {
    id: number;
    data: string;
};

type InitialStateType = {
    data: DataType[];
    dataView: number;
};

const initialState = {
    data: [],
    dataView: 0
};

const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<DataActions | DataViewActions>;
}>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (
    { data, dataView }: InitialStateType,
    action: DataActions | DataViewActions
) => ({
    data: dataReducer(data, action),
    dataView: dataViewReducer(dataView, action)
});

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
    {children}
    </AppContext.Provider>
);
};

export { AppProvider, AppContext };
