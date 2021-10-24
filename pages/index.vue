<template>
  <div class="container">
      <NuxtLink to="/write" class="linkBtn">글쓰기</NuxtLink>
      <NuxtLink to="/list" class="linkBtn">리스트</NuxtLink>
      <NuxtLink to="/test" class="linkBtn">테스트</NuxtLink>
      <Nuxt />
  </div>
</template>


<script>
export default {
  
}
</script>

<style>

.container {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.linkBtn {
  margin-top: 10px;
  font-size: 30px;
  
}

</style>