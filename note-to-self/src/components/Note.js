import React, {Component} from 'react';

class Note extends Component {

    render() {
        return (
            <div className='note'>
                <p>{this.props.note.text}
                    <i
                        className="fa fa-pencil" >
                    </i>
                    <i
                        className="fa fa-times">
                    </i>
                </p>
            </div>
        )
    }
}

export default Note;
