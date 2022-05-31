<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vuex</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/counter" class="nav-link">Counter</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/employees" class="nav-link">Employees</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link">User List</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "NavBarComponent"
}
</script>

<style scoped>

</style>