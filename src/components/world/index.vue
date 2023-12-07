<template>
  <div>
    <h3>{{ message }}</h3>
    <SideBar></SideBar>
  </div>
</template>

<script setup>
import SideBar from '../../layout/SideBar.vue';
const message = "helloWorld"
</script>

<style scoped></style>