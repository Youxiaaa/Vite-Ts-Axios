<template>
  <div>
    <h1>Index Page</h1>
  </div>
</template>
<script lang="ts" setup>
  const api = inject<any>('$api')

  const query = {
    pageNo: 1,
    pageSize: 3
  }

  function getRoomList (): void {
    api.room.getRoomList(query)
    .then((res: any) => console.log(res.result))
    .catch((err: any) => console.log(err))
  }

  getRoomList()
</script>
