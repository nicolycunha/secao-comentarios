<template>
  <section
    class="flex flex-col gap-6 items-center justify-center min-h-screen py-4"
  >
    <CommentComponent
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      @handleLike="handleLike(comment)"
      @sendSubComment="sendSubComment"
    />
    <NewComment @sendComment="sendComment" />
  </section>
</template>

<script setup lang="ts">
import CommentComponent from "./components/Comment.vue";
import NewComment from "./components/NewComment.vue";
//import { v4 as uuidv4 } from "uuid";
import { IComment } from "./interfaces/Comment";
import { reactive } from "vue";
//import comments from "@/mock/comments.json";

const comments = reactive<IComment[]>([]);

//function getComments() {
  //comments.value = comments
//}

function handleLike(comment: IComment) {
  comment.isLiked = !comment.isLiked;
}

function sendComment(comment: IComment) {
  comments.push(Object.assign({}, comment));
  console.log(comments.values);
}

function sendSubComment(subComment: IComment, comment: IComment) {
  comment.replies.push(Object.assign({}, subComment));
}
</script>

<style scoped>
</style>
