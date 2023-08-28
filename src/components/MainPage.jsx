import React from "react";
import Header from "./Header";
import FormInput from "./FormInput";
import NoteList from "./NotesList";
import { getInitialData } from "../utils";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    }

    onAddNoteEventHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,
                    },
                ],

            };
        });
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes })
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="note-app__body">
                    <FormInput addNotes={this.onAddNoteEventHandler}/>
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteEventHandler}/>
                    <h2>Arsip</h2>
                </div>
            </div>
        )
    }
}

export default MainPage;