import React from 'react'

export default class B extends React.Component {
  render() {
    return (
      <div className="B">
        <div>{this.props.data.data}</div>
          B组件
      </div>
    )
  }
}
