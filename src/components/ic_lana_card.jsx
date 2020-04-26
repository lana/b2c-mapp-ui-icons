import { Component } from 'preact'
import CSS from './styles.css'

class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg
					width="40"
					height="28"
					viewBox="0 0 40 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="1"
						y="1"
						width="38"
						height="26"
						rx="3"
						fill="#00A0DF"
						stroke="#19194B"
						stroke-width="2"
					/>
					<circle cx="33" cy="20" r="3" fill="#FAC34B" />
					<circle cx="29" cy="20" r="3" fill="#EB4B68" />
					<mask
						id="mask0"
						mask-type="alpha"
						maskUnits="userSpaceOnUse"
						x="2"
						y="2"
						width="15"
						height="24"
					>
						<rect
							x="17"
							y="26"
							width="15"
							height="24"
							transform="rotate(-180 17 26)"
							fill="#C4C4C4"
						/>
					</mask>
					<g mask="url(#mask0)">
						<path
							d="M-4.8531 17.178C-6.14607 16.7509 -7.08336 15.4902 -7.08336 14C-7.08336 12.5098 -6.14607 11.2484 -4.8531 10.822C-5.47773 9.56608 -5.2863 7.98258 -4.27617 6.92853C-3.2667 5.87448 -1.74919 5.67473 -0.545644 6.32721C-0.136955 4.97802 1.07188 4 2.49997 4C3.92807 4 5.13625 4.97802 5.5456 6.32721C6.74915 5.67473 8.26667 5.87448 9.27614 6.92853C10.2863 7.98258 10.4777 9.56608 9.85308 10.822C11.1454 11.2484 12.0833 12.5098 12.0833 14C12.0833 15.4902 11.1454 16.7509 9.85308 17.178C10.4777 18.4332 10.2863 20.0167 9.27614 21.0708C8.26667 22.1248 6.74915 22.3246 5.5456 21.6721C5.13625 23.022 3.92806 24 2.49997 24C1.07188 24 -0.136956 23.022 -0.545646 21.6721C-1.74919 22.3246 -3.2667 22.1248 -4.27617 21.0708C-5.2863 20.0167 -5.47773 18.4332 -4.8531 17.178Z"
							fill="#19194B"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M5.15694 8.44661C5.0143 8.44661 4.87055 8.41774 4.73417 8.35884C4.36449 8.1987 4.10648 7.843 4.0593 7.42802C3.96568 6.60422 3.29523 5.98329 2.50021 5.98329C1.70481 5.98329 1.03473 6.60422 0.941109 7.42764C0.893931 7.84262 0.635924 8.1987 0.266237 8.35884C-0.103818 8.5186 -0.526949 8.45739 -0.841348 8.19832C-1.46462 7.68517 -2.3588 7.74137 -2.92125 8.32843C-3.48334 8.91587 -3.53678 9.85016 -3.04546 10.5011C-2.79778 10.8295 -2.73917 11.2718 -2.8925 11.6579C-3.04546 12.044 -3.3864 12.3135 -3.78373 12.3628C-4.57212 12.4601 -5.16665 13.16 -5.16665 13.9907C-5.16665 14.8215 -4.57213 15.5213 -3.7841 15.6187C-3.3864 15.668 -3.04546 15.9374 -2.8925 16.3236C-2.73917 16.7097 -2.79778 17.152 -3.04546 17.4803C-3.53678 18.1313 -3.48334 19.0656 -2.92125 19.6526C-2.35917 20.2401 -1.46499 20.2959 -0.841349 19.7828C-0.52695 19.5241 -0.103819 19.4629 0.266237 19.6226C0.635923 19.7828 0.89393 20.1388 0.941108 20.5538C1.03473 21.3772 1.70481 21.9982 2.5002 21.9982C3.29523 21.9982 3.96568 21.3769 4.0593 20.5534C4.10648 20.1385 4.36449 19.7828 4.73417 19.6226C5.10423 19.4629 5.52773 19.5245 5.84176 19.7828C6.46503 20.2963 7.35921 20.2401 7.92129 19.6526C8.48375 19.0656 8.53719 18.1313 8.0455 17.4803C7.79782 17.152 7.73958 16.7097 7.89254 16.3236C8.04587 15.9374 8.38681 15.668 8.78414 15.6187C9.57217 15.5213 10.1667 14.8215 10.1667 13.9907C10.1667 13.16 9.57217 12.4601 8.78414 12.3628C8.38644 12.3135 8.0455 12.044 7.89254 11.6579C7.73958 11.2718 7.79782 10.8295 8.04551 10.5011C8.53719 9.84977 8.48375 8.91587 7.92129 8.32843C7.35884 7.74138 6.46503 7.68517 5.84176 8.19832C5.64346 8.36192 5.40131 8.44661 5.15694 8.44661Z"
							fill="white"
						/>
					</g>
					<rect x="17" y="6" width="17" height="2" rx="1" fill="#19194B" />
					<rect x="17" y="10" width="7" height="2" rx="1" fill="#19194B" />
					<rect x="17" y="14" width="7" height="2" rx="1" fill="#19194B" />
					<rect x="25" y="10" width="7" height="2" rx="1" fill="#19194B" />
				</svg>
			</i>
		)
	}
}

export default Icon
