import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addStack } from '../actions';


class StackForm extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            cards: []
        };
    }

    addCard() {
        const { cards } = this.state;

        cards.push({id: cards.length, prompt: '', answer: ''});

        this.setState({ cards });
    }

    updatedCardPart(event, index, part) {
        const { cards } = this.state;

        cards[index][part] = event.target.value;

        this.setState({ cards });
    }

    addStack() {
        this.props.addStack(this.state);
    }
    render() {
        return (
            <div>
                <Link className="link-home" to='/'>
                    <h4>Home</h4>
                </Link>
                <h4>Create a New Stack</h4>
                <Form inline>
                    <FormGroup>
                      <Label for="title">Title: </Label>
                      <Input type="text" id="title" onChange={event => this.setState({ title: event.target.value})} />
                    </FormGroup>
                    {
                        this.state.cards.map((card, index) => {
                            return (
                                <div key={card.id}>
                                    <br />
                                    <FormGroup>
                                        <Label for="prompt">Prompt: </Label>
                                        <Input
                                            type="text"
                                            id="prompt"
                                            onChange={event => this.updatedCardPart(event, index, 'prompt')}
                                        />
                                        <Label for="answer">Answer: </Label>
                                        <Input
                                            type="text"
                                            id="answer"
                                            onChange={event => this.updatedCardPart(event, index, 'answer')}
                                        />
                                    </FormGroup>
                                </div>
                            )
                        })
                    }
                </Form>
                <br/>
                <Button color='primary' onClick={() => this.addCard()}>Add Card</Button>
                <Button color='success' onClick={() => this.addStack()}>Save and Add the Stack</Button>
            </div>
        )
    }
}

export default connect(null, { addStack })(StackForm);
