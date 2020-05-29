type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        }
};

export enum Types {
    Create = "CREATE_DATA",
    Delete = "DELETE_DATA",
    Add = "ADD_DATA"
}

// Data

type DataType = {
    id: number;
    data: string;
};

type DataPayload = {
    [Types.Create]: {
        id: number;
        data: string;
    };
    [Types.Delete]: {
        id: number;
    };
};

export type DataActions = ActionMap<DataPayload>[keyof ActionMap<
    DataPayload
    >];

export const dataReducer = (
    state: DataType[],
    action: DataActions | DataViewActions
) => {
    switch (action.type) {
        case Types.Create:
            return [
                ...state,
                {
                    id: action.payload.id,
                    data: action.payload.data,
                }
            ];
        case Types.Delete:
            return [...state.filter(product => product.id !== action.payload.id)];
        default:
            return state;
    }
};

// ShoppingCart

type DataViewPayload = {
    [Types.Add]: undefined;
};

export type DataViewActions = ActionMap<
    DataViewPayload
    >[keyof ActionMap<DataViewPayload>];

export const dataViewReducer = (
    state: number,
    action: DataActions | DataViewActions
) => {
    switch (action.type) {
        case Types.Add:
            return state + 1;
        default:
            return state;
    }
};
