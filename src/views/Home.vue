<template>
  <div>
    <RouterLink to="/addProducts" class="button is-success">Create</RouterLink>
    <!-- <router-link to="/addproducts" class="button is-success">Create</router-link> -->
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";

export default {
  components: {
    ProductsList,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
