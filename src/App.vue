<template>
  <div id="app">
    <div class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="square">
      {{ $store.state.counter }}
      <sup>2</sup> = {{ $store.getters.counterSquare}}
    </div>
    <div class="btns">
      <button @click="$store.dispatch('descreseCount')">-</button>
      <button @click="$store.dispatch('increseCount')">+</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.counter {
  font-size: 3rem;
  font-weight: bold;
}

.square {
  font-size: 1.5rem;
}

.btns button + button {
  margin-left: 1rem;
}
button {
  border: none;
  padding: 7px 1rem;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
