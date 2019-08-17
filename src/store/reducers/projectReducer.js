const initState = {
    projects: [
        { id: '1', title: 'Title No.1', content: 'nsdafebgdsah' },
        { id: '2', title: 'Title No.2', content: 'bvjsh;rewfsf' },
        { id: '3', title: 'Title No.3', content: 'snafhewn;klv' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer