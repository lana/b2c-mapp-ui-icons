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
          <g clip-path="url(#clip0)">
            <path d="M0 0H40V40H0V0Z" fill="white" />
            <path
              d="M37.3346 19.5619L40.0002 19.1284"
              stroke="#00A0DF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37.0203 24.373L39.9026 25.2832"
              stroke="#00A0DF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35.5574 15.0326L38.0062 13.2664"
              stroke="#00A0DF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.2403 24.7796C28.2378 24.9318 28.2128 25.0825 28.1662 25.2268C28.1517 25.248 28.138 25.2698 28.125 25.2921C27.7812 25.8873 27.1274 26.3901 24.6241 27.0944L24.6238 27.0945C24.1439 27.2297 23.7244 27.5246 23.4346 27.9303C23.1448 28.336 23.0019 28.8285 23.0297 29.3263L23.03 29.3316L23.3773 35.0223C23.4124 35.5975 22.9554 36.0832 22.3791 36.0832H13.0358C12.5834 36.0832 12.1873 35.7795 12.07 35.3426L10.4332 29.248C10.3428 28.8881 10.1612 28.5575 9.90583 28.2881C9.64747 28.0156 9.32251 27.8151 8.96303 27.7066L8.96034 27.7058C5.28344 26.6066 2.7718 23.949 1.52346 19.4209C1.51585 19.2906 1.48651 19.0925 1.38053 18.8847C0.986246 17.3093 0.897224 15.6725 1.11878 14.0628C1.34697 12.4048 1.90017 10.8081 2.74664 9.36437C3.59311 7.92061 4.71622 6.65811 6.05158 5.64926C7.38693 4.6404 8.90828 3.90503 10.5284 3.4853L10.5284 3.48533L10.5362 3.48325C16.6429 1.84861 23.3719 4.35947 25.0012 10.4128C25.0659 10.6594 25.1729 10.8928 25.3175 11.1028C25.3232 11.1112 25.3291 11.1194 25.3351 11.1276C25.9087 11.9087 26.5655 12.6252 27.2938 13.2645C27.9987 13.9505 28.6661 14.674 29.2933 15.4317C29.3023 15.4427 29.3116 15.4534 29.3211 15.4639C29.7244 15.911 30.0179 16.4457 30.1785 17.0258L29.4424 17.2319L29.1267 17.3161C28.849 17.3884 28.5882 17.5147 28.3594 17.688C28.1293 17.8622 27.9361 18.0803 27.7909 18.3297C27.6458 18.5791 27.5515 18.8548 27.5137 19.1409C27.4759 19.4264 27.4951 19.7165 27.57 19.9946C27.8547 21.0546 28.0629 22.1338 28.193 23.2237L28.1937 23.2295C28.2563 23.7287 28.2724 24.2327 28.242 24.735C28.2411 24.7498 28.2405 24.7647 28.2403 24.7796Z"
              fill="#FAF0E1"
              stroke="#19194B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path d="M0 0H40V40H0V0Z" fill="white" />
            </clipPath>
          </defs>
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
