import React from "react";
import { getActiveNotes } from "../utils/local-data";
import NoteList from "../components/NotesList";
import SearchBox from "../components/SearchBox";
import { useSearchParams } from "react-router-dom";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  }

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        };
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
          return {
            keyword,
          }
        });

        this.props.keywordChange(keyword);
      }

    render() {
        const notes = this.state.notes.filter(note=> note.title.toLocaleLowerCase().includes(this.state.keyword.toLocaleLowerCase()));
        return (
            <div>
                <SearchBox  keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <h2>Catatan Aktif</h2>
                <NoteList notes={notes}/>
            </div>
        )
    }
}

export default HomePageWrapper;