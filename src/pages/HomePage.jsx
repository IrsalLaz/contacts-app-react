import React from "react";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getContacts, deleteContact } from "../utils/api";

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contacts: [],
			keyword: props.defaultKeyword || "",
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
	}

	async componentDidMount() {
		const { data } = await getContacts();

		this.setState(() => {
			return {
				contacts: data,
			};
		});
	}

	async onDeleteHandler(id) {
		await deleteContact(id);

		const { data } = await getContacts();
		this.setState(() => {
			return {
				contacts: data,
			};
		});
	}

	onKeywordChangeHandler(keyword) {
		this.setState(() => {
			return {
				keyword,
			};
		});

		this.props.keywordChange(keyword);
	}

	render() {
		console.log(this.state.contacts);

		const contacts = this.state.contacts.filter((contact) => {
			return contact.name
				.toLowerCase()
				.includes(this.state.keyword.toLowerCase());
		});

		return (
			<section>
				<SearchBar
					keyword={this.state.keyword}
					keywordChange={this.onKeywordChangeHandler}
				/>

				<h2>Daftar Kontak</h2>

				<ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
			</section>
		);
	}
}

function HomePageWrapper() {
	const [searchParams, setSearchParams] = useSearchParams();

	const keyword = searchParams.get("keyword");

	function changeSearchParams(keyword) {
		setSearchParams({ keyword });
	}

	return (
		<HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
	);
}

HomePage.propTypes = {
	defaultKeyword: PropTypes.string,
	keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
