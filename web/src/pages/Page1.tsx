import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Button} from "@material-ui/core";
import DataList from "../DataList";
import DataView from "../DataView";

class Page1 extends React.Component<RouteComponentProps> {

    render() {

        return (
            <div className="Page1">
                <h1>Welcome to Home Page #1</h1>
                <Button
                    variant="contained"
                    style={{color: 'green'}}
                    onClick={() => {
                        this.props.history.push('/');
                    }}
                >
                    Go To Home Page
                </Button>
                <p>Add Home Page Stuff Here</p>
                <Button
                    variant="contained"
                    style={{color: 'green'}}
                    onClick={() => {
                        this.props.history.push('/page2');
                    }}
                >
                    Go To Page #2
                </Button>
                <p>Add Home Page Stuff Here</p>
                    <DataView/>
                    <DataList/>
            </div>
        );
    }
}

export default Page1;
