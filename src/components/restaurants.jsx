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
						d="M20.995 3.25C20.995 2.55964 20.4353 2 19.745 2H5.16166C4.4713 2 3.91166 2.55964 3.91166 3.25V3.875C3.91166 4.10512 4.09821 4.29167 4.32833 4.29167H5.125C5.47018 4.29167 5.74999 4.57149 5.74999 4.91667C5.74999 5.26184 5.47018 5.54167 5.125 5.54167H2.625C2.27982 5.54167 2 5.82149 2 6.16667C2 6.51185 2.27982 6.79167 2.625 6.79167H3.49499C3.72511 6.79167 3.91166 6.97821 3.91166 7.20833V10.5417C3.91166 10.7718 4.09821 10.9583 4.32833 10.9583H5.125C5.47018 10.9583 5.74999 11.2382 5.74999 11.5833C5.74999 11.9285 5.47018 12.2083 5.125 12.2083H2.625C2.27982 12.2083 2 12.4882 2 12.8333C2 13.1785 2.27982 13.4583 2.625 13.4583H3.49499C3.72511 13.4583 3.91166 13.6449 3.91166 13.875V17.2083C3.91166 17.4385 4.09821 17.625 4.32833 17.625H5.125C5.47018 17.625 5.74999 17.9048 5.74999 18.25C5.74999 18.5952 5.47018 18.875 5.125 18.875H2.625C2.27982 18.875 2 19.1548 2 19.5C2 19.8452 2.27982 20.125 2.625 20.125H3.49499C3.72511 20.125 3.91166 20.3115 3.91166 20.5417V20.75C3.91166 21.4404 4.4713 22 5.16166 22H19.745C20.4353 22 20.995 21.4404 20.995 20.75V3.25ZM10.9825 10.5167C10.836 10.5852 10.7424 10.7324 10.7425 10.8942V16.5833C10.7425 16.9285 10.4627 17.2083 10.1175 17.2083C9.77231 17.2083 9.49249 16.9285 9.49249 16.5833V10.8958C9.49254 10.7341 9.39898 10.5869 9.25249 10.5183C8.53463 10.1816 8.07678 9.45958 8.07833 8.66667V7.58334C8.07833 6.85393 8.46747 6.17991 9.09916 5.81521C9.73086 5.4505 10.5091 5.4505 11.1408 5.81521C11.7725 6.17991 12.1617 6.85393 12.1617 7.58334V8.66667C12.1606 9.45982 11.7011 10.1809 10.9825 10.5167ZM18.7008 8.45833C18.7214 9.66126 18.0013 10.7534 16.8875 11.2083C16.7254 11.2693 16.6178 11.4243 16.6175 11.5975V16.5833C16.6175 16.9285 16.3377 17.2083 15.9925 17.2083C15.6473 17.2083 15.3675 16.9285 15.3675 16.5833V11.6008C15.3673 11.4278 15.2602 11.2729 15.0983 11.2117C13.9842 10.757 13.2637 9.6648 13.2842 8.46166V6.16667C13.2842 5.82149 13.564 5.54167 13.9092 5.54167C14.2543 5.54167 14.5342 5.82149 14.5342 6.16667V8.45833C14.5293 8.9136 14.699 9.35346 15.0083 9.6875C15.0671 9.74924 15.1576 9.76888 15.2368 9.73712C15.3159 9.70536 15.3677 9.6286 15.3675 9.54333V6.16667C15.3675 5.82149 15.6473 5.54167 15.9925 5.54167C16.3377 5.54167 16.6175 5.82149 16.6175 6.16667V9.54333C16.6173 9.6286 16.6691 9.70536 16.7482 9.73712C16.8273 9.76888 16.9179 9.74924 16.9767 9.6875C17.2864 9.35369 17.4561 8.91368 17.4508 8.45833V6.16667C17.4508 5.82149 17.7307 5.54167 18.0758 5.54167C18.421 5.54167 18.7008 5.82149 18.7008 6.16667V8.45833Z"
						fill="#121E31"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon