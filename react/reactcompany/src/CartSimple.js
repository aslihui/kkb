import React, { Component } from 'react'

export default class CartSimple extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goods: [
        {id: 1, text: "web全栈课程1", price: 6661},
        {id: 2, text: "web全栈课程2", price: 6662},
        {id: 3, text: "web全栈课程3", price: 6663},
      ]
    }
  }
  render() {
    const name = this.props.name ? <h1>{this.props.name}</h1> : null;
    const good = this.state.goods.map(good => <li key={good.id}>{good.text}</li>);
    return (
      <div>
        {/* 经典条件语句 */}
        {this.props.title && <h1>{this.props.title}</h1>}
        {name}

        {/* 列表渲染 */}
        <ul>{good}</ul>
      </div>
    )
  }
}
