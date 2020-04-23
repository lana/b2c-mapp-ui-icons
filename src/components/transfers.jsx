import { Component } from 'preact'
import CSS from './styles.css'

class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
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
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.4099 9.99999L21.7099 15.3C22.0911 15.6888 22.0911 16.3111 21.7099 16.7L16.7099 21.7C16.4251 21.9871 15.9954 22.0745 15.6211 21.9213C15.2468 21.768 15.0016 21.4044 14.9999 21V18H4.99994C4.44765 18 3.99994 17.5523 3.99994 17V15C3.99994 14.4477 4.44765 14 4.99994 14H7.58994L2.28994 8.70999C2.10063 8.52222 1.99414 8.26662 1.99414 7.99999C1.99414 7.73335 2.10063 7.47775 2.28994 7.28999L7.28994 2.28999C7.57603 2.00153 8.00821 1.91482 8.38342 2.07062C8.75864 2.22641 9.0023 2.59372 8.99994 2.99999V5.99999H18.9999C19.5522 5.99999 19.9999 6.4477 19.9999 6.99999V8.99999C19.9999 9.55227 19.5522 9.99999 18.9999 9.99999H16.4099ZM8.99994 9.99999V14H14.9999V9.99999H8.99994Z"
						fill="#121E31"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon