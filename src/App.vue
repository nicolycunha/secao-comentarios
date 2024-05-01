<template>
  <section class="flex flex-col gap-6 items-center justify-center h-screen">
    <Comment
      v-for="commentary in commentaries"
      :key="commentary.id"
      :commentary="commentary"
      @handleLike="handleLike(commentary)"
    />
    <NewComment />
  </section>
</template>

<script setup lang="ts">
import Comment from "./components/Comment.vue";
import NewComment from "./components/NewComment.vue";
import { v4 as uuidv4 } from "uuid";
import { Commentary } from "./interfaces/Commentary";
import { reactive } from "vue";

const commentaries = reactive<Commentary[]>([
  {
    id: uuidv4(),
    image: "/src/assets/images/user.png",
    name: "amyrobson",
    replies: [],
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,cupiditate neque quas!",
    isLiked: false,
    date: new Date("2024-04-01"),
  },
]);

function handleLike(commentary: Commentary) {
  commentary.isLiked = !commentary.isLiked;
  console.log(commentary.isLiked);
}
</script>

<style scoped>
</style>
