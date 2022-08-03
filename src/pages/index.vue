<template>
  <div>
    <h1>Index Page</h1>
  </div>
</template>
<script lang="ts" setup>
  const api = inject<any>('$api')

  const getRoomList = () => {
    api.getRoomList()
    .then((res) => console.log(res.result))
  }

  getRoomList()
</script>
