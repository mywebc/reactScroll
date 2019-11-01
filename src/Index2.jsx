import React, { Component } from 'react'
import './index.css'
import A from './scroll/A';
import B from './scroll/B';
import C from './scroll/C';
import ReactSwipe from 'react-swipe';


const getData = [
  { type: "A", data: { data: "A1" } },
  { type: "B", data: { data: "B1" } },
  { type: "C", data: { data: "C1" } },
  { type: "A", data: { data: "A2" } },
]

export default class Index2 extends Component {

  exportComponent = (type, data) => {
    switch (type) {
      case "A": return <A closeSlide={this.closeSlide} openSlide={this.openSlide} data={data} />;
      case "B": return <B data={data} />;
      case "C": return <C data={data} />;
      default: return <div>nothing</div>
    }
  }
  
  render() {
    return (
      <div style={{width: "100%",height: "100%"}}>
        <ReactSwipe
          swipeOptions={{ 
            speed: 400,
            widthOfSiblingSlidePreview: 10,
            disableScroll: false,
            stopPropagation: false,
           }}
        >
        {getData.map((ele, index) => {
            return (
                this.exportComponent(ele.type, ele.data)
            )
          })}
        </ReactSwipe>
      </div>
    )
  }
}
