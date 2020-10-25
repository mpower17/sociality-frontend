import React from "react";
import loader from "../../../assets/images/loader.svg";

export class Preloader extends React.Component {
    render() {
        return (
            <img alt='loader' src={loader}/>
        )
    }
}
