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
            d="M17.5616 16.9556H19.7872C19.8989 16.9556 19.9895 17.0462 19.9895 17.1579V19.1804C19.9895 20.2975 19.0839 21.203 17.9669 21.203H5.83157C4.26774 21.203 3 19.9352 3 18.3714V5.83157C3 4.26774 4.26774 3 5.83157 3H14.7308C16.2922 3 17.5624 3.90691 17.5624 5.02255V5.21429C17.562 5.32568 17.4715 5.41574 17.3601 5.41574H6.64059C6.30549 5.41574 6.03384 5.6874 6.03384 6.02251C6.03384 6.35761 6.30549 6.62927 6.64059 6.62927C25.1365 6.62927 14.3457 6.63736 17.9669 6.63736C19.0839 6.63736 19.9895 7.54289 19.9895 8.65991C19.9895 8.65991 19.9895 9.8419 19.9895 10.4835C19.9895 10.7069 19.8084 10.888 19.585 10.888H17.649C16.193 10.8669 14.9199 11.8653 14.5933 13.2843C14.4028 14.1804 14.6267 15.1147 15.2028 15.8271C15.7788 16.5396 16.6454 16.9542 17.5616 16.9556ZM19.9886 12.1015C20.5778 12.2031 21.0063 12.7172 20.9999 13.315V14.5286C21.0063 15.1264 20.5778 15.6405 19.9886 15.7421H17.5616C16.5563 15.7421 15.7413 14.9271 15.7413 13.9218C15.7413 12.9165 16.5563 12.1015 17.5616 12.1015H19.9886Z"
            fill="#121E31"
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
