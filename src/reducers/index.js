import {saveComment} from './savecomments'

const fillComments = (state, action) => {
    switch(action.type){
        case 'ADD_COMMENT':
            const newState = [...state];
            saveComment(newState);
            return newState;
        case 'DELETE_COMMENT':
            const updState = [...state];
            updState.map(com => {
                  if (action.id === com.id){
                    if (action.id === 0){
                        updState.shift();
                        let newComs = JSON.stringify(updState);
                        localStorage.setItem('comments', newComs);
                    }
                    else {
                        updState.splice(action.id, action.id);
                        let newComs = JSON.stringify(updState);
                        localStorage.setItem('comments', newComs);
                    }
                  };
                  return com;
                });
            return updState;
        default: 
            return state;
    }
}

export default fillComments;