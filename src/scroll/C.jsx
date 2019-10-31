import React from 'react'

export default class C extends React.Component {
  render() {
    return (
      <div className="C">
        <div>{this.props.data.data}</div>
        C组件
      </div>
    )
  }
}
