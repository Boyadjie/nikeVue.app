<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <router-link to="/"><img src="@/assets/img/logo.svg" alt="Nike logo"></router-link>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <div>
      <div id="searchBar">
        <img src="@/assets/icons/search.svg" alt="Search icon">
        <input type="search" name="searchbar" placeholder="Search">
      </div>
      <div>
        <router-link to="/cart"><img src="@/assets/icons/cart.svg" alt="Cart icon"></router-link>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

nav a.router-link-exact-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

</style>
