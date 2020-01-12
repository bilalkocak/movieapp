import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Button.sass'


class Button extends Component {
    render() {
        const {text, isBackgroundRed, onClick} = this.props;
        return (
            <div className={isBackgroundRed === true ? "button redButton" : "button"}
                 onClick={onClick}
            >
                {text}
            </div>
        );
    }
}

Button.propTypes = {
    isBackgroundRed: PropTypes.bool,
    text: PropTypes.string.isRequired
};

Button.defaultProps = {
    isBackgroundRed: false
};
export default Button;
