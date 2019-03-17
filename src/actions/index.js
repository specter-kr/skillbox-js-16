export const addComment = () => {
    return {
        type: 'ADD_COMMENT'
    }
}

export const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id
    }
}