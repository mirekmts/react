import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';

import { setStack, loadStacks } from '../actions';

class StackList extends Component {

    componentDidMount() {
        if (this.props.stacks.length === 0) {
            this.props.loadStacks(stacks);
        }
    }
    render() {
        console.log('stacklist porps', this.props)
        return (
            <div>
                {
                    this.props.stacks.map(stack => {
                        return (
                            <Link
                                to='/stack'
                                key={stack.id}
                                onClick={() => this.props.setStack(stack)}
                            >
                                <h4>{stack.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setStack, loadStacks }, dispatch);
}

function mapStateToProps(state) {
    return {
        stacks: state.stacks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StackList);
