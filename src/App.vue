<script setup lang="ts">
import { ref } from "vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import { useProducts } from "./composable/useProducts.ts";
import PokemonInfo from "./components/PokemonInfo.vue";

const { products, handleIncrementQuantity, handleDecrementQuantity } =
    useProducts();
</script>

<template>
    <div>
        <h1>My shopping cart</h1>

        <ShoppingCart
            v-for="product in products"
            :name="product.name"
            :quantity="product.quantity"
            @increment="() => handleIncrementQuantity(product.id)"
            @decrement="() => handleDecrementQuantity(product.id)"
        />
    </div>

    <suspense>
        <PokemonInfo />
    </suspense>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
