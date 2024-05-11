<template>
  <Card class="w-8/12">
    <template #content>
      <section class="flex gap-4">
        <img
          class="h-[32px]"
          src="/src/assets/images/user.png"
          alt="Foto de perfil de usuário"
        />

        <Textarea
          v-model="comment.text"
          autoResize
          rows="5"
          cols="30"
          class="w-full px-4 py-2 border-solid border-gray-900"
          placeholder="Adicione um comentário..."
        />
        <Button
          class="bg-violet-800 text-base text-white w-24 max-h-12"
          label="Enviar"
          @click="sendComment"
        />
      </section>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Comment } from "../interfaces/Comment";
import { v4 as uuidv4 } from "uuid";
import Card from "primevue/card";
import Button from "primevue/button";
import Textarea from "primevue/textarea";

export default defineComponent({
  name: "NewComment",
  components: {
    Card,
    Button,
    Textarea,
  },
  emits: ["sendComment"],

  setup(_, { emit }) {
    const comment = ref<Comment>({
      id: uuidv4(),
      image: "/src/assets/images/user.png",
      name: "nicunha",
      replies: [],
      text: "",
      isLiked: false,
      date: new Date(),
    });

    function sendComment() {
      comment.value.date = new Date();
      emit("sendComment", comment.value);
      clearComment();
    }

    function clearComment() {
      comment.value.text = "";
    }

    return {
      comment,
      sendComment,
    };
  },
});
</script>

<style>
textarea {
  resize: none;
}
</style>