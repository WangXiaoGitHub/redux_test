import { Button } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="输入名字" ref={c => this.nameNode = c} />
        <br />
        <input type="text" placeholder="输入年龄" ref={c => this.ageNode = c} />
        <br />
        <Button type="primary" onClick={this.addPerson}>添加</Button>
        <div>count: {this.props.count}</div>
        <ul>
          {
            this.props.personsArr.map(item => {
              return (<li key={item.id}>{item.name} -- {item.age}</li>)
            })
          }
        </ul>
      </div>
    )
  }

  addPerson = () => {
    let name = this.nameNode.value
    let age = this.ageNode.value
    let personObj = { id: nanoid(), name, age }
    this.props.addPerson(personObj)
  }
}

export default connect(
  state => ({ personsArr: state.persons, count: state.count }),
  {
    addPerson
  }
)(Person)