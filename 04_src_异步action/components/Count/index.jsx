import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementSyncAction } from "../../redux/countAction"
import { Button } from "antd"
import "antd/dist/antd.css"

export default class Count extends Component {
  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref={c => { this.selectValue = c }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <Button style={{ marginLeft: "20px" }} type="primary" shape="circle" onClick={this.increment}>+</Button>
        <Button style={{ marginLeft: "20px" }} type="primary" shape="circle" onClick={this.decrement}>-</Button>
        <Button style={{ marginLeft: "20px" }} type="primary" onClick={this.incrementIfOdd}>当前求和为奇数再加</Button>
        <Button style={{ marginLeft: "20px" }} type="primary" onClick={this.incrementSync}>异步加</Button>
      </div>
    )
  }

  increment = () => {
    let { value } = this.selectValue
    store.dispatch(createIncrementAction(Number(value)))
  }
  decrement = () => {
    let { value } = this.selectValue
    store.dispatch(createDecrementAction(Number(value)))
  }
  incrementIfOdd = () => {
    let { value } = this.selectValue
    let count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(Number(value)))
    }
  }
  incrementSync = () => {
    // setTimeout(() => {
    let { value } = this.selectValue
    store.dispatch(createIncrementSyncAction(Number(value), 2000))
    // }, 200);
  }
}
