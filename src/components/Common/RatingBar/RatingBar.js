import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './RatingBar.sass'

class RatingBar extends Component {
    render() {
        const {width, rate} = this.props;
        return (
            <div className={"movieRatingBar"} style={{width}}>
                <div style={{width: (rate * 10 + "%")}}/>
            </div>
        );
    }
}

RatingBar.propTypes = {
    width: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
};


export default RatingBar;
