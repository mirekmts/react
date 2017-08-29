export default function courses(state = [], action) {
    switch(action.type) {
        case 'CREATE_COURSE':
            // state.push(action.course);
            // return state;
            console.log('...STATE', ...state);
            return [...state,
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}
