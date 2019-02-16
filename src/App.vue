<template>
  <div id="app">
    <router-link to="/class">Data Kelas</router-link>&nbsp; &nbsp;
    <router-link to="/student">Data Siswa</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  min-width: 50%;
  max-width: 95%;
  margin: 20px auto;
}

td, th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}

td:first-child, th {
  text-align: center;
}

th {
  background-color: #23cea2;
  color: #fff;
}

img { border-radius: 50% }
</style>
