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
						d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9963 8.81854 22.7308 5.76845 20.4812 3.51881C18.2316 1.26918 15.1815 0.00370522 12 0V0ZM18.927 8.2L12.082 17.489C12.0012 17.5962 11.8998 17.6863 11.7838 17.7539C11.6678 17.8215 11.5395 17.8654 11.4064 17.8829C11.2733 17.9004 11.138 17.8912 11.0085 17.8558C10.879 17.8205 10.7578 17.7597 10.652 17.677L5.76401 13.769C5.66144 13.6869 5.57605 13.5855 5.5127 13.4704C5.44936 13.3553 5.4093 13.2289 5.39481 13.0983C5.36556 12.8346 5.44224 12.5701 5.60801 12.363C5.77377 12.1559 6.01502 12.0231 6.2787 11.9938C6.54237 11.9646 6.80687 12.0412 7.01401 12.207L11.09 15.468L17.317 7.017C17.392 6.90451 17.489 6.80838 17.6021 6.73443C17.7153 6.66048 17.8423 6.61025 17.9754 6.58676C18.1085 6.56327 18.245 6.56702 18.3767 6.59777C18.5083 6.62853 18.6323 6.68565 18.7413 6.7657C18.8502 6.84574 18.9418 6.94705 19.0105 7.06348C19.0792 7.17992 19.1235 7.30907 19.1409 7.44313C19.1582 7.57719 19.1482 7.71339 19.1115 7.84347C19.0747 7.97356 19.012 8.09485 18.927 8.2Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon