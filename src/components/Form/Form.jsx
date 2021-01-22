import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: "",
            firstName: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const value = event.target.value;
        console.log(field, ':', value);
        this.setState({
            [field]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const fullName = `${this.state.lastName} ${this.state.firstName}`;
        window.alert(`姓名 : ${fullName}`);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    姓:
                    <input
                        type="text"                         //特に意味はない、どの様なtypeか分かりやすいように宣言しているだけ
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    名:
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <input type="submit" value="送信" />
            </form>
        );
    }
}

export default Form;