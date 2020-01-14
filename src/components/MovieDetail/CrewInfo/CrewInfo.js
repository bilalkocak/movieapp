import React, {Component} from 'react';
import PropTypes from "prop-types";

import './CrewInfo.sass';

class CrewInfo extends Component {
    render() {
        const {writers, actors, directors} = this.props;
        return (
            <>
                {writers && actors && directors && <div className={"movieCrew"}>
                    <div>
                        <div className={"crewTitle"}>Director:</div>
                        <div className={"crewName"}>{directors.map((item, index) => {
                            return <span key={index}><a
                                href="">{item}</a>{directors.length - 1 !== index && ", "}</span>
                        })}</div>
                    </div>
                    <div>
                        <div className={"crewTitle"}>Writers:</div>
                        <div className={"crewName"}>{writers.map((item, index) => {
                            return <span key={index}><a href="">{item}</a>{writers.length - 1 !== index && ", "}</span>
                        })}</div>
                    </div>
                    <div>
                        <div className={"crewTitle"}>Stars:</div>
                        <div className={"crewName"}>{actors.map((item, index) => {
                            return <span key={index}>
                            <a href="">{item}</a>{actors.length - 1 !== index && ", "} </span>
                        })}</div>
                    </div>
                </div>}
            </>
        );
    }
}

CrewInfo.propTypes = {
    actors: PropTypes.array.isRequired,
    writers: PropTypes.array.isRequired,
    directors: PropTypes.array.isRequired
};

export default CrewInfo;
