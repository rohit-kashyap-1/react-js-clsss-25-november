import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    const styles = {
        p:{
            color:(this.props.type=='success')?'#4caf50':'red'
        }
    }
    return (
      <p style={styles.p}>Note: {this.props.msg}</p>
    )
  }
}
