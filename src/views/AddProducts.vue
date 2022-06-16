<template>
  <div class="field">
    <label class="label">Title</label>
    <div class="control">
      <input class="input" type="text" placeholder="Text input" />
    </div>
  </div>

  <div class="field">
    <label class="label">Price</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="Text input" />
    </div>
  </div>

  <div class="field">
    <label class="label">Description</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="Description" />
    </div>
  </div>

  <div class="field">
    <label class="label">Category</label>
    <div class="control has-icons-left has-icons-right">
      <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button type="submit" class="button is-success">Submit</button>
    </div>
  </div>
</template>

//
<script>
// import { ref } from "vue";
// import { useRoute, useRouter } from "vue-router";

// export default {
//   setup() {
//     const route = useRoute();
//     const router = useRouter();
//     const showProductByid = () => {
//       alert(`the id of this post is: ${route.params.id}`);
//     };

//     const goHome = () => {
//       setTimeout(() => {
//         router.push({ name: "home" });
//       }, 200);
//     };
//     const goProductsPage = () => {
//       router.push({
//         name: "productsDetail",
//         params: {
//           id: "id1",
//         },
//       });
//     };

//     const product_title = ref("");
//     const product_price = ref("");
//     const product_description = ref("");
//     const product_category = ref("");

//     const API_URL = "https://fakestoreapi.com/products";

//     async function createProducts() {
//       const responce = await fetch(API_URL, {
//         method: "POST",
//         body: JSON.stringify({
//           title: product_title.value,
//           price: product_price.value,
//           description: product_description.value,
//           category: product_category.value,
//         }),
//       });
//       const json = await responce.json();
//       console.log(json);
//       if (responce.ok) {
//         router.push({
//           name: "home",
//         });
//       } else {
//       }
//     }

//     return {
//       product_title,
//       product_description,
//       product_price,
//       product_category,
//       createProducts,
//     };
//   },
// };
//
</script>

<style lang="scss" scoped></style>
