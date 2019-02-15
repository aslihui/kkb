import React, { Component } from 'react'
import logoTest from './logo.png'
import "./test.css"



//函数组件传递
function Web1(props){
  return(
    <div>
      hello, {props.name}
    </div>
  )
}

export default class Test extends Component {
  //1.当需要状态时，需要构造函数
  constructor (props) {
    super(props);
    //2.初始化状态
    this.state = {
      date: new Date()
    }
  }


  componentDidMount(){
    this.timer = setInterval( () => {
      //更新状态
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillMount(){
    //删除状态
    clearInterval(this.timer)
  }

  formatName(user){
    return user.firstName + ' ' + user.lastName;
  };
  render() {
    const str = "jeary";
    var jsx = <p>hello, react!</p>;
    return (
      <div>
        {str}+ {this.props.name}
        <br />
        name: {this.formatName({firstName: "tom", lastName: "jim"})}
        <br />
        <img src={logoTest} className="test-logo" style={{width: "100px", height: 100}} />
        {jsx}
        <br />

        {/* 组件属性值传递 */}
        <Web1 name="webProps111"></Web1>

        {this.state.date.toLocaleString()}

      </div>
    )
  }
}
