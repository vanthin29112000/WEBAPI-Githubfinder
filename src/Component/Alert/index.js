import React from 'react'
import PropTypes from "prop-types"

const Alert = ({ message }) => {
    return (
        <div className="notify-search">
            <i className="fas fa-exclamation-circle"></i>
            <p>
                {message}
            </p>
        </div>
    )
}

Alert.defaultProps = {
    message: "Message",
}

Alert.propTypes = {
    message: PropTypes.string,
}
export default Alert;