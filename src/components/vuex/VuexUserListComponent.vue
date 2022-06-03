<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="fst-itatic h3 text-success">User List from</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veniam eveniet atque magnam. Rerum quae fugit quia sunt temporibus, quibusdam debitis possimus voluptatem, laudantium, numquam suscipit facilis corrupti non libero.</p>
      </div>
    </div>
  </div>

  <div v-if="userState.loading" class="container">
    <div class="row">
      <div class="col">
        <SpinnerComponent/>
      </div>
    </div>
  </div>

  <div v-if="!userState.loading && userState.users.length <= 0" class="container">
    <div class="">
      <div class="col">
        <p class="fw-bold text-danger"> {{ userState }} </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-secondary text-white">
            <tr>
              <th>Serial No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in userState.users" :key="user.id">
              <td>{{user.id}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.website}}</td>
              <td>{{user.company.name}}</td>
              <td>{{user.address.city}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComponent from '../SpinnerComponent.vue';
import { mapGetters } from 'vuex';

export default {
  components: { SpinnerComponent },
  name: "VuexUserListComponent",
  created: function () {
    this.$store.dispatch("users/getUsers");
  },
  computed: mapGetters({
    userState: "getUserState"
  })
}
</script>

<style scoped>

</style>