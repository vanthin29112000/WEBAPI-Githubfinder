import React from 'react'
import PropTypes from "prop-types"

const Button = ({ label, color, type, onClick }) => {

    return (
        <button
            type={type}
            onClick={onClick}
            style={{
                backgroundColor: { color }
            }}>
            {label}
        </button>
    )
}
//giá trị mặc định props nếu user ko truyen vào
Button.defaultProps = {
    label: "Button",
    color: "blue",
    type: "button"
}

Button.protoTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
}
export default Button;