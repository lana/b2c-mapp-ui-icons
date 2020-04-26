import { Component } from 'preact'
import CSS from './styles.css'

class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg
					width="312"
					height="208"
					viewBox="0 0 312 208"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_d)">
						<rect x="16" y="12" width="280" height="176" rx="16" fill="#DFE1E6" />
					</g>
					<mask
						id="mask0"
						mask-type="alpha"
						maskUnits="userSpaceOnUse"
						x="16"
						y="12"
						width="280"
						height="176"
					>
						<path
							d="M16 28C16 19.1634 23.1634 12 32 12H280C288.837 12 296 19.1634 296 28V172C296 180.837 288.837 188 280 188H32C23.1634 188 16 180.837 16 172V28Z"
							fill="#C4C4C4"
						/>
					</mask>
					<g mask="url(#mask0)">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M266.021 119.509C266.021 121.226 267.416 122.62 269.134 122.62H272.07C273.787 122.62 275.18 121.226 275.18 119.509V91.4965H266.021V119.509Z"
							fill="#19194B"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M358.963 55.1362C357.543 55.5022 356.378 56.5115 355.817 57.8642L354.7 60.5571C354.141 61.9097 354.251 63.4464 354.994 64.7081C359.813 72.8736 358.574 83.5561 351.737 90.3876C344.368 97.7527 332.524 98.6172 324.18 92.4021L321.443 91.4941H270.555L267.818 92.4021C259.48 98.6193 247.632 97.7527 240.265 90.3876C233.426 83.5541 232.187 72.8736 237.006 64.7081C237.753 63.4485 237.863 61.9097 237.3 60.5571L236.185 57.8642C235.626 56.5115 234.459 55.5022 233.039 55.1362C223.856 52.7701 217.174 44.3398 217.174 34.6769C217.174 25.016 223.856 16.5858 233.039 14.2197C234.459 13.8536 235.626 12.8443 236.185 11.4917L237.3 8.7988C237.863 7.44409 237.753 5.90737 237.006 4.64573C232.187 -3.51564 233.428 -14.1982 240.265 -21.0317C244.338 -25.1042 249.78 -27.191 255.245 -27.191C258.928 -27.191 262.62 -26.2417 265.908 -24.3141C267.186 -23.5633 268.736 -23.4268 270.108 -23.9956L272.8 -25.1104C274.156 -25.6688 275.166 -26.8332 275.532 -28.2521C277.899 -37.431 286.333 -44.1074 295.999 -44.1074C305.667 -44.1074 314.101 -37.431 316.47 -28.2521C316.836 -26.8332 317.846 -25.6709 319.2 -25.1104L321.892 -23.9956C323.245 -23.4351 324.782 -23.5447 326.047 -24.2872C334.212 -29.1042 344.9 -27.8653 351.737 -21.0317C358.574 -14.2003 359.813 -3.5177 354.994 4.6478C354.251 5.90944 354.141 7.44616 354.7 8.7988L355.817 11.4917C356.378 12.8443 357.543 13.8536 358.963 14.2197C368.144 16.5858 374.826 25.016 374.826 34.6769C374.826 44.3398 368.144 52.7701 358.963 55.1362ZM364.405 6.35825C369.441 -4.87655 367.206 -18.5167 358.216 -27.5075C349.22 -36.4962 335.574 -38.7299 324.333 -33.6916C319.949 -45.1973 308.719 -53.2656 295.999 -53.2656C283.283 -53.2656 272.051 -45.1973 267.666 -33.6916C256.426 -38.7299 242.781 -36.4962 233.786 -27.5075C224.793 -18.5167 222.561 -4.87449 227.597 6.35825C216.086 10.7409 208.016 21.9654 208.016 34.6769C208.016 47.3905 216.086 58.615 227.597 62.9976C222.556 74.2304 224.791 87.8726 233.786 96.8613C239.626 102.698 247.427 105.687 255.257 105.687C261.088 105.684 266.942 104.026 272.008 100.65H319.992C331.859 108.559 348.022 107.047 358.216 96.8613C367.206 87.8747 369.441 74.2324 364.405 62.9976C375.914 58.615 383.984 47.3905 383.984 34.6769C383.984 21.9654 375.914 10.7409 364.405 6.35825Z"
							fill="#19194B"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M358.963 14.2193C357.543 13.8532 356.378 12.8439 355.817 11.4912L354.7 8.79836C354.141 7.44572 354.251 5.909 354.994 4.64736C359.813 -3.51814 358.574 -14.2007 351.737 -21.0322C344.9 -27.8657 334.212 -29.1046 326.047 -24.2876C324.782 -23.5431 323.245 -23.4355 321.892 -23.996L319.197 -25.1108C317.846 -25.6713 316.836 -26.8337 316.47 -28.2525C314.101 -37.4314 305.667 -44.1078 295.999 -44.1078C286.333 -44.1078 277.899 -37.4314 275.532 -28.2525C275.166 -26.8337 274.156 -25.6692 272.8 -25.1108L270.108 -23.996C268.736 -23.4272 267.186 -23.5637 265.908 -24.3125C262.62 -26.2421 258.928 -27.1894 255.245 -27.1894C249.78 -27.1894 244.338 -25.1046 240.265 -21.0322C233.428 -14.1986 232.187 -3.51607 237.006 4.64736C237.753 5.90693 237.863 7.44572 237.3 8.79836L236.185 11.4912C235.626 12.8439 234.459 13.8532 233.039 14.2193C223.856 16.5854 217.174 25.0156 217.174 34.6785C217.174 44.3394 223.856 52.7696 233.039 55.1357C234.459 55.5018 235.624 56.5111 236.185 57.8638L237.3 60.5566C237.863 61.9113 237.753 63.4481 237.006 64.7097C232.187 72.8731 233.426 83.5536 240.265 90.3872C247.632 97.7543 259.48 98.6209 267.818 92.4017L270.555 91.4937H321.443L324.18 92.4017C332.524 98.6189 344.368 97.7543 351.737 90.3872C358.574 83.5557 359.813 72.8731 354.994 64.7076C354.251 63.446 354.141 61.9093 354.7 60.5566L355.817 57.8638C356.378 56.5111 357.543 55.5018 358.963 55.1357C368.144 52.7696 374.826 44.3394 374.826 34.6785C374.826 25.0156 368.144 16.5854 358.963 14.2193Z"
							fill="white"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M333.645 41.3785C331.735 37.9989 329.363 34.8531 326.541 32.032L325.502 30.9937C324.289 29.7797 322.317 29.7797 321.103 30.9937L319.027 33.0703C317.813 34.2844 317.813 36.2533 319.027 37.4674L320.066 38.5057C326.493 44.9318 330.034 53.4737 330.034 62.5596C330.034 81.1346 315.06 96.2785 296.54 96.5701C277.747 96.8658 261.967 81.3456 261.967 62.5596C261.967 53.4737 265.508 44.9318 271.937 38.5057L272.976 37.4674C274.19 36.2533 274.19 34.2844 272.976 33.0703L270.896 30.9937C269.681 29.7797 267.711 29.7797 266.497 30.9937L265.458 32.032C262.638 34.8531 260.266 37.9989 258.356 41.3785C254.003 38.3754 250.837 33.7921 249.657 28.5408H258.896C260.614 28.5408 262.006 27.1509 262.006 25.4322V23.9637C262.006 19.3949 265.713 15.6907 270.286 15.6907C274.081 15.6907 277.274 18.247 278.248 21.73C278.621 23.0578 279.85 23.9616 281.228 23.9616H285.056C286.434 23.9616 287.663 23.0578 288.036 21.73C289.012 18.247 292.203 15.6907 296 15.6907C299.798 15.6907 302.99 18.247 303.963 21.73C304.335 23.0578 305.567 23.9616 306.945 23.9616H310.771C312.149 23.9616 313.38 23.0578 313.753 21.73C314.725 18.247 317.918 15.6907 321.715 15.6907C326.286 15.6907 329.992 19.3949 329.992 23.9637V25.4322C329.992 27.1509 331.385 28.5408 333.104 28.5408H342.344C341.162 33.7921 337.998 38.3754 333.645 41.3785Z"
							fill="white"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M283.186 43.0114C280.609 43.0114 278.52 45.0982 278.52 47.6753C278.52 50.2503 280.609 52.3371 283.186 52.3371C285.762 52.3371 287.852 50.2503 287.852 47.6753C287.852 45.0982 285.762 43.0114 283.186 43.0114Z"
							fill="#19194B"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M303.776 89.0718C303.776 93.3655 300.293 96.8443 295.999 96.8443C291.705 96.8443 288.223 93.3655 288.223 89.0718H303.776Z"
							fill="#19194B"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M333.645 41.3784C331.735 37.9989 329.363 34.8531 326.541 32.032L325.502 30.9937C324.289 29.7796 322.317 29.7796 321.103 30.9937L319.027 33.0702C317.813 34.2843 317.813 36.2533 319.027 37.4674L320.066 38.5056C326.493 44.9317 330.034 53.4736 330.034 62.5595C330.034 81.1346 315.06 96.2784 296.54 96.57C277.747 96.8658 261.967 81.3455 261.967 62.5595C261.967 53.4736 265.508 44.9317 271.937 38.5056L272.976 37.4674C274.19 36.2533 274.19 34.2843 272.976 33.0702L270.896 30.9937C269.681 29.7796 267.711 29.7796 266.497 30.9937L265.458 32.032C262.638 34.8531 260.266 37.9989 258.356 41.3784C254.003 38.3753 250.837 33.792 249.657 28.5407H258.896C260.614 28.5407 262.006 27.1509 262.006 25.4321V23.9637C262.006 19.3949 265.713 15.6906 270.286 15.6906C274.081 15.6906 277.274 18.247 278.248 21.7299C278.621 23.0578 279.85 23.9616 281.228 23.9616H285.056C286.434 23.9616 287.663 23.0578 288.036 21.7299C289.012 18.247 292.203 15.6906 296 15.6906C299.798 15.6906 302.99 18.247 303.963 21.7299C304.335 23.0578 305.567 23.9616 306.945 23.9616H310.771C312.149 23.9616 313.38 23.0578 313.753 21.7299C314.725 18.247 317.918 15.6906 321.715 15.6906C326.286 15.6906 329.992 19.3949 329.992 23.9637V25.4321C329.992 27.1509 331.385 28.5407 333.104 28.5407H342.344C341.162 33.792 337.998 38.3753 333.645 41.3784ZM348.901 19.3845H338.542C336.527 11.9884 329.746 6.53442 321.715 6.53442C316.631 6.53442 312.046 8.72058 308.857 12.2015C305.668 8.72058 301.085 6.53442 296 6.53442C290.916 6.53442 286.333 8.72058 283.142 12.2015C279.953 8.72058 275.368 6.53442 270.284 6.53442C262.253 6.53442 255.474 11.9884 253.456 19.3845H243.1C241.382 19.3845 239.99 20.7785 239.99 22.4952V23.9637C239.99 34.789 245.858 44.5139 254.704 49.8749C253.384 54.1893 252.728 58.7332 252.815 63.3868C253.251 86.8823 272.752 105.871 296.267 105.731C319.96 105.586 339.194 86.2763 339.194 62.5595C339.194 58.1893 338.545 53.9204 337.301 49.8604C337.301 49.8624 337.303 49.8666 337.305 49.8687C346.145 44.5077 352.011 34.7869 352.011 23.9637V22.4952C352.011 20.7785 350.619 19.3845 348.901 19.3845Z"
							fill="#19194B"
						/>
					</g>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M66.1981 34.1843C64.8604 34.1843 63.5254 34.7854 62.4381 35.7252V35.3701C62.4381 34.8243 61.9955 34.3816 61.4497 34.3816H60.9553C60.4094 34.3816 59.9669 34.8243 59.9669 35.3701V47.305C59.9669 47.851 60.4094 48.2935 60.9553 48.2935H61.4497C61.9955 48.2935 62.4381 47.851 62.4381 47.305V38.0162C63.4617 37.1077 64.794 36.57 65.9952 36.57C67.8152 36.57 69.4105 37.6289 69.4154 40.0787V47.305C69.4154 47.851 69.858 48.2935 70.4038 48.2935H70.8978C71.4439 48.2935 71.8866 47.8508 71.8864 47.3046L71.8839 40.0918C71.8839 36.4118 69.6532 34.1843 66.1981 34.1843ZM93.4703 45.5395C93.4703 45.0977 93.1805 44.7238 92.7802 44.5972C92.9733 44.225 92.9144 43.7555 92.6017 43.443C92.2891 43.1305 91.8194 43.0712 91.447 43.2647C91.3206 42.8645 90.9468 42.5745 90.5049 42.5745C90.0627 42.5745 89.6889 42.8645 89.5624 43.2647C89.19 43.0712 88.7203 43.1305 88.4077 43.443C88.095 43.7555 88.0361 44.225 88.2292 44.5972C87.8294 44.7238 87.5391 45.0977 87.5391 45.5395C87.5391 45.9814 87.8294 46.3554 88.2292 46.4818C88.0361 46.8542 88.095 47.3237 88.4077 47.6362C88.7203 47.9487 89.19 48.008 89.5624 47.8145C89.6889 48.2146 90.0627 48.5046 90.5049 48.5046C90.9468 48.5046 91.3206 48.2146 91.447 47.8145C91.8194 48.008 92.2891 47.9487 92.6017 47.6362C92.9144 47.3237 92.9733 46.8542 92.7802 46.4818C93.1805 46.3554 93.4703 45.9814 93.4703 45.5395ZM82.9018 44.3197C81.6549 45.5987 80.2391 46.2757 78.6235 46.2757C77.0764 46.2757 75.9504 45.4241 75.9504 44.1051C75.9504 42.3197 77.9016 41.7875 79.3327 41.7875C80.5126 41.7875 81.7347 41.8502 82.9018 42.0187V44.3197ZM79.4026 34.1843C77.8229 34.1843 76.3967 34.6915 75.2029 35.4926C74.7343 35.8072 74.6284 36.4523 74.9666 36.904L75.2123 37.2317C75.5219 37.6449 76.0956 37.7472 76.533 37.4727C77.3767 36.944 78.3497 36.6179 79.4026 36.6179C81.4499 36.6179 82.9018 37.5916 82.9018 39.6887V39.9681C81.7457 39.7469 80.5796 39.6096 79.4026 39.6096C76.1169 39.6096 73.6609 41.2094 73.6609 44.0641C73.6609 46.5935 75.6712 48.5046 78.4956 48.5046C80.1461 48.5046 81.6275 47.9116 82.9018 46.7619V47.305C82.9018 47.851 83.3441 48.2935 83.89 48.2935H84.3847C84.9306 48.2935 85.3729 47.851 85.3729 47.305V39.6647C85.3729 36.3319 83.01 34.1843 79.4026 34.1843ZM43.7343 45.9461H41.2809V30.6876C41.2809 30.1417 40.8383 29.6992 40.2923 29.6992H37.5739C37.0279 29.6992 36.5853 30.1417 36.5853 30.6876V31.0582C36.5853 31.6041 37.0279 32.0466 37.5739 32.0466H38.8095V45.9461H36.3559C35.8101 45.9461 35.3676 46.3886 35.3676 46.9343V47.305C35.3676 47.851 35.8101 48.2935 36.3559 48.2935H43.7343C44.2803 48.2935 44.7228 47.851 44.7228 47.305V46.9343C44.7228 46.3886 44.2803 45.9461 43.7343 45.9461ZM55.0472 44.3197C53.8 45.5987 52.3846 46.2757 50.769 46.2757C49.2218 46.2757 48.0957 45.4241 48.0957 44.1051C48.0957 42.3197 50.0471 41.7875 51.4782 41.7875C52.6579 41.7875 53.8801 41.8502 55.0472 42.0187V44.3197ZM51.5481 34.1843C49.9681 34.1843 48.5421 34.6915 47.3482 35.4926C46.8796 35.8072 46.7736 36.4523 47.112 36.904L47.3576 37.2317C47.6673 37.6449 48.241 37.7472 48.6785 37.4727C49.5219 36.944 50.4949 36.6179 51.5481 36.6179C53.5952 36.6179 55.0472 37.5916 55.0472 39.6887V39.9681C53.8912 39.7469 52.7249 39.6096 51.5481 39.6096C48.2622 39.6096 45.8063 41.2094 45.8063 44.0641C45.8063 46.5935 47.8165 48.5046 50.6411 48.5046C52.2913 48.5046 53.7731 47.9116 55.0472 46.7619V47.305C55.0472 47.851 55.4896 48.2935 56.0357 48.2935H56.5298C57.0759 48.2935 57.5184 47.851 57.5184 47.305V39.6647C57.5184 36.3319 55.1551 34.1843 51.5481 34.1843Z"
						fill="#19194B"
					/>
					<path
						d="M234.916 177.829V174.777C234.934 174.521 234.897 174.263 234.806 174.022C234.715 173.781 234.574 173.562 234.39 173.379C234.207 173.196 233.987 173.054 233.743 172.962C233.5 172.87 233.24 172.83 232.98 172.845C232.639 172.823 232.299 172.891 231.995 173.043C231.69 173.195 231.433 173.425 231.249 173.709C231.082 173.434 230.842 173.208 230.556 173.056C230.269 172.904 229.947 172.831 229.622 172.845C229.338 172.831 229.056 172.89 228.803 173.016C228.55 173.143 228.335 173.333 228.179 173.567V172.967H227.108V177.829H228.19V175.154C228.167 174.987 228.181 174.818 228.232 174.658C228.283 174.498 228.369 174.351 228.484 174.228C228.599 174.104 228.741 174.007 228.898 173.944C229.056 173.881 229.225 173.853 229.395 173.862C230.106 173.862 230.466 174.32 230.466 175.144V177.849H231.548V175.154C231.526 174.988 231.541 174.819 231.592 174.659C231.643 174.499 231.73 174.353 231.845 174.23C231.959 174.106 232.1 174.01 232.257 173.946C232.414 173.883 232.584 173.854 232.753 173.862C233.484 173.862 233.835 174.32 233.835 175.144V177.849L234.916 177.829ZM250.919 172.967H249.157V171.492H248.076V172.967H247.097V173.933H248.096V176.171C248.096 177.3 248.539 177.971 249.806 177.971C250.28 177.973 250.744 177.843 251.145 177.595L250.836 176.69C250.549 176.859 250.223 176.953 249.889 176.964C249.374 176.964 249.178 176.639 249.178 176.151V173.933H250.929L250.919 172.967ZM260.056 172.845C259.794 172.837 259.536 172.899 259.308 173.025C259.079 173.15 258.889 173.334 258.758 173.557V172.967H257.697V177.829H258.768V175.103C258.768 174.299 259.118 173.852 259.798 173.852C260.027 173.849 260.255 173.89 260.468 173.974L260.797 172.957C260.553 172.87 260.295 172.825 260.035 172.824L260.056 172.845ZM246.242 173.353C245.636 172.997 244.938 172.821 244.233 172.845C242.987 172.845 242.173 173.435 242.173 174.401C242.173 175.194 242.771 175.683 243.873 175.835L244.388 175.906C244.975 175.988 245.253 176.14 245.253 176.415C245.253 176.791 244.862 177.005 244.13 177.005C243.542 177.022 242.965 176.843 242.493 176.496L241.977 177.32C242.602 177.751 243.349 177.972 244.11 177.951C245.531 177.951 246.355 177.29 246.355 176.364C246.355 175.439 245.706 175.062 244.635 174.91L244.12 174.838C243.657 174.777 243.286 174.686 243.286 174.36C243.286 174.035 243.636 173.791 244.223 173.791C244.766 173.797 245.298 173.941 245.768 174.208L246.242 173.353ZM274.935 172.845C274.674 172.837 274.416 172.899 274.187 173.025C273.959 173.15 273.769 173.334 273.637 173.557V172.967H272.576V177.829H273.648V175.103C273.648 174.299 273.998 173.852 274.678 173.852C274.907 173.849 275.134 173.89 275.347 173.974L275.677 172.957C275.432 172.87 275.174 172.825 274.915 172.824L274.935 172.845ZM261.132 175.388C261.119 175.729 261.179 176.07 261.307 176.388C261.435 176.705 261.629 176.993 261.876 177.232C262.124 177.472 262.419 177.657 262.743 177.778C263.067 177.898 263.413 177.95 263.759 177.931C264.402 177.963 265.034 177.756 265.53 177.351L265.015 176.496C264.645 176.775 264.194 176.929 263.728 176.934C263.332 176.902 262.962 176.725 262.693 176.436C262.424 176.148 262.274 175.77 262.274 175.378C262.274 174.985 262.424 174.607 262.693 174.319C262.962 174.031 263.332 173.853 263.728 173.821C264.194 173.826 264.645 173.98 265.015 174.259L265.53 173.404C265.034 172.999 264.402 172.792 263.759 172.824C263.413 172.805 263.067 172.857 262.743 172.977C262.419 173.098 262.124 173.283 261.876 173.523C261.629 173.762 261.435 174.05 261.307 174.368C261.179 174.685 261.119 175.026 261.132 175.367V175.388ZM271.165 175.388V172.967H270.094V173.557C269.912 173.326 269.677 173.14 269.408 173.017C269.14 172.893 268.845 172.834 268.549 172.845C267.866 172.845 267.211 173.113 266.728 173.59C266.245 174.066 265.973 174.713 265.973 175.388C265.973 176.062 266.245 176.709 266.728 177.186C267.211 177.663 267.866 177.931 268.549 177.931C268.845 177.941 269.14 177.883 269.408 177.759C269.677 177.635 269.912 177.45 270.094 177.219V177.809H271.165V175.388ZM267.179 175.388C267.196 175.102 267.297 174.826 267.471 174.597C267.644 174.367 267.882 174.192 268.154 174.093C268.427 173.995 268.723 173.978 269.006 174.043C269.288 174.109 269.545 174.255 269.745 174.463C269.945 174.671 270.078 174.932 270.13 175.215C270.181 175.497 270.147 175.788 270.033 176.051C269.919 176.315 269.73 176.54 269.488 176.699C269.246 176.857 268.963 176.943 268.672 176.944C268.468 176.947 268.266 176.907 268.078 176.829C267.89 176.751 267.721 176.635 267.581 176.489C267.44 176.342 267.332 176.169 267.263 175.98C267.194 175.79 267.165 175.589 267.179 175.388ZM254.251 172.845C253.568 172.854 252.917 173.131 252.441 173.615C251.964 174.098 251.702 174.749 251.712 175.423C251.721 176.098 252.002 176.741 252.492 177.211C252.981 177.681 253.64 177.94 254.323 177.931C255.064 177.968 255.793 177.733 256.368 177.27L255.853 176.486C255.446 176.808 254.942 176.987 254.421 176.995C254.067 177.025 253.715 176.917 253.44 176.695C253.165 176.473 252.988 176.153 252.948 175.805H256.605C256.605 175.673 256.605 175.54 256.605 175.398C256.605 173.872 255.647 172.855 254.266 172.855L254.251 172.845ZM254.251 173.791C254.411 173.787 254.571 173.815 254.72 173.873C254.87 173.93 255.006 174.016 255.122 174.126C255.238 174.235 255.33 174.366 255.395 174.511C255.459 174.656 255.494 174.812 255.497 174.971H252.922C252.941 174.644 253.088 174.338 253.333 174.117C253.577 173.897 253.899 173.78 254.23 173.791H254.251ZM281.09 175.398V171.014H280.06V173.557C279.878 173.326 279.643 173.14 279.374 173.017C279.106 172.893 278.811 172.834 278.515 172.845C277.832 172.845 277.177 173.113 276.694 173.59C276.211 174.066 275.94 174.713 275.94 175.388C275.94 176.062 276.211 176.709 276.694 177.186C277.177 177.663 277.832 177.931 278.515 177.931C278.811 177.941 279.106 177.883 279.374 177.759C279.643 177.635 279.878 177.45 280.06 177.219V177.809H281.09V175.398ZM282.877 177.122C282.944 177.121 283.011 177.133 283.073 177.158C283.132 177.181 283.186 177.216 283.233 177.259C283.278 177.303 283.315 177.355 283.341 177.412C283.367 177.471 283.38 177.535 283.38 177.6C283.38 177.665 283.367 177.729 283.341 177.788C283.315 177.845 283.278 177.897 283.233 177.941C283.186 177.984 283.132 178.019 283.073 178.043C283.011 178.069 282.945 178.083 282.877 178.083C282.78 178.083 282.684 178.054 282.602 178.002C282.52 177.95 282.455 177.876 282.414 177.788C282.388 177.729 282.375 177.665 282.375 177.6C282.375 177.535 282.388 177.471 282.414 177.412C282.44 177.355 282.477 177.303 282.522 177.259C282.568 177.216 282.622 177.181 282.681 177.158C282.749 177.131 282.821 177.119 282.893 177.122H282.877ZM282.877 177.982C282.929 177.982 282.98 177.971 283.027 177.951C283.071 177.932 283.111 177.904 283.145 177.87C283.209 177.8 283.245 177.71 283.245 177.615C283.245 177.521 283.209 177.43 283.145 177.361C283.111 177.327 283.071 177.299 283.027 177.28C282.979 177.259 282.929 177.249 282.877 177.249C282.826 177.249 282.775 177.26 282.728 177.28C282.682 177.298 282.64 177.326 282.604 177.361C282.54 177.43 282.504 177.521 282.504 177.615C282.504 177.71 282.54 177.8 282.604 177.87C282.64 177.905 282.682 177.932 282.728 177.951C282.78 177.973 282.836 177.984 282.893 177.982H282.877ZM282.908 177.376C282.956 177.374 283.004 177.388 283.042 177.417C283.058 177.43 283.07 177.446 283.078 177.465C283.086 177.483 283.09 177.504 283.088 177.524C283.089 177.541 283.086 177.558 283.08 177.573C283.074 177.589 283.064 177.603 283.052 177.615C283.022 177.642 282.984 177.658 282.944 177.661L283.094 177.829H282.975L282.836 177.661H282.79V177.829H282.692V177.381L282.908 177.376ZM282.795 177.463V177.585H282.908C282.928 177.591 282.95 177.591 282.97 177.585C282.974 177.578 282.975 177.57 282.975 177.562C282.975 177.554 282.974 177.546 282.97 177.539C282.974 177.532 282.975 177.524 282.975 177.516C282.975 177.508 282.974 177.5 282.97 177.493C282.95 177.487 282.928 177.487 282.908 177.493L282.795 177.463ZM277.129 175.398C277.146 175.112 277.248 174.837 277.421 174.607C277.595 174.377 277.832 174.202 278.105 174.104C278.378 174.005 278.674 173.988 278.956 174.054C279.239 174.119 279.496 174.265 279.696 174.473C279.895 174.681 280.029 174.943 280.08 175.225C280.132 175.507 280.098 175.798 279.984 176.062C279.87 176.325 279.681 176.55 279.439 176.709C279.197 176.867 278.913 176.953 278.623 176.954C278.419 176.957 278.217 176.918 278.029 176.839C277.841 176.761 277.672 176.645 277.531 176.499C277.391 176.353 277.283 176.179 277.214 175.99C277.145 175.8 277.116 175.599 277.129 175.398ZM240.958 175.398V172.967H239.886V173.557C239.704 173.326 239.469 173.14 239.201 173.017C238.932 172.893 238.638 172.834 238.341 172.845C237.658 172.845 237.003 173.113 236.52 173.59C236.037 174.066 235.766 174.713 235.766 175.388C235.766 176.062 236.037 176.709 236.52 177.186C237.003 177.663 237.658 177.931 238.341 177.931C238.638 177.941 238.932 177.883 239.201 177.759C239.469 177.635 239.704 177.45 239.886 177.219V177.809H240.958V175.398ZM236.971 175.398C236.988 175.112 237.09 174.837 237.263 174.607C237.437 174.377 237.674 174.202 237.947 174.104C238.22 174.005 238.516 173.988 238.798 174.054C239.081 174.119 239.338 174.265 239.538 174.473C239.737 174.681 239.871 174.943 239.922 175.225C239.974 175.507 239.94 175.798 239.826 176.062C239.712 176.325 239.522 176.55 239.281 176.709C239.039 176.867 238.755 176.953 238.465 176.954C238.26 176.958 238.057 176.92 237.868 176.842C237.679 176.765 237.508 176.649 237.366 176.503C237.225 176.356 237.116 176.182 237.046 175.992C236.976 175.802 236.947 175.6 236.961 175.398H236.971Z"
						fill="#231F20"
					/>
					<path d="M262.111 135.916H245.887V164.708H262.111V135.916Z" fill="#FF5F00" />
					<path
						d="M246.917 150.315C246.914 147.542 247.55 144.804 248.777 142.309C250.004 139.815 251.789 137.629 253.999 135.916C251.263 133.794 247.978 132.474 244.519 132.107C241.06 131.741 237.566 132.343 234.437 133.844C231.308 135.346 228.67 137.687 226.824 140.599C224.979 143.511 224 146.877 224 150.312C224 153.748 224.979 157.114 226.824 160.026C228.67 162.938 231.308 165.279 234.437 166.78C237.566 168.282 241.06 168.884 244.519 168.517C247.978 168.151 251.263 166.831 253.999 164.708C251.79 162.996 250.005 160.811 248.778 158.317C247.551 155.824 246.915 153.087 246.917 150.315Z"
						fill="#EB001B"
					/>
					<path
						d="M284 150.314C284 153.75 283.021 157.116 281.175 160.028C279.329 162.941 276.69 165.281 273.561 166.782C270.431 168.284 266.937 168.885 263.478 168.518C260.019 168.152 256.734 166.831 253.999 164.707C256.206 162.994 257.991 160.808 259.218 158.314C260.445 155.821 261.083 153.084 261.083 150.312C261.083 147.539 260.445 144.803 259.218 142.309C257.991 139.815 256.206 137.629 253.999 135.916C256.734 133.792 260.019 132.472 263.478 132.105C266.937 131.738 270.431 132.339 273.561 133.841C276.69 135.342 279.329 137.683 281.175 140.595C283.021 143.507 284 146.873 284 150.309V150.314Z"
						fill="#F79E1B"
					/>
					<path
						d="M282.228 161.656V161.066H282.47V160.944H281.857V161.066H282.12V161.656H282.228ZM283.418 161.656V160.944H283.233L283.016 161.453L282.8 160.944H282.635V161.656H282.769V161.122L282.97 161.585H283.109L283.31 161.122V161.661L283.418 161.656Z"
						fill="#F79E1B"
					/>
					<defs>
						<filter
							id="filter0_d"
							x="0"
							y="0"
							width="312"
							height="208"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="8" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
						</filter>
					</defs>
				</svg>
			</i>
		)
	}
}

export default Icon
