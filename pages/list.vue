<template>
    <div class="container">
        <header class="listHeader">글 리스트</header>
        <div class="listTitleBox">
            <div> </div>
            <el-input class="listTitle" placeholder="제목으로 검색" v-model="searchName" />
        
        </div>
        <table class="listTable">
            <thead>
                <tr :key="index" v-for="(menu, index) in menulist">
                    <th>{{menu.number}}</th>
                    <th>{{menu.title}}</th>
                    <th>{{menu.nickname}}</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="index" v-for="(value, index) in callData" @click="detail(index)">
                        <td>{{value.contentIndex}}</td>
                        <td>{{value.title}}</td>
                        <td>{{value.nickname}}</td>
                </tr>
            </tbody>
      </table>
      <div class="btnContainer">
            <button @click="write">글쓰기</button>
            <button @click="main">메인으로</button>
      </div>
      <div class="pageBtn">
            <button :disabled="pageNumber === 1" @click="prevPage">◀</button>
            <span> {{pageNumber}} / {{numOfPages}} </span>
            <button :disabled="pageNumber === numOfPages" @click="nextPage">▶</button>
      </div>
    </div>
</template>


<script>
import menulist from '../data/menulist'

export default {
    name: 'list',
    data() {
        return {
            menulist: menulist,
            pageNumber: 1,
            pageSize: 5,
            searchName: '',
            searchedData: []
        }
    },
    computed: {
        loadListData() {
            return this.$store.getters.reverseList;
        },

        startPage(){
            return( (this.pageNumber - 1) * this.pageSize);
        },

        endPage(){
            return( (this.startPage + this.pageSize));
        },

        numOfPages(){
            return Math.ceil(this.sortedData.length / this.pageSize);
        },

        sortedData(){
            if(this.searchName){
                this.searchedData = this.loadListData.filter(
                    data => {
                        return data.title.toLowerCase().includes(this.searchName.toLowerCase());
                    }
                );
                return this.loadListData = this.searchedData;
            } else {
                return this.loadListData = this.loadListData;
            }
        },
        
        callData(){
            return this.sortedData.slice(this.startPage, this.endPage)
        },

    },

    

    methods: {
        write(){
            this.$router.push({
                path: "/write"
            })
        },

        main(){
            this.$router.push({
                path: "/"
            })
        },

        nextPage(){
            this.pageNumber += 1;
        },

        prevPage(){
            this.pageNumber -= 1;
        },

        detail(index) {
            const myIndex = this.callData[index].contentIndex
            this.$router.push({
                name: 'detail',
                params: {
                    contentId: myIndex,
                    contentList: this.loadListData
                },
                path:'/detail'
            })
        },
    },
  }
</script>

<style>

* {
    box-sizing: border-box;
}

.container {
  margin: 100px auto 0 auto;
  padding: 0 40px;
}

.listHeader {
  padding: 20px 0;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}

.listTitleBox {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
}

.listTitleBox input {
    margin: 0 2px;
}


.listTable {
  width: 100%;
  border-collapse: initial;
}

.listTable thead {
    background-color: palevioletred;
    color: white;
    font-weight: bold;
}

.listTable th, td {
  padding: 10px;
  text-align: center;
}

.listTable tbody tr:hover {
    cursor: pointer;
    background-color: #f3f3f3;
}

.inputContainer {
    margin-bottom: 10px;
}

.inputContainer input {
    float: right;
}

.btnContainer {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.btnContainer button {
    padding: 5px 10px;
    background-color: lightgrey;
    color: black;
    border: none;
    border-radius: 5px;
}

.btnContainer button:hover {
    background-color: palevioletred;
    color: white;
    cursor: pointer;
}

.pageBtn {
    text-align: center;
}

.pageBtn button {
    padding: 1px 5px;
    border-radius: 70px;
}

</style>