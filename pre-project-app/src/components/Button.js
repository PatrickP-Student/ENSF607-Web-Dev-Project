import React, { Component } from 'react'

export default class Button extends Component {
    render(){
      let { title, task } = this.props
      return(
        <button style={ btnStyle } onClick = { task }>{ title }</button>
      )}
  }

  const btnStyle = {
    background: 'coral',
    color: 'Black',
    border: 'none',
    bordercolor: 'DarkGray',
    padding: '10px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
  }