import React from 'react'
import PropTypes from 'prop-types'
import * as Actions from '../Actions'
import {connect} from 'react-redux'

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

function mapStateToProps(state, ownProps) {
    return {
        value: state[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(ownProps.caption))
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
