<template>
  <a class="icon-container" @click="navigateToCart">
    <i class="fa fa-shopping-bag" />
    <span>{{ totalItems }}</span>
  </a>
</template>
<script lang="ts">
import { useCartStore } from "@/store/cart";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CartIcon",
  props: ["navigate"],
  setup() {
    const cartStore = useCartStore();
    const { totalItems } = storeToRefs(cartStore);
    cartStore.load();
    return { cartStore, totalItems };
  },
  methods: {
    navigateToCart() {
      this.navigate("/shopping-cart");
    },
  },
});
</script>
