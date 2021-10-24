<template>
  <div class="detailContainer">
    <header class="detailHeader">글 내용</header>
      <div class="detailContent">
        <div class="detailRow">
          <span class="detailIndex">닉네임</span>
            {{filterList.nickname}}
        </div>
        <div class="detailRow">
          <span class="detailIndex">제목</span>
            {{filterList.title}}
        </div>
        <div class="detailContent">{{filterList.content}}</div>
      </div>
      <div class="detailBtn">
        <p>추천 : {{like}} </p>
        <button @click="likeContent" class="detailButton">추천</button>
        <button @click="goToList" class="detailButton">리스트로가기</button>
        <div>
          <button @click="modifyContent" class="detailButton">게시글 수정</button>
          <button @click="deleteContent" class="detailButton">게시글 삭제</button>
        </div>

      </div>
      <div class="detailComment">
          <button @click="modalOpen" class="detailButton">댓글 작성하기</button>
          <CommentList :detailIndex="index" />
          <CommentModal v-if="isModal==true" 
          @closeModal="isModal=false" :detailIndex="index" />
              
      </div>
  </div>
</template>

<script>

export default {
    name: 'detail',

    computed: {
      filterList() {
        const index = this.$route.params.contentId

        return this.$route.params.contentList.filter( item => {
          return item.contentIndex === index;
           })[0]
      }
    },

    data() {
        return {
            index: this.$route.params.contentId,
            like: 0,
            isModal: false,
        }
    },

    methods: {
        goToList() {
            this.$router.push({
            path: '/list',
            });
        },

        deleteContent(){
            const deleteIndex = this.$route.params.contentId
            this.$store.dispatch("deleteContentsToList", deleteIndex)
            alert("글이 삭제되었습니다! 리스트로 이동합니다");
            this.$router.push({
                path: '/list'
            })     
        },

        modifyContent(){
          const modifyIndex = this.$route.params.contentId
          this.$router.push({
            name: 'modify',
            params: {
              contentIdx: modifyIndex,
              selectContent: this.filterList
            },
            path: '/modify'
          })
        },

        likeContent(){
            this.like++
        },

        modalOpen(){
            this.isModal = true
        },
  }
}

</script>

<style>

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}
.detailContainer {
  margin: 100px auto 0 auto;
  padding: 0 40px;
}

.detailHeader {
  padding: 20px 0;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}

.detailContent {
    margin: 20px 0;
    padding: 0 10px 100px 10px;
}

.detailBtn {
    margin-top: 20px;
    text-align: center;
}

.detailButton {
  padding: 5px 10px;
  margin-bottom: 10px;
  background-color: lightgrey;
  color: black;
  border: none;
  border-radius: 5px;
}

.detailButton:hover {
  cursor: pointer;
  background-color: palevioletred;
  color: white;
}


.detailIndex {
    margin-right: 10px;
    font-weight: bold;
}

.detailRow {
    padding: 10px;
    border-bottom: 1px solid black;
}



</style>