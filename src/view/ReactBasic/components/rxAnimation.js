import React, { Component } from 'react'
import '../index.scss'

class RxAnimation extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShow: false,
      isOut: false,
      roateDeg: 7200
    }
  }

  typeClass() {
    const { isShow, isOut } = this.state
    
    return `basic ${isShow ? 'basic_animation_right':''} ${isOut ? 'basic_animation_rightout':''}`
  }

  handleClick() {
    const { isShow } = this.state
    
    this.setState({
      isShow: !isShow,
      isOut: isShow
    })
  }

  render() {
    const { roateDeg } = this.state

    return (
      <div className='animation_ctn'>
        <div>
          <div className="DrawRightSwitch" onClick={this.handleClick.bind(this)}>打开滑动滑出的抽屉</div>
          <div className={this.typeClass()}></div>
        </div>
        <div className='roate_transform' style={{transform: `rotate(${roateDeg}deg`}}>一直转的</div>
        <div className='move-animate-div'>我是一棵树</div>
      </div>
    )
  }
}

export default RxAnimation