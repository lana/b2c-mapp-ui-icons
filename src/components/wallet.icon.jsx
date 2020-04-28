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
            d="M19.7052 18.4422C17.6124 18.4422 15.9157 16.7455 15.9157 14.6527C15.9157 12.5599 17.6124 10.8632 19.7052 10.8632H21.9789C22.1183 10.8632 22.2315 10.7501 22.2315 10.6106V8.08431C22.2315 6.68878 21.1007 5.558 19.7052 5.558H2.52631C1.13077 5.558 0 6.68878 0 8.08431V21.2211C0 22.6166 1.13077 23.7474 2.52631 23.7474H19.7052C21.1007 23.7474 22.2315 22.6166 22.2315 21.2211V18.6948C22.2315 18.5553 22.1183 18.4422 21.9789 18.4422H19.7052ZM22.7368 12.379H19.7052C18.4491 12.379 17.4315 13.3966 17.4315 14.6527C17.4315 15.9088 18.4491 16.9264 19.7052 16.9264H22.7368C23.4724 16.7991 24.008 16.1574 23.9999 15.4106V13.8948C24.008 13.148 23.4724 12.5064 22.7368 12.379ZM19.8942 0.935872C19.7294 0.27499 19.0615 -0.127197 18.4006 0.0365072C18.3935 0.0385282 18.3865 0.0405492 18.3784 0.0425703L5.37093 3.54403C5.23653 3.58142 5.15771 3.71986 5.19409 3.85426C5.2244 3.9634 5.32343 4.03919 5.43661 4.0402L20.3519 4.06243C20.4914 4.06344 20.6046 3.95127 20.6056 3.81283C20.6056 3.7906 20.6035 3.76938 20.5975 3.74816L19.8942 0.935872Z"
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
