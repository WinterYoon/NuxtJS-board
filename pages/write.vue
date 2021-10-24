<template>
  <div class="wrapper">
     <header class="writeHeader">글쓰기</header>
     <div class="inputWrapper">
       <div>닉네임</div>
       <input v-model="nickname" type="text"/>
     </div>
     <div class="inputWrapper">
       <div>제목</div>
       <input v-model="title" type="text"/>
     </div>
     <div class="inputWrapper">
       <div>내용</div>
       <textarea v-model="content" type="text" />
     </div>
     <div class="writeBtnBox">
       <button @click="write" @keyup.enter="write" class="writeBtn">작성</button>
       <button @click="goToMain" class="cancelBtn">취소</button>
      </div>
  </div>
</template>


<script>

export default {
  name: 'write',
  data() {
    return {
      nickname: '',
      title: '',
      content: '',
    }
  },

  methods: {
    goToMain(){
      this.$router.push({path:"/", query:this.body});
    },

    write(){

      let contentIndex = this.$store.state.list.length + 1

      let content = {

        nickname : this.nickname,
        title : this.title,
        content : this.content,
        contentIndex : contentIndex
        
      }

      this.$store.dispatch("addContentsToList", content)
      this.$router.push({
        path:'/list'
      })   
    }
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

.wrapper {
  margin: 100px auto 0 auto;
  padding: 0 40px;
  text-align: center;
}

.writeHeader {
  padding: 20px 0;
  font-size: 25px;
  font-weight: bold;
}

.inputWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  width: 50%;

}

.inputWrapper div {
  width: 20%;
  font-weight: bold;
}

.inputWrapper input, textarea {
  width: 80%;
  border: 1px solid grey;

}

.writeBtnBox {
  margin-top: 20px;
}

.writeBtn {
  padding: 5px 10px;
  background-color: palevioletred;
  color: white;
  border: none;
  border-radius: 5px;
}

.writeBtn:hover {
  cursor: pointer;
}

.cancelBtn {
  padding: 5px 10px;
  background-color: lightgrey;
  color: black;
  border: none;
  border-radius: 5px;
}

.cancelBtn {
  cursor: pointer;
}
</style>