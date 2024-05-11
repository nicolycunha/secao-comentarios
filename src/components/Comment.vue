<template>
  <Card class="w-8/12">
    <template #title>
      <section class="flex justify-between">
        <div class="flex items-center gap-6 h-2rem">
          <div
            class="flex p-3 bg-slate-50 rounded-lg w-fit cursor-pointer"
            @click="handleLike"
          >
            <i
              class="pi pi-thumbs-up"
              :class="comment.isLiked ? 'text-violet-800' : 'text-gray-600'"
            ></i>
          </div>
          <img
            class="h-[32px]"
            :src="comment.image"
            alt="Foto de perfil de usuário"
          />
          <span class="text-base font-normal text-gray-700">{{
            comment.name
          }}</span>
          <Tag v-if="comment.name == 'nicunha'" value="Você" />
          <timeago
            class="text-base font-normal text-gray-400"
            :datetime="comment.date"
            :locale="ptBR"
          />
        </div>
        <Button
          class="text-violet-800 text-base"
          icon="pi pi-comment"
          label="Responder"
          text
          @click="showReply = true"
        />
      </section>
    </template>
    <template #content>
      <p class="m-0 text-gray-500 pl-16">
        {{ comment.text }}
      </p>
    </template>
  </Card>
  <NewComment v-show="showReply" @sendComment="sendSubComment" />
  <section class="flex items-center w-8/12">
    <Divider layout="vertical" />
    <SubCommentComponent
      v-for="reply in comment.replies"
      class="w-full"
      :key="reply.id"
      :subComment="reply"
    />
  </section>
</template>

<script lang="ts">
import { ref } from "vue";
import NewComment from "./NewComment.vue";
import SubCommentComponent from "./SubComment.vue";
import { Comment } from "../interfaces/Comment";
import { SubComment } from "../interfaces/SubComment";
import { ptBR } from "date-fns/locale";
import Card from "primevue/card";
import Button from "primevue/button";
import Tag from "primevue/tag";
import Divider from "primevue/divider";

export default {
  name: "CommentComponent",
  components: {
    Card,
    Button,
    Tag,
    Divider,
    NewComment,
    SubCommentComponent,
  },
  props: {
    comment: {
      type: Object as () => Comment,
      required: true,
    },
  },
  emits: ["handleReply", "sendSubComment"],
  setup(props, { emit }) {
    const showReply = ref<Boolean>(false);

    function handleLike() {
      props.comment.isLiked = !props.comment.isLiked;
    }

    function handleReply() {}

    function sendSubComment(subComment: SubComment) {
      emit("sendSubComment", subComment, props.comment);
      showReply.value = false;
    }

    return {
      showReply,
      handleLike,
      handleReply,
      sendSubComment,
      ptBR,
    };
  },
};
</script>

<style>
</style>