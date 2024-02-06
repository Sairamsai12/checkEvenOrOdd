// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrement = () => {
    const randomValue = Math.floor(Math.random() * 101)
    let evenOrOddValue
    if (randomValue % 2 === 0) {
      evenOrOddValue = true
    } else {
      evenOrOddValue = false
    }

    this.setState({count: randomValue, isEven: evenOrOddValue})
    console.log(randomValue)
  }

  render() {
    const {count, isEven} = this.state
    const evenOrOdd = isEven ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="title">Count {count}</h1>
          <p className="result">Count is {evenOrOdd}</p>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
