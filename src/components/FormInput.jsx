import React from "react";

class FormInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title:'',
            body:'',
            limitChar: 50,
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        const maxChar = 50;
        const titleInput = event.target.value.slice(0, maxChar);
        const titleInputLength = titleInput.length;

        this.setState(() => {
            return {
                title: titleInput,
                limitChar: maxChar - titleInputLength,
            };
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <h2 className="note-input__title">Buat catatan</h2>
                <form className="note-input__body" onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter: {this.state.limitChar}</p>
                    <input type="text" placeholder="Judul catatan..." value={this.state.title} onChange={this.onTitleChangeHandler}/>
                    <textarea type="text" placeholder="Isi catatan..." value={this.state.body} onChange={this.onBodyChangeHandler}/>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default FormInput;