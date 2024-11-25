import React, { Component } from 'react'

export default class Button extends Component {

  render() {
     const styles = {
        button:{
            border:'none',
            padding:'16px 20px',
            color:'white',
            background:(this.props.type=='green')?'#4caf50':'red',
            marginRight:'10px'
        }
     }
    return (
      <button style={styles.button}>{this.props.title}</button>
    )
  }
}
