import {AppContext} from "./Context";
import {Types} from "./Reducers";
import React from "react";

const DataView = () => {
    const { state, dispatch } = React.useContext(AppContext);

    return (
        <div>
            <button
                onClick={() => {
                    dispatch({
                        type: Types.Add
                    });
                }}
            >
                click
            </button>
            {state.dataView}
        </div>
    );
};

export default DataView;
