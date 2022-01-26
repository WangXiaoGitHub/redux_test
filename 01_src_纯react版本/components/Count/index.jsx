import React, { Component } from 'react'

export default class Count extends Component {
  state = {count: 0}

  render() {
    return (
      <div style={{"marginLeft": "20px"}}>
        <h2>当前求和为：{this.state.count}</h2>
        <select ref={c => this.selectNumber = c} style={{"marginLeft": "20px"}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button style={{"marginLeft": "20px"}} onClick={this.increment}>+</button>
        <button style={{"marginLeft": "20px"}} onClick={this.decrement}>-</button>
        <button style={{"marginLeft": "20px"}} onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button style={{"marginLeft": "20px"}} onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }

  increment = () => {
    let {value} = this.selectNumber
    let {count} = this.state
    this.setState({count: count + Number(value)})
  }
  decrement = () => {
    let {value} = this.selectNumber
    let {count} = this.state
    this.setState({count: count - Number(value)})
  }
  incrementIfOdd = () => {
    let {value} = this.selectNumber
    let {count} = this.state
    if (count % 2 !== 0) 
      this.setState({count: count + Number(value)})
  }
  incrementAsync = () => {
    let {value} = this.selectNumber
    let {count} = this.state
    setTimeout(() => {
      this.setState({count: count + Number(value)})
    }, 500);
  }


}
