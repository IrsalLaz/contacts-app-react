/* eslint-disable react/prop-types */
import React from "react";

class ContactInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			tag: "",
		};

		this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
		this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onNameChangeHandler(event) {
		this.setState(() => {
			return {
				name: event.target.value,
			};
		});
	}

	onTagChangeHandler(event) {
		this.setState(() => {
			return {
				tag: event.target.value,
			};
		});
	}

	onSubmitHandler(event) {
		event.preventDefault();
		this.props.addContact(this.state);
	}

	render() {
		return (
			<form className="contact-input" onSubmit={this.onSubmitHandler}>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Contact Name"
					onChange={this.onNameChangeHandler}
				/>
				<input
					type="text"
					name="tag"
					id="tag"
					placeholder="Tag"
					onChange={this.onTagChangeHandler}
				/>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default ContactInput;
