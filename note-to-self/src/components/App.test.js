import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
    let app = mount(<App />);

    it('renders the App title', () => {
        expect(app.find('h2').text()).toEqual('Note to self');
    });

    it('renders the claer button', () => {
        expect(app.find('.btn').at(1).text()).toEqual('Clear Notes');
    });

    describe('When rendering the form', () => {
        it('creates a form component', () => {
            expect(app.find('Form').exists()).toBe(true);
        });

        it('renders a form COntroler component', () => {
            expect(app.find('Input').exists()).toBe(true);
        });

        it('renders a submit button', () => {
            expect(app.find('.btn').at(0).text()).toEqual('Submit');
        });
    });

    describe('When creating a note', () => {
        let testNote = 'test note';

        beforeEach(() => {
            app.find('Input').simulate('change', {
                target: { value: testNote }
            });
        });

        it('updates the texy in state', () => {
            expect(app.state().text).toEqual(testNote);
        });

        describe('and submiting the new note', () => {
            beforeEach(() => {
                app.find('.btn').at(0).simulate('click');
            });

            afterEach(() => {
                app.find('.btn').at(1).simulate('click');
            });

            it('adds the new to state', () => {
                expect(app.state().notes[0].text).toEqual(testNote);
            });

            describe('and remoting the component', () => {
                let app2;

                beforeEach(() => {
                    app2 = mount(<App />);
                });

                it('reads the stored not ecookies', () => {
                    expect(app2.state().notes).toEqual([{text: testNote}]);
                });
            });

            describe('and clicking the clear button', () => {
                beforeEach(() => {
                    app.find('.btn').at(1).simulate('click');
                });

                it('clears the notes in state', () => {
                    expect(app.state().notes).toEqual([]);
                });
            });
        });
    });
});
