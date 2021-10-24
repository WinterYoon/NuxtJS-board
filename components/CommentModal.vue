<template>
  <div class="modalWrapper">
      <div class="modalContent">
          <h3>댓글을 입력해주세요</h3>
          <div>
            <span>닉네임</span>
            <input v-model="commentId"/>
        </div>
        <div>
            <span>댓글 내용</span>
            <input v-model="commentContent" />
        </div>
        <button @click="writeComment" class="inputBtn">댓글 입력</button>
        <button @click="$emit('closeModal')" class="closeBtn">X</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CommentModal',

    data(){
        return {
            commentId: '',
            commentContent: '',
            commentList : this.$store.state.commentList,
        }
    },

    methods: {
        writeComment(){

            let commentIndex = this.commentList.length + 1

            let commentData = {
                contentId: this.detailIndex,
                commentId: this.commentId,
                commentContent: this.commentContent,
                commentIndex: commentIndex
            }

            this.$store.dispatch("addCommentToList", commentData)
            this.$emit('closeModal')
        },

    },

    props: {
        detailIndex: Number
    }
}
</script>

<style>

.modalWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 101;
}

.modalContent {
  position: relative;
  padding: 50px;
  text-align: center;
  border-radius: 10px;
  border: none;
  background-color: white;
  color: black;
  font-size: 15px;
  line-height: 1.5em;
  letter-spacing: -0.04em;
}

.inputBtn {
    margin-top: 30px;
}

.closeBtn {
    position: absolute;
    top: 5px;
    right: 15px;
    padding-top: 1px;
    font-size: 10px;
   
}

</style>