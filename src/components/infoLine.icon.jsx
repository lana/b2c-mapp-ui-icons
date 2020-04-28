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
            d="M9.55103 10.5306C9.55103 9.9896 9.9896 9.55103 10.5306 9.55103H11.2653C11.72 9.55103 12.156 9.73164 12.4775 10.0531C12.799 10.3746 12.9796 10.8107 12.9796 11.2653V14.9388C12.9796 15.0687 13.0312 15.1933 13.1231 15.2851C13.2149 15.377 13.3395 15.4286 13.4694 15.4286H14.2041C14.7451 15.4286 15.1837 15.8672 15.1837 16.4082C15.1837 16.9492 14.7451 17.3878 14.2041 17.3878H13.4694C12.8199 17.3878 12.197 17.1297 11.7377 16.6705C11.2784 16.2112 11.0204 15.5883 11.0204 14.9388V11.5102H10.5306C9.9896 11.5102 9.55103 11.0716 9.55103 10.5306Z"
            fill="#00A0DF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.8843 6.10456C11.1058 5.95656 11.3662 5.87756 11.6326 5.87756C11.9898 5.87756 12.3324 6.01947 12.585 6.27207C12.8376 6.52467 12.9795 6.86727 12.9795 7.2245C12.9795 7.4909 12.9005 7.75132 12.7525 7.97282C12.6045 8.19432 12.3942 8.36697 12.148 8.46891C11.9019 8.57086 11.6311 8.59753 11.3698 8.54556C11.1085 8.49359 10.8685 8.3653 10.6802 8.17693C10.4918 7.98855 10.3635 7.74855 10.3115 7.48728C10.2596 7.226 10.2862 6.95517 10.3882 6.70905C10.4901 6.46293 10.6628 6.25257 10.8843 6.10456Z"
            fill="#00A0DF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1.95918C6.45461 1.95918 1.95918 6.45461 1.95918 12C1.95918 17.5454 6.45461 22.0408 12 22.0408C17.5454 22.0408 22.0408 17.5454 22.0408 12C22.0408 6.45461 17.5454 1.95918 12 1.95918ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
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
