import React, { Component } from 'react'

interface HeaderProps {
  title: string;
}

export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}
