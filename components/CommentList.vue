<template>
    <div class="commentContainer">
        <div :key="index" v-for="(user, index) in loadCommentData" class="comment" >
            <div>
                <span class="commentId">{{user.commentId}}</span>
                <span>{{user.commentContent}}</span>
            </div>
            <div>
                <button @click="subModalOpen">대댓글달기</button>
                <button @click="modifyComment(index)">수정</button>
                <button @click="deleteComment(index)">삭제</button>        
            </div>
            <div :key="index" v-for="(sub, index) in subComment(index)" class="subComment">
            <div>
                <span class="subCommentId"> → {{sub.commentId}}</span>
                <span>{{sub.commentContent}}</span>
                <button @click="deleteSubComment(index)">삭제</button> 
            </div>
            </div>
             <SubComment v-if="isSubModal==true" @closeSubModal="isSubModal=false" 
                :detailIndex="detailIndex" v-bind:commentIndex="user.commentIndex" />
        </div>
            <CommentModifyModal v-if="isModifyModal==true" 
            @closeModifyModal="isModifyModal=false" :detailIndex="detailIndex"/>
    </div>
</template>

<script>


export default {
    name: 'commentlist',

    data() {
        return  {
            isSubModal: false,
            isModifyModal: false,
            subComment(index){
                return this.$store.state.subCommentList.filter( sub => {
                    return sub.contentId === this.detailIndex
                }).filter( list => {
                    return list.commentIdx === this.loadCommentData[index].commentIndex
                })
            }
        }
    },

    props: {
        detailIndex: Number,
    },

    computed: {
        loadCommentData() {
            return this.$store.state.commentList.filter(comment => {
                return comment.contentId === this.detailIndex;
            })
        },
        filtersubComment: function (index) {
            return this.$store.state.subCommentList.filter( sub => {
                return sub.contentId === this.detailIndex
            }).filter( list => {
                return list.commentIdx === this.loadCommentData[index].commentIndex
            })
        }

    //     subComment() {
    //         return this.$store.state.subCommentList.filter(sub => {
    //             return sub.contentId === this.detailIndex
    //         }).filter( list => {
    //             return list.commentIdx === 2
    //     })
    // },
    },

    methods: {
        deleteComment(index){
            const myIndex = this.loadCommentData[index].commentIndex - 1
            this.$store.dispatch("deleteCommentToList", myIndex)
        },

        modifyComment(index){
            const myIndex = this.loadCommentData[index].commentIndex - 1
            this.modifyModalOpen(myIndex)
        },

        subModalOpen(){
            this.isSubModal = true;
        },

        modifyModalOpen(){
            this.isModifyModal = true
        },
        
        deleteSubComment(index){
            const myIndex = this.subComment(index).subCommentIndex
            this.$store.dispatch("deleteSubCommentToList", myIndex)
        }
    }

}
</script>

<style>

.comment {
    display: flex;
    justify-content: space-between;
    /* border-top: 1px solid black;
    border-bottom: 1px solid black; */
    margin: 10px 0;
    padding: 10px;
    flex-direction: column;
}

.comment button {
    margin-left: auto;
}

.comment p {
    margin-right: 10px;
}

.commentId {
    font-weight: bold;
}

.subComment {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid black;
    /* border-bottom: 1px solid black; */
    margin: 10px 0;
    padding: 10px;
}

.subCommentId {
    margin-left: 30px;
    font-weight: bold;
}


</style>