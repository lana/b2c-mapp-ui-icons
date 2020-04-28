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
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.5182 8.45543C22.9071 3.89144 18.5899 0.842255 13.75 0.84999C9.61278 0.84454 5.79818 3.0839 3.78648 6.69919C1.85574 10.169 1.87744 14.3819 3.81447 17.8209L0.937532 23.8631C0.773732 24.2071 0.844314 24.617 1.11375 24.8864C1.38318 25.1558 1.79307 25.2264 2.13708 25.0626L8.17844 22.1856C12.2219 24.4619 17.2663 24.0637 20.9093 21.1362C24.6824 18.1041 26.1293 13.0199 24.5182 8.45543ZM8.97899 7.49998C8.43838 7.49998 8.00012 7.93856 8.00012 8.47957C8.00012 9.02059 8.43838 9.45916 8.97899 9.45916H17.7888C18.3294 9.45916 18.7677 9.02059 18.7677 8.47957C18.7677 7.93856 18.3294 7.49998 17.7888 7.49998H8.97899ZM8.00012 12.2653C8.00012 11.7243 8.43838 11.2857 8.97899 11.2857H18.7254C19.266 11.2857 19.7043 11.7243 19.7043 12.2653C19.7043 12.8063 19.266 13.2449 18.7254 13.2449H8.97899C8.43838 13.2449 8.00012 12.8063 8.00012 12.2653ZM8.97899 15.07C8.43838 15.07 8.00012 15.5086 8.00012 16.0496C8.00012 16.5906 8.43838 17.0292 8.97899 17.0292H14.7888C15.3294 17.0292 15.7677 16.5906 15.7677 16.0496C15.7677 15.5086 15.3294 15.07 14.7888 15.07H8.97899Z"
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
