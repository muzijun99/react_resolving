import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUser } from 'store/homeList/actions'
import { Button, Toast } from 'antd-mobile'
import { routerMap } from 'common/constant'
// import { Loading } from 'component'
import './index.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      routerMap: routerMap
    }
  }
  goDetail(url) {
    this.props.history.push(url)
  }
  add() {
    console.log('====================================');
    console.log('执行add了');
    console.log('====================================');
  }
  componentDidMount() {
    const { dispatch } = this.props;
    // 更新用户信息
    new Promise ( (resolve, reject) => {
      dispatch(setUser({'name': 'lcc'}, resolve));
    }).then(res => {
      
    })
  }

  render () {
    const { routerMap } = this.state
    return (
      <div className='home_content'>
      <input onKeyUp={this.add}/>
        {
          routerMap.map( item => {
            return <Button className='pri_btn' type='primary' onClick={this.goDetail.bind(this,item.path)}>{item.name}</Button>
          })
        }
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // state 是 {userList: [{id: 0, name: '王二'}]}
  // 将user加入到改组件中的props当中
  return {
    homeList: state.homeList
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     increase: (...args) => dispatch(actions.increase(...args)),
//     decrease: (...args) => dispatch(actions.decrease(...args))
//   }
// }

export default connect(mapStateToProps)(Home);

// export default Home