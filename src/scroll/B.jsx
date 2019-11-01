import React from 'react'

export default class B extends React.Component {
  render() {
    return (
      <div className="B">
        <div onClick={this.props.openSlide}>下一步</div>
        <div>{this.props.data.data}</div>
          B组件
      </div>
    )
  }
}
