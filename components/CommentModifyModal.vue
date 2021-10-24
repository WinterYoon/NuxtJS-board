<template>
  <div class="modalWrapper">
      <div class="modalContent">
          <h3>댓글을 수정해주세요</h3>
        <div>
            <span>댓글 내용</span>
            <input v-model="commentContent" />
        </div>
        <button @click="modifyComment" class="inputBtn">댓글수정</button>
        <button @click="$emit('closeModifyModal')" class="closeBtn">X</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CommentModifyModal',

    data(){
        return{
            commentContent: '',
        }
    },

    props: {
        detailIndex: Number
    },

    computed: {
        loadComment() {
            return this.$store.state.commentList.filter(comment => {
                return comment.contentId === this.detailIndex;
        })
    },

    },
    methods: {
        modifyComment(){
            this.loadComment.commentContent = this.commentContent
            this.$emit('closeModifyModal')
        }
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