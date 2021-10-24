<template>
  <div class="wrapper">
     <header class="writeHeader">글 수정하기</header>
     <div class="inputWrapper">
       <div>제목</div>
       <input v-model="title" type="text" />
     </div>
     <div class="inputWrapper">
       <div>내용</div>
       <textarea v-model="content" type="text" />
     </div>
       <button @click="modify" @keyup.enter="write">수정하기</button>
  </div>
</template>


<script>

export default {
  name: 'modify',

  data() {
    return {
      title: this.$route.params.selectContent.title,
      content: this.$route.params.selectContent.content
    }
  },

  methods: {
    modify(){
        this.$route.params.selectContent.title = this.title,
        this.$route.params.selectContent.content = this.content    
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
</style>