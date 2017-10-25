import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';


class App extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        }
    }

    componentDidMount() {
        this.setState({ notes: read_cookie(cookie_key) });
    }

    submit() {
        // ES5
        // const notes = this.state.notes;
        // const newNote = {text: this.state.text};
        // notes.push(newNote);
        // this.setState({notes});

        // ES6
        const { notes, text } = this.state;
        if (!text) {
            return false;
        }
        notes.push({ text });  //notes.push({ text: text });
        this.setState({ notes, text: '' });

        bake_cookie(cookie_key, this.state.notes);
    }

    clear() {
        delete_cookie(cookie_key);
        this.setState({ notes: []});
    }

    render() {
        return (
            <div>
                <h2>Note to self</h2>
                <Form inline>
                    <FormGroup>
                        <Input
                            value={this.state.text}
                            onChange={event => this.setState({text: event.target.value})} placeholder="What you want Todo" />
                        <Button color="primary" style={{marginLeft: '5px'}} onClick={() => this.submit()}>Submit</Button>
                    </FormGroup>
                </Form>
                {
                    this.state.notes.map((note, index) => {
                        return (
                            <Note
                                key={index}
                                index={index}
                                note={note}
                             />
                        )
                    })
                }
                <hr />
                <Button color="danger" onClick={() => this.clear()}>Clear Notes</Button>
            </div>
        )
    }
}

export default App;
