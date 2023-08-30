import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import NoteList from "../components/NotesList";

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getArchivedNotes()
        }
    }
    render() {
        return (
            <div>
                <h2>Catatan diarsipkan</h2>
                <NoteList notes={this.state.notes} />
            </div>
        )
    }
}

export default ArchivePage;