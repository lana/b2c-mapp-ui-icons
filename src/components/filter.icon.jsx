// TODO NO-CLASS: Refactor this file to stop using `class`

import { Component } from 'preact';
import PropTypes from 'prop-types';

import CSS from '../styles/styles.css';

class Icon extends Component { // eslint-disable-line fp/no-class, react/prefer-stateless-function
  render() {
    const color = (this.props.color) ? CSS[this.props.color] : CSS.active;
    return (
      <i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.5 7C2.5 6.17157 3.17157 5.5 4 5.5H20C20.8284 5.5 21.5 6.17157 21.5 7C21.5 7.82843 20.8284 8.5 20 8.5H4C3.17157 8.5 2.5 7.82843 2.5 7ZM5.5 12C5.5 11.1716 6.17157 10.5 7 10.5H17C17.8284 10.5 18.5 11.1716 18.5 12C18.5 12.8284 17.8284 13.5 17 13.5H7C6.17157 13.5 5.5 12.8284 5.5 12ZM9.5 17C9.5 16.1716 10.1716 15.5 11 15.5H13C13.8284 15.5 14.5 16.1716 14.5 17C14.5 17.8284 13.8284 18.5 13 18.5H11C10.1716 18.5 9.5 17.8284 9.5 17Z"
            fill="#00A0DF"
          />
        </svg>
      </i>
    );
  }
}

Icon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
