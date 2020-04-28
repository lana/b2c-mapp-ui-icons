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
            d="M11.9981 14.9214C11.6666 14.9214 11.3487 14.79 11.1141 14.556L1.43005 4.87C1.36429 4.80448 1.31807 4.72195 1.29656 4.63164C1.27506 4.54134 1.27911 4.44683 1.30828 4.3587C1.33745 4.27057 1.39058 4.1923 1.46171 4.13266C1.53285 4.07301 1.61919 4.03435 1.71105 4.021C1.80674 4.0069 1.90333 3.99988 2.00005 4H22.0001C22.0961 3.99998 22.192 4.007 22.2871 4.021C22.3789 4.03435 22.4653 4.07301 22.5364 4.13266C22.6075 4.1923 22.6607 4.27057 22.6898 4.3587C22.719 4.44683 22.723 4.54134 22.7015 4.63164C22.68 4.72195 22.6338 4.80448 22.5681 4.87L12.8821 14.556C12.6474 14.79 12.3295 14.9214 11.9981 14.9214ZM23.782 5.92477C23.8177 5.91782 23.8546 5.92169 23.888 5.93588C23.9212 5.94959 23.9497 5.97289 23.9696 6.00281C23.9895 6.03273 24.0001 6.06792 24 6.10388V18.1039C24 18.6343 23.7893 19.143 23.4142 19.5181C23.0391 19.8932 22.5304 20.1039 22 20.1039H2C1.46957 20.1039 0.960859 19.8932 0.585786 19.5181C0.210714 19.143 0 18.6343 0 18.1039V6.10388C0.000392021 6.06829 0.0112108 6.0336 0.0311174 6.00409C0.0510241 5.97459 0.0791449 5.95157 0.112 5.93788C0.145373 5.92341 0.182347 5.91939 0.21805 5.92636C0.253752 5.93332 0.286508 5.95093 0.312 5.97688L6.512 12.1769C6.55878 12.2239 6.58503 12.2875 6.58503 12.3539C6.58503 12.4202 6.55878 12.4839 6.512 12.5309L1.469 17.5739C1.33231 17.7153 1.25663 17.9047 1.25824 18.1013C1.25986 18.298 1.33865 18.4861 1.47764 18.6253C1.61663 18.7644 1.8047 18.8433 2.00135 18.8451C2.198 18.8469 2.38748 18.7714 2.529 18.6349L7.572 13.5919C7.61903 13.5451 7.68267 13.5188 7.749 13.5188C7.81533 13.5188 7.87897 13.5451 7.926 13.5919L10.057 15.7189C10.5727 16.2343 11.2719 16.5238 12.001 16.5238C12.7301 16.5238 13.4293 16.2343 13.945 15.7189L16.074 13.5899C16.0972 13.5666 16.1248 13.5481 16.1552 13.5355C16.1856 13.5229 16.2181 13.5164 16.251 13.5164C16.2839 13.5164 16.3164 13.5229 16.3468 13.5355C16.3772 13.5481 16.4048 13.5666 16.428 13.5899L21.471 18.6329C21.5402 18.7045 21.623 18.7616 21.7145 18.8008C21.806 18.8401 21.9045 18.8607 22.0041 18.8616C22.1036 18.8624 22.2024 18.8434 22.2945 18.8056C22.3867 18.7679 22.4704 18.7121 22.5408 18.6417C22.6112 18.5712 22.6668 18.4875 22.7045 18.3953C22.7422 18.3031 22.7611 18.2043 22.7602 18.1047C22.7593 18.0051 22.7385 17.9067 22.6992 17.8152C22.6598 17.7238 22.6027 17.641 22.531 17.5719L17.488 12.5289C17.4412 12.4818 17.415 12.4182 17.415 12.3519C17.415 12.2855 17.4412 12.2219 17.488 12.1749L23.688 5.97488C23.7136 5.94917 23.7464 5.93172 23.782 5.92477Z"
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
