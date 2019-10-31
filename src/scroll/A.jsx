import React from 'react'


export default class A extends React.Component {
  render() {
    return (
      <div className="A">
        A组件
        <div onClick={this.props.closeSlide} className="closeBtn">关闭滑动</div>
        <div onClick={this.props.openSlide}>开启滑动</div>
        <button onClick={this.props.closeSlide}>asad</button>
        <div>{this.props.data.data}</div>
        <div style={{ height: 200, whiteSpace: "normal",overflow: "auto" }}>
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttest
          ttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttest
          ttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttestttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
          testtesttesttesttesttesttesttesttesttesttest
          test
        </div>
      </div>
    )
  }
}
