import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class APP extends Component {
  render() {
    return (
      <div style={{ marginLeft: '20px' }}>
        <Count />
        <br />
        <Person />
      </div>
    )
  }
}
