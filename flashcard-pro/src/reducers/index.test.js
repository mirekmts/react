import rootReducer from './index';
import * as actions from '../actions';
import { stack, stacks } from '../data/fixtures';

describe('rot reducer', () => {
    it('retusn the initial state', () => {
        expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: []});
    });

    it('sets the main stack', () => {
        expect(rootReducer({}, { type: actions.SET_STACK, stack }))
            .toEqual({ stack, stacks: []});
    });

    it('load stacks', () => {
        expect(rootReducer({}, { type: actions.LOAD_STACK, stacks}))
            .toEqual({ stack: {}, stacks});
    });

    it('adds a stack', () => {
        expect(rootReducer({}, { type: actions.ADD_STACK, stack}))
            .toEqual({ stack: {}, stacks: [stack]});
    })
});
