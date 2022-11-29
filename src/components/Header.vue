<script>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <router-link to="/"><img src="@/assets/img/logo.svg" alt="Nike logo"></router-link>
    </div>
    <nav>
      <RouterLink to="/">Men</RouterLink>
      <RouterLink to="/women">Women</RouterLink>
      <RouterLink to="/customise">Customise</RouterLink>
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
</template>


<style scoped>
  /* Header */
  /* ----------------------------- */
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Nav */
  /* ----------------------------- */
  nav {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  nav a, header input {
    font-size: 21px;
    font-weight: 400;
  }

  nav a {
    color: white;
    position: relative;
    text-decoration: none;
  }

  nav a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -2px;
    height: 2px;
    width: 70%;
    background-color: #FAFF23;
    transform-origin: left;
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  nav a.router-link-exact-active::after {
    transform: scaleX(1);
  }

  nav a:hover::after{
    transform: scaleX(1);
  }
  /* ----------------------------- */

  header > div:last-of-type {
    display: flex;
  }

  #searchBar {
    background: white;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    gap: 10px;
    border-radius: 50px;
    margin-right: 10px;
  }

  #searchBar input {
    height: 100%;
    border: none;
    background: none;
  }

  #searchBar input:focus-visible {
    outline: none;
  }
  /* ----------------------------- */
</style>