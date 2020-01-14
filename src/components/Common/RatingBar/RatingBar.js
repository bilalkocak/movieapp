import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './RatingBar.sass'

class RatingBar extends Component {
    state = {
        rateBarPercentage: 0
    };

    componentDidMount() {
        this.calculateWidth();
    }

    calculateWidth = () => {
        setTimeout(()=>{
            this.setState({
                rateBarPercentage: this.props.rate * 10 + "%"
            })
        },100)
    };

    render() {
        const {width} = this.props;
        const {rateBarPercentage} = this.state;
        return (
            <div className={"movieRatingBar"} style={{width}}>
                <div style={{width: rateBarPercentage}}/>
            </div>
        );
    }
}

RatingBar.propTypes = {
    width: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
};


export default RatingBar;
