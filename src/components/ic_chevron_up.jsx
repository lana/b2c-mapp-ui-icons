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
						d="M11.9787 6C11.7334 5.9997 11.4909 6.05172 11.2673 6.15259C11.0437 6.25347 10.8441 6.40087 10.682 6.58498L3.32408 14.9486C3.09152 15.2258 2.97663 15.5829 3.00396 15.9437C3.0313 16.3044 3.1987 16.6402 3.47036 16.8791C3.74203 17.1181 4.0964 17.2412 4.45769 17.2223C4.81899 17.2034 5.15855 17.0438 5.40374 16.7778L11.8377 9.46411C11.8553 9.44403 11.877 9.42794 11.9013 9.41692C11.9256 9.4059 11.952 9.4002 11.9787 9.4002C12.0054 9.4002 12.0318 9.4059 12.0561 9.41692C12.0804 9.42794 12.1021 9.44403 12.1197 9.46411L18.5537 16.7778C18.6724 16.9192 18.8181 17.0355 18.9824 17.1198C19.1466 17.2041 19.3261 17.2547 19.5101 17.2686C19.6942 17.2826 19.8793 17.2596 20.0543 17.201C20.2294 17.1424 20.391 17.0495 20.5296 16.9275C20.6683 16.8056 20.7811 16.6572 20.8616 16.491C20.942 16.3248 20.9884 16.1443 20.9981 15.9599C21.0078 15.7755 20.9805 15.5911 20.9178 15.4174C20.8552 15.2438 20.7585 15.0844 20.6334 14.9486L13.2777 6.58798C13.1153 6.40342 12.9154 6.25554 12.6915 6.15416C12.4675 6.05278 12.2246 6.00023 11.9787 6Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}
export default Icon