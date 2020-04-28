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
            d="M2.08696 12C2.08696 6.52518 6.52518 2.08696 12 2.08696C17.4748 2.08696 21.913 6.52518 21.913 12C21.913 17.4748 17.4748 21.913 12 21.913C6.52518 21.913 2.08696 17.4748 2.08696 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM9.91304 12C9.91304 11.8176 9.91991 11.6438 9.93316 11.4783H13.5652C14.1415 11.4783 14.6087 11.0111 14.6087 10.4348C14.6087 9.85849 14.1415 9.3913 13.5652 9.3913H10.6942C10.7351 9.34383 10.7772 9.29849 10.8205 9.25524C11.3649 8.71076 12.2391 8.34783 13.5652 8.34783C14.1415 8.34783 14.6087 7.88064 14.6087 7.30435C14.6087 6.72805 14.1415 6.26087 13.5652 6.26087C11.8652 6.26087 10.3916 6.73272 9.34476 7.77954C8.88438 8.23992 8.5352 8.78286 8.28847 9.3913H7.30435C6.72805 9.3913 6.26087 9.85849 6.26087 10.4348C6.26087 11.0111 6.72805 11.4783 7.30435 11.4783H7.84145C7.83117 11.6496 7.82609 11.8236 7.82609 12C7.82609 12.1764 7.83117 12.3504 7.84145 12.5217H7.30435C6.72805 12.5217 6.26087 12.9889 6.26087 13.5652C6.26087 14.1415 6.72805 14.6087 7.30435 14.6087H8.28847C8.5352 15.2171 8.88438 15.7601 9.34476 16.2205C10.3916 17.2673 11.8652 17.7391 13.5652 17.7391C14.1415 17.7391 14.6087 17.2719 14.6087 16.6957C14.6087 16.1194 14.1415 15.6522 13.5652 15.6522C12.2391 15.6522 11.3649 15.2892 10.8205 14.7448C10.7772 14.7015 10.7351 14.6562 10.6942 14.6087H12C12.5763 14.6087 13.0435 14.1415 13.0435 13.5652C13.0435 12.9889 12.5763 12.5217 12 12.5217H9.93316C9.91991 12.3562 9.91304 12.1824 9.91304 12Z"
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
