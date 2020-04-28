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
            d="M20.2174 9.47826C20.6496 9.47826 21 9.82865 21 10.2609V19.6522C21 20.0844 20.6496 20.4348 20.2174 20.4348H3.78261C3.35039 20.4348 3 20.0844 3 19.6522V10.2609C3 9.82865 3.35039 9.47826 3.78261 9.47826H20.2174ZM12 17.6957C13.5128 17.6957 14.7391 16.4693 14.7391 14.9565C14.7391 13.4437 13.5128 12.2174 12 12.2174C10.4872 12.2174 9.26087 13.4437 9.26087 14.9565C9.26087 16.4693 10.4872 17.6957 12 17.6957ZM5.34783 8.30435C4.9156 8.30435 4.56522 7.95396 4.56522 7.52174C4.56522 7.08952 4.9156 6.73913 5.34783 6.73913H18.6522C19.0844 6.73913 19.4348 7.08952 19.4348 7.52174C19.4348 7.95396 19.0844 8.30435 18.6522 8.30435H5.34783ZM6.91304 5.56522C6.48082 5.56522 6.13043 5.21483 6.13043 4.78261C6.13043 4.35039 6.48082 4 6.91304 4H17.087C17.5192 4 17.8696 4.35039 17.8696 4.78261C17.8696 5.21483 17.5192 5.56522 17.087 5.56522H6.91304Z"
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
