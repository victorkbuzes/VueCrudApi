<template>
  <div>
    <i>"{{ quote }}"</i>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const quote = ref("");
    axios.get("https://api.kanye.rest/").then((response) => {
      quote.value = response.data.data.quote;
    });

    return {
      quote,
    };
  },
};
</script>

<style lang="scss" scoped></style>
