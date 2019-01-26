import React from 'react'
import store from '../Store'

class Summary extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.getOwnState()
    }

    getOwnState() {
        const state = store.getState()
        let sum = 0

        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key]
            }
        }

        return {sum: sum}
    }

    componentDidMount() {
        store.subscribe(this.onUpdate)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onUpdate)
    }

    onUpdate = () => {
        this.setState(this.getOwnState())
    }

    render() {
        return (
            <div>Total Count: {this.state.sum}</div>
        )
    }
}

export default Summary
