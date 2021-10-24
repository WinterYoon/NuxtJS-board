export const state = () => ({
    list: [],
    commentList: [],
    subCommentList: []
  });
     
export const mutations = {
    addContent(state, list){
        state.list.push(list)
    },

    deleteContent(state, index){
        const itemIndex = state.list.findIndex(item => 
        item.contentIndex === index);
        state.list.splice(itemIndex, 1)    
    },

    addComment(state, comment){
        state.commentList.push(comment)
    },

    deleteComment(state, index){
        state.commentList.splice(index, 1)
    },
    
    addSubComment(state, comment){
        state.subCommentList.push(comment)
    },

    deleteSubComment(state, index){
        const subIndex = state.subCommentList.findIndex(list =>
        list.subCommentIndex === index);
        state.subCommentList.splice(subIndex, 1)
    },

}

export const actions = {
    addContentsToList({commit}, list){
        commit('addContent', list)
    },

    deleteContentsToList({commit}, index){
        commit('deleteContent', index)
    },

    addCommentToList({commit}, comment){
        commit('addComment', comment)
    },

    deleteCommentToList({commit}, index){
        commit('deleteComment', index)
    },
    addSubCommentToList({commit}, comment){
        commit('addSubComment', comment)
    },

    deleteSubCommentToList({commit}, index){
        commit('deleteSubComment', index)
    },
}

export const getters = {
    reverseList : state => {
        return state.list.slice().reverse()
    },
}



