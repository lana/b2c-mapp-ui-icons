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
            d="M19.6728 8.82195C21.022 9.2491 22 10.5098 22 12C22 13.4902 21.022 14.7516 19.6728 15.178C20.3246 16.4339 20.1248 18.0174 19.0708 19.0715C18.0174 20.1255 16.4339 20.3253 15.178 19.6728C14.7516 21.022 13.4902 22 12 22C10.5098 22 9.24911 21.022 8.82196 19.6728C7.56608 20.3253 5.98258 20.1255 4.92923 19.0715C3.87518 18.0174 3.67542 16.4339 4.3272 15.178C2.97871 14.7516 2 13.4902 2 12C2 10.5098 2.97871 9.2491 4.3272 8.82195C3.67542 7.56677 3.87518 5.98327 4.92923 4.92922C5.98258 3.87517 7.56608 3.67543 8.82196 4.3279C9.24911 2.97803 10.5098 2 12 2C13.4902 2 14.7516 2.97803 15.178 4.3279C16.4339 3.67543 18.0174 3.87517 19.0708 4.92922C20.1248 5.98327 20.3246 7.56677 19.6728 8.82195Z"
            fill="#19194B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.22757 17.5534C9.37641 17.5534 9.52641 17.5823 9.66871 17.6412C10.0545 17.8013 10.3237 18.157 10.3729 18.572C10.4706 19.3958 11.1702 20.0167 11.9998 20.0167C12.8298 20.0167 13.529 19.3958 13.6267 18.5724C13.6759 18.1574 13.9451 17.8013 14.3309 17.6412C14.717 17.4814 15.1586 17.5426 15.4866 17.8017C16.137 18.3148 17.0701 18.2586 17.657 17.6716C18.2435 17.0841 18.2993 16.1498 17.7866 15.4989C17.5281 15.1705 17.467 14.7282 17.627 14.3421C17.7866 13.956 18.1424 13.6865 18.557 13.6372C19.3796 13.5399 20 12.84 20 12.0093C20 11.1785 19.3796 10.4787 18.5573 10.3813C18.1424 10.332 17.7866 10.0626 17.627 9.67645C17.467 9.29034 17.5281 8.84802 17.7866 8.51966C18.2993 7.8687 18.2435 6.93442 17.657 6.34736C17.0705 5.75992 16.1374 5.7041 15.4866 6.21724C15.1586 6.47593 14.717 6.53714 14.3309 6.37739C13.9451 6.21724 13.6759 5.86116 13.6267 5.44618C13.529 4.62276 12.8298 4.00183 11.9998 4.00183C11.1702 4.00183 10.4706 4.62315 10.3729 5.44657C10.3237 5.86155 10.0545 6.21724 9.66871 6.37739C9.28257 6.53714 8.84065 6.47555 8.51297 6.21724C7.8626 5.70372 6.92954 5.75992 6.34302 6.34736C5.75611 6.93442 5.70034 7.8687 6.21341 8.51966C6.47186 8.84802 6.53263 9.29034 6.37302 9.67645C6.21302 10.0626 5.85726 10.332 5.44266 10.3813C4.62037 10.4787 4 11.1785 4 12.0093C4 12.84 4.62037 13.5399 5.44266 13.6372C5.85765 13.6865 6.21341 13.956 6.37302 14.3421C6.53263 14.7282 6.47186 15.1705 6.21341 15.4989C5.70034 16.1502 5.75611 17.0841 6.34302 17.6716C6.92993 18.2586 7.8626 18.3148 8.51297 17.8017C8.71989 17.6381 8.97257 17.5534 9.22757 17.5534Z"
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
