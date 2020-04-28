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
            d="M11.2517 15.6556C11.4732 15.5076 11.7336 15.4286 12 15.4286C12.3572 15.4286 12.6998 15.5705 12.9524 15.8231C13.205 16.0757 13.347 16.4183 13.347 16.7755C13.347 17.0419 13.268 17.3023 13.12 17.5238C12.9719 17.7454 12.7616 17.918 12.5155 18.0199C12.2693 18.1219 11.9985 18.1486 11.7372 18.0966C11.476 18.0446 11.236 17.9163 11.0476 17.728C10.8592 17.5396 10.7309 17.2996 10.679 17.0383C10.627 16.777 10.6537 16.5062 10.7556 16.2601C10.8576 16.014 11.0302 15.8036 11.2517 15.6556Z"
            fill="#00A0DF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0001 4.40814C12.5411 4.40814 12.9797 4.84672 12.9797 5.38773V13.4694C12.9797 14.0104 12.5411 14.449 12.0001 14.449C11.4591 14.449 11.0205 14.0104 11.0205 13.4694V5.38773C11.0205 4.84672 11.4591 4.40814 12.0001 4.40814Z"
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
