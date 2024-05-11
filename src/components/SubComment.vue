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
              :class="subComment.isLiked ? 'text-violet-800' : 'text-gray-600'"
            ></i>
          </div>
          <img
            class="h-[32px]"
            :src="subComment.image"
            alt="Foto de perfil de usuário"
          />
          <span class="text-base font-normal text-gray-700">{{
            subComment.name
          }}</span>
          <Tag v-if="isYou" value="Você" />
          <timeago
            class="text-base font-normal text-gray-400"
            :datetime="subComment.date"
            :locale="ptBR"
          />
        </div>
        <Button
          v-if="isYou"
          class="text-base"
          variant="danger"
          icon="pi pi-comment"
          label="Excluir"
          text
        />
      </section>
    </template>
    <template #content>
      <p class="m-0 text-gray-500 pl-16">
        {{ subComment.text }}
      </p>
    </template>
  </Card>
</template>

<script lang="ts">
import { SubComment } from "../interfaces/SubComment";
import { ptBR } from "date-fns/locale";
import Card from "primevue/card";
import Button from "primevue/button";
import Tag from "primevue/tag";
import { ref } from "vue";

export default {
  name: "SubCommentComponent",
  components: {
    Card,
    Button,
    Tag,
  },
  props: {
    subComment: {
      type: Object as () => SubComment,
      required: true,
    },
  },
  setup(props) {
    const isYou = ref<boolean>(props.subComment.name === "nicunha");

    function handleLike() {
      props.subComment.isLiked = !props.subComment.isLiked;
    }

    return {
      isYou,
      handleLike,
      ptBR,
    };
  },
};
</script>

<style>
</style>