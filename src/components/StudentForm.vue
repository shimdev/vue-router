<template>
    <div>
    <h5>Tambah Siswa</h5>
    <form action="">
      Nis
      <input type="text" name="id-number"> <br><br>
      Nama
      <input type="text" name="name"> <br><br>
      Jurusan
      <select name="vocation">
        <option value="1">X/RPL 1</option>
        <option value="2">X/RPL 2</option>
        <option value="3">X/RPL 3</option>
      </select> <br><br>
      Foto
      <input type="file" name="photo"> <br><br>
      <input type="submit" value="Tambah">
    </form>
  </div>
</template>

<script>
export default {
  name: 'studentForm'
}
</script>