import React from "react";
import { AppContext } from "./Context";
import { Types } from "./Reducers";

const DataList = () => {
    const [form, setForm] = React.useState({
        data: "",
    });
    const { state ,dispatch } = React.useContext(AppContext);

    const handleForm = (type: string, value: string) => {
        setForm(form => ({
            ...form,
            [type]: value
        }));
    };

    const createData = () => {
        dispatch({
            type: Types.Create,
            payload: {
                id: Math.round(Math.random() * 10000),
                data: form.data,
            }
        });
    };

    const deleteData = (id: number) => {
        dispatch({
            type: Types.Delete,
            payload: {
                id,
            }
        })
    }

    return (
        <div>
            <input
                value={form.data}
                onChange={e => {
                    handleForm("data", e.target.value);
                }}
                placeholder="Name"
            />
            <button onClick={createData}>create</button>
            <div style={{ marginTop: 20 }}>
                {state.data.map(c => (
                    <div>
                        <span>{c.data}</span>
                        <button onClick={() => deleteData(c.id)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataList;
