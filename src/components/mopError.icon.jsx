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
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.3459 13.6438C38.0454 14.498 40 17.0196 40 19.9998C40 22.9804 38.0454 25.5032 35.3459 26.3559C36.6479 28.8676 36.2509 32.0347 34.1423 34.1429C32.0338 36.2508 28.8665 36.6504 26.3548 35.3456C25.5021 38.0438 22.9812 40 20.0016 40C17.0189 40 14.4979 38.0438 13.6452 35.3456C11.1335 36.6504 7.96613 36.2508 5.85763 34.1429C3.74912 32.0347 3.35207 28.8676 4.65411 26.3559C1.95768 25.5032 0 22.9804 0 19.9998C0 17.0196 1.95768 14.498 4.65411 13.6438C3.35207 11.1336 3.74912 7.96651 5.85763 5.8583C7.96613 3.7504 11.1335 3.35085 13.6452 4.65567C14.4979 1.95615 17.0189 0 20.0016 0C22.9812 0 25.5021 1.95615 26.3548 4.65567C28.8665 3.35085 32.0338 3.7504 34.1423 5.8583C36.2509 7.96651 36.6479 11.1336 35.3459 13.6438Z"
            fill="#EB4B68"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.5735 14.483C28.1415 13.9149 28.1415 12.994 27.5734 12.426C27.0054 11.858 26.0844 11.858 25.5164 12.4261L20.0004 17.9427L14.483 12.426C13.9149 11.858 12.994 11.858 12.426 12.4261C11.858 12.9942 11.858 13.9151 12.4261 14.4831L17.9434 19.9999L12.4269 25.517C11.8589 26.0851 11.859 27.006 12.427 27.574C12.9951 28.142 13.9161 28.142 14.4841 27.5739L20.0006 22.0568L25.5184 27.574C26.0865 28.142 27.0075 28.142 27.5755 27.5739C28.1435 27.0058 28.1434 26.0849 27.5754 25.5169L22.0575 19.9996L27.5735 14.483Z"
            fill="white"
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
