<template>
  <div id="classForm">
    <h5>Tambah Kelas</h5>
    <form action="">
      Kelas
      <input type="radio" name="class" value="X" checked> X
      <input type="radio" name="class" value="XI"> XI
      <input type="radio" name="class" value="XII"> XII<br><br>
      Jurusan
      <select name="vocation">
        <option value="RPL">Rekayasa Perangkat Lunak</option>
        <option value="TKJ">Teknik Komputer Jaringan</option>
        <option value="MM">Multimedia</option>
      </select><br><br>
      Rinci
      <select name="detail">
        <option value="">-</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select><br><br>
      <input type="submit" value="Tambah">
    </form>
  </div>
</template>

<script>
export default {
  name: 'classForm'
}
</script>