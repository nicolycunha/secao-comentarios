<template>
  <div
    class="flex p-3 bg-slate-50 rounded-lg w-fit cursor-pointer"
    @click="handleClick"
  >
    <i
      class="pi pi-thumbs-up"
      :class="commentary.isLiked ? 'text-violet-600' : 'text-gray-600'"
    ></i>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>