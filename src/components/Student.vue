<template>
  <div id="student">
    <table>
      <tr>
        <th>Foto</th>
        <th>Nis</th>
        <th>Nama</th>
        <th>Kelas/Jurusan</th>
      </tr>
      <tr>
        <td>
          <img src="/user.jpeg" alt="" width="100" height="100">
        </td>
        <td>1516115566</td>
        <td>Semar Adiputra</td>
        <td>X/RPL 1</td>
      </tr>
      <tr>
        <td>
          <img src="/user-sec.jpeg" alt="" width="100" height="100">
        </td>
        <td>1516115597</td>
        <td>Surya Gunawan</td>
        <td>X/RPL 2</td>
      </tr>
      <tr>
        <td>
          <img src="/user-trd.jpeg" alt="" width="100" height="100">
        </td>
        <td>1516115607</td>
        <td>Adi Mahesa</td>
        <td>X/RPL 3</td>
      </tr>
    </table><br>
    <router-link to="/student-form">Tambah Siswa</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'student'
}
</script>