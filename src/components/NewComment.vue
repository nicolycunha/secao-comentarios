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
          v-model="comment"
          autoResize
          rows="5"
          cols="30"
          class="w-full px-4 py-2 border-solid border-gray-900"
          placeholder="Adicione um comentário..."
        />
        <Button
          class="bg-violet-800 text-base text-white w-24 max-h-12"
          label="Enviar"
        />
      </section>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const comment = ref("");
</script>


<script lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import Textarea from "primevue/textarea";

export default {
  name: "Comment",
  components: {
    Card,
    Button,
    Textarea,
  },
};
</script>

<style>
textarea {
  resize: none;
}
</style>