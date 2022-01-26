import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction } from '../../redux/countAction'
import { Button } from "antd"
import "antd/dist/antd.css"

// 定义UI组件
class Count extends Component {
  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <h2>当前求和为：{this.props.count}</h2>
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
    this.props.increment(Number(value))
  }
  decrement = () => {
    let { value } = this.selectValue
    this.props.decrement(Number(value))
  }
  incrementIfOdd = () => {
    // let { value } = this.selectValue
  }
  incrementSync = () => {
    // let { value } = this.selectValue
  }
}




// let mapStateToProps = state => ({ count: state })

// function mapDispatchToProps(dispatch) {
//   return {
//     "increment": data => dispatch(createIncrementAction(data)),
//     "decrement": data => dispatch(createDecrementAction(data))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

//简写:react-redux可以自动调用dispatch进行分发动作
export default connect(
  state => ({ count: state }),
  {
    "increment": createIncrementAction,
    "decrement": createDecrementAction
  }
)(Count)