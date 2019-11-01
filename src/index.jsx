import React from 'react'
import A from './scroll/A';
import B from './scroll/B';
import C from './scroll/C';

import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'


import './index.css'

const getData = [
  { type: "A", data: { data: "A1" } },
  { type: "B", data: { data: "B1" } },
  { type: "C", data: { data: "C1" } },
  // { type: "A", data: { data: "A2" } },
]


BScroll.use(Slide)
export default class index extends React.Component {
  wrapperRef;
  contentRef;
  bs;
  swiper;
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.contentRef = React.createRef();
    this.state = {
      itemWidth: "",
      slideX: true,
      // 是否可以滑动
      isSlide: false,
      // 组件数据
      allComponentData: [getData.shift()]
    }
  }

  exportComponent = (type, data) => {
    switch (type) {
      case "A": return <A closeSlide={this.closeSlide} openSlide={this.openSlide} data={data} />;
      case "B": return <B data={data} openSlide={this.openSlide} />;
      case "C": return <C data={data} />;
      default: return <div>nothing</div>
    }
  }

  closeSlide = () => {
    console.log("click")
    // this.bs.destroy()
    // console.log("this",this.bs)
    // this.bs.on("destroy",() => {
    //   console.log("destory")
    // })
  }

  openSlide = () => {
    // this.bs.enable()
    console.log("click open")
    const { allComponentData } = this.state
    let allComponentDataCopy = JSON.parse(JSON.stringify(allComponentData))
    const shiftData = getData.shift()
    allComponentDataCopy.push(shiftData)
    console.log("12", shiftData, allComponentDataCopy)
    this.setState({ allComponentData: allComponentDataCopy }, () => {
      const { clientWidth } = this.wrapperRef.current
      this.contentRef.current.style.width = clientWidth * this.state.allComponentData.length + "px"
      this.setState({ itemWidth: clientWidth, },() =>{
        this.forceUpdate()
        !this.bs&&this.initScroll()
        this.bs.refresh()
        console.log("this.bs.getCurrentPage()",this.bs.getCurrentPage())
        this.bs.goToPage(allComponentData.length)
      })
      
    })
  }
  componentDidMount() {
    // const { allComponentData } = this.state
    // this.initScroll()
  }


initScroll = () => {
  const { allComponentData } = this.state
  const { clientWidth } = this.wrapperRef.current
  this.contentRef.current.style.width = clientWidth * allComponentData.length + "px"
  this.setState({ itemWidth: clientWidth, })
    this.bs = new BScroll(this.wrapperRef.current, {
      scrollX: this.state.slideX,
      scrollY: false,
      slide: {
        loop: false,
        threshold: 100,
        // listenFlick: false
        disableSetWidth: true
      },
      useTransition: true,
      momentum: false,
      bounce: {
        left: false,
        right: false
      },
      stopPropagation: true,
      click: true,
      tap: true,
      // preventDefaultException: { className: /(^|\s)closeBtn(\s|$)/ },
      // eventPassthrough: "vertical"
      directionLockThreshold: 3
    })
    // this.bs.disable()
    console.log("change", this.bs.getCurrentPage())
    this.bs.on("slideWillChange", (page) => {
      console.log("change", this.bs.getCurrentPage())
    })

    this.bs.on("beforeScrollStart", () => {
    })
    this.bs.on("scrollEnd", () => {
      console.log("scrollEnd")
    })
    this.bs.on("scroll", () => {
      console.log("scroll")
    })
    this.bs.on("scrollCancel", () => {
      console.log("scrollCancel")
    })
}

  render() {
    const { itemWidth, allComponentData } = this.state
    console.log("allComponentData", allComponentData)
    return (
      <div className="wrapper" ref={this.wrapperRef}>
        <div className='content' ref={this.contentRef}>
          {allComponentData.map((ele, index) => {
            return (
              <div className="scrollItem" key={index} style={{ width: itemWidth }}>
                {this.exportComponent(ele.type, ele.data)}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
