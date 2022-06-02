<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Employees</p>
        <p class="fst-itatic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum nihil dolorum tempore ex? Architecto consequatur soluta eaque, necessitatibus unde doloribus a officia dolor? Sequi eos laborum culpa distinctio nemo.</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group">
          <li v-for="employee of employeeState.employees" :key="employee.id" class="list-group-item list-group-item-success">
            <input @change="updateSelected(employee.id)" :checked="employee.isSelected" class="form-check-input" type="checkbox">
           {{ employee.name }} 
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-for="employee of employeeState.employees" :key="employee.id">
          <div class="card my-2" v-if="employee?.isSelected">
            <div class="card-body list-group-item-success">
              <ul class="list-group">
                <li class="list-group-item">Id: <span class="fw-bold">{{employee.id}}</span></li>
                <li class="list-group-item">Name: <span class="fw-bold">{{employee.name}}</span></li>
                <li class="list-group-item">Email: <span class="fw-bold">{{employee.email}}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "VuexEmployeesComponent",
  methods: {
    updateSelected: function(employeeId) {
      this.$store.dispatch("employee/changeSelected", {employeeId: employeeId})
    }
  },
  computed: mapGetters({
    employeeState: "getEmployeeState"
  })
}
</script>

<style scoped>

</style>