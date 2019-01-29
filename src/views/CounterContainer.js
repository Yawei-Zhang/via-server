import React from 'react'
import * as Action from '../Action'
import Counter from './Counter'
import PropTypes from 'prop-types'

class CounterContainer extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = this.getOwnState()
    }

    getOwnState = () => {
        return {
            value: this.context.store.getState()[this.props.caption]
        }
    }

    componentDidMount = () => { this.context.store.subscribe(this.onUpdate) }

    componentWillUnmount = () => { this.context.store.unsubscribe(this.onUpdate) }

    onUpdate = () => { this.setState(this.getOwnState()) }

    onIncrement = () => { this.context.store.dispatch(Action.increment(this.props.caption)) }

    onDecrement = () => { this.context.store.dispatch(Action.decrement(this.props.caption)) }

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

CounterContainer.contextTypes = {
    store: PropTypes.object
}

export default CounterContainer
