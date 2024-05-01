<template>
  <Card class="w-8/12">
    <template #title>
      <section class="flex justify-between">
        <div class="flex items-center gap-6 h-2rem">
          <div
            class="flex p-3 bg-slate-50 rounded-lg w-fit cursor-pointer"
            @click="handleClick"
          >
            <i
              class="pi pi-thumbs-up"
              :class="commentary.isLiked ? 'text-violet-800' : 'text-gray-600'"
            ></i>
          </div>
          <img
            class="h-[32px]"
            :src="commentary.image"
            alt="Foto de perfil de usuário"
          />
          <span class="text-base font-normal text-gray-700">{{
            commentary.name
          }}</span>
          <timeago
            class="text-base font-normal text-gray-400"
            :datetime="commentary.date"
            :locale="ptBR"
          />
        </div>
        <Button
          class="text-violet-800 text-base"
          icon="pi pi-comment"
          label="Responder"
          text
        />
      </section>
    </template>
    <template #content>
      <p class="m-0 text-gray-500 pl-16">
        {{ commentary.comment }}
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Commentary } from "../interfaces/Commentary";
import { ptBR } from "date-fns/locale";

const props = defineProps({
  commentary: {
    type: Object as () => Commentary,
    required: true,
  },
});

const handleClick = () => {
  props.commentary.isLiked = !props.commentary.isLiked;
};
</script>

<script lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "Comment",
  components: {
    Card,
    Button,
  },
};
</script>


<style>
</style>