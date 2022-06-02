<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Counter</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint possimus illum laborum culpa porro obcaecati? Sequi rem voluptatem, repellat nobis quidem natus error autem ipsam facere laudantium porro, aliquid mollitia!</p>
      </div>
    </div>
  </div>
  
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ count }}</p>
            <button @click="clickIncrement()" class="btn btn-success m-1">Increment</button>
            <button @click="clickDecrement()" class="btn btn-danger m-1">Decrement</button>
            <button @click="clickIncrementby(count)" class="btn btn-warning m-1">Increment By</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CounterComponent",
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    clickIncrement: function() {
      this.count = this.count + 1
    },
    clickDecrement: function() {
      this.count = this.count - 1
    },
    clickIncrementby: function(value) {
      this.count = this.count + value
    },
  }
}
</script>

<style scoped>

</style>