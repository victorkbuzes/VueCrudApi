<template>
  <div class="card" v-for="product in products" :key="product.id">
    <div class="card-content">
      <div class="media">
        <div class="media-left"></div>
        <div class="media-content">
          <p class="title is-4">{{ product.title }}</p>
          <p class="subtitle is-6">{{ product.price }}</p>
          <p class="subtitle is-6">{{ product.description }}</p>
          <p class="subtitle is-6">{{ product.category }}</p>
        </div>
      </div>
      <div class="content">
        {{ product.category }}
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const products = ref([]);
    const API_URL = "https://fakestoreapi.com/products";

    axios.get(API_URL).then((res) => {
      products.value = res.data;
      console.log(res.data);
    });

    return {
      products,
    };
  },
};
</script>

<style lang="scss" scoped></style>
