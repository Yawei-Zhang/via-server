import React from 'react'
import store from '../Store';
import * as Actions from '../Action'
import PropTypes from 'prop-types'

const buttonStyle = {
    margin: '10px'
};

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.getOwnState()
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        }
    }

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange)
    }

    onChange = () => {
        this.setState(this.getOwnState())
    }

    onIncrementButton = () => {
        store.dispatch(Actions.increment(this.props.caption))
    }

    onDecrementButton = () => {
        store.dispatch(Actions.decrement(this.props.caption))
    }

    render() {
        const {value} = this.state
        const {caption} = this.props

        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onDecrementButton}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};

export default Counter
