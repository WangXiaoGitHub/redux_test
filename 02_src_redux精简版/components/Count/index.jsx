import React, { Component } from 'react'
import store from "../../redux/store"

export default class Count extends Component {
  // componentDidMount() {
  //   // 检测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({});
  //   })
  // }
  render() {
    return (
      <div style={{ "marginLeft": "20px" }}>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref={c => this.selectNumber = c} style={{ "marginLeft": "20px" }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button style={{ "marginLeft": "20px" }} onClick={this.increment}>+</button>
        <button style={{ "marginLeft": "20px" }} onClick={this.decrement}>-</button>
        <button style={{ "marginLeft": "20px" }} onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button style={{ "marginLeft": "20px" }} onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }

  increment = () => {
    let { value } = this.selectNumber
    store.dispatch({ type: "increment", data: Number(value) })
  }
  decrement = () => {
    let { value } = this.selectNumber
    store.dispatch({ type: "decrement", data: Number(value) })
  }
  incrementIfOdd = () => {
    let { value } = this.selectNumber
    let count = store.getState()
    if (count % 2 !== 0)
      store.dispatch({ type: "increment", data: Number(value) })
  }
  incrementAsync = () => {
    let { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch({ type: "increment", data: Number(value) })
    }, 500);
  }


}
