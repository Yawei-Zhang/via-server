import React from 'react'
import PropTypes from 'prop-types'

const buttonStyle = {
    margin: '10px'
};

class Counter extends React.Component {
    render() {
        const {value, caption, onIncrement, onDecrement} = this.props

        return (
            <div>
                <button style={buttonStyle} onClick={onIncrement}>+</button>
                <button style={buttonStyle} onClick={onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
};

export default Counter
