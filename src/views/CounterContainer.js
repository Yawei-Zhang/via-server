import React from 'react'
import store from '../Store'
import * as Action from '../Action'
import Counter from './Counter'
import PropTypes from 'prop-types'

class CounterContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.getOwnState()
    }

    getOwnState = () => {
        return {
            value: store.getState()[this.props.caption]
        }
    }

    componentDidMount = () => { store.subscribe(this.onUpdate) }

    componentWillUnmount = () => { store.unsubscribe(this.onUpdate) }

    onUpdate = () => { this.setState(this.getOwnState()) }

    onIncrement = () => { store.dispatch(Action.increment(this.props.caption)) }

    onDecrement = () => { store.dispatch(Action.decrement(this.props.caption)) }

    render() {
        return <Counter value={this.state.value}
                        caption={this.props.caption}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
        />
    }
}

CounterContainer.propTypes = {
    caption: PropTypes.string.isRequired
}

export default CounterContainer
