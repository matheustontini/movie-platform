import React from 'react';
import './message.scss';
import icon from './img/message.png';

export default class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <img className="message__icon" src={icon} />
        <div className="message__title">{ this.props.title }</div>
        <div className="message__body">{ this.props.body }</div>
      </div>
    );
  }
}