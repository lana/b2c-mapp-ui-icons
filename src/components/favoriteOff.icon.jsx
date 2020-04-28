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
            d="M11.6199 3.69361C11.7138 3.42763 12.0895 3.42645 12.1851 3.69184L13.7 7.9C14.1 8.9 15 9.6 16.1 9.6H20.1743C20.4546 9.6 20.5818 9.95013 20.3669 10.13L16.7 13.2C15.9 13.9 15.6 15 15.9 15.9L17.3982 20.3113C17.4921 20.5879 17.1756 20.8219 16.9387 20.6511L13.4 18.1C13 17.8 12.5 17.6 11.9 17.6C11.3 17.6 10.8 17.8 10.4 18.1L6.86132 20.6511C6.62439 20.8219 6.30789 20.5879 6.40182 20.3113L7.9 15.9C8.2 14.9 7.9 13.8 7.1 13.2L3.45442 10.2327C3.23547 10.0545 3.36149 9.7 3.6438 9.7H7.7C8.8 9.7 9.7 9 10.1 8L11.6199 3.69361ZM11.9 0C11.7 0 11.5 0 11.4 0.1C10.9 0.3 10.6 0.6 10.5 1L8.2 7.3C8.2 7.5 8 7.7 7.8 7.7H1.5C0.7 7.7 0 8.4 0 9.2C0 9.7 0.2 10.1 0.5 10.4L5.8 14.8C6 14.9 6 15.2 6 15.4L3.8 22C3.5 22.8 4 23.7 4.8 23.9C4.9 24 5.1 24 5.2 24C5.5 24 5.8 23.9 6.1 23.7L11.6 19.7C11.7 19.6 11.8 19.6 11.9 19.6C12 19.6 12.1 19.6 12.2 19.7L17.7 23.7C18 23.9 18.3 24 18.6 24C19.1 24 19.5 23.8 19.8 23.4C20.1 23 20.2 22.5 20 22L17.8 15.3C17.7 15.1 17.8 14.9 18 14.7L23.3 10.3C23.8 9.9 24 9.2 23.7 8.6C23.5 8 22.9 7.6 22.3 7.6H16.1C15.9 7.6 15.7 7.5 15.6 7.3L13.3 1C13.1 0.4 12.5 0 11.9 0Z"
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
