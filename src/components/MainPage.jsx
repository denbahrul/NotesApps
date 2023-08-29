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
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this)
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

    onArchiveEventHandler(id) {
        const notes = this.state.notes.map(note => (note.id === id ? { ...note, archived: !note.archived} : note));
        this.setState({notes})
    }

    render() {
        const archivedNotes = this.state.notes.filter(note=> note.archived === true)
        const activedNotes = this.state.notes.filter(note=> note.archived === false)
        return (
            <div>
                <Header/>
                <div className="note-app__body">
                    <FormInput addNotes={this.onAddNoteEventHandler}/>
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={activedNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveEventHandler}/>
                    <h2>Arsip</h2>
                    <NoteList notes={archivedNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveEventHandler}/>
                </div>
            </div>
        )
    }
}

export default MainPage;