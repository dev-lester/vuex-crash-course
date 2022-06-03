<template>
  <NavBarComponent/>
  <router-view/>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent'

export default {
  components: { 
    NavBarComponent,
  }
}
</script>

<style>
  @import "style.css";
</style>
