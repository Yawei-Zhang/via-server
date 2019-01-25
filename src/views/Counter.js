import React from 'react'
import CounterStore from '../stores/CounterStore';
import * as Actions from '../Action'
import PropTypes from 'prop-types'

const buttonStyle = {
    margin: '10px'
};

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange)
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange)
    }

    onChange = () => {
        const newCount = CounterStore.getCounterValues()[this.props.caption]
        this.setState({count: newCount})
    }

    onClickIncrementButton = () => {
        Actions.increment(this.props.caption)
    }

    onClickDecrementButton = () => {
        Actions.decrement(this.props.caption)
    }

    render() {
        const {caption} = this.props

        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};

export default Counter
