<template>
  <div class="modalWrapper">
      <div class="modalContent">
          <h3>대댓글을 입력해주세요</h3>
          <div>
            <span>닉네임</span>
            <input v-model="commentId"/>
        </div>
        <div>
            <span>댓글 내용</span>
            <input v-model="commentContent" />
        </div>
        <button @click="writeSubComment" class="inputBtn">대댓글 입력</button>
        <button @click="$emit('closeSubModal')" class="closeBtn">X</button>
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
            commentList: this.$store.state.commentList,
            subCommentList: this.$store.state.subCommentList,
            commentIdx: this.commentIndex,
        }
    },

    methods: {
        writeSubComment(){
            let subCommentIndex = this.subCommentList.length + 1

            let subCommentData = {

                subCommentIndex: subCommentIndex,
                contentId:  this.detailIndex,
                commentId: this.commentId,
                commentContent: this.commentContent,
                commentIdx: this.commentIdx
            }
            
            this.$store.dispatch("addSubCommentToList", subCommentData)
            this.$emit('closeSubModal')
        }
    },

    props: {
        detailIndex: Number,
        commentIndex: Number,
        contentId: Number
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
  border-radius: 20px;
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