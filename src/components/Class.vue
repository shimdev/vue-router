<template>
  <div id="class">
    <table>
      <tr>
        <th>Id</th>
        <th>Kelas</th>
        <th>Jurusan</th>
        <th>Rinci</th>
      </tr>
      <tr>
        <td>1</td>
        <td>X</td>
        <td>RPL</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>X</td>
        <td>RPL</td>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>X</td>
        <td>RPL</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>X</td>
        <td>TKJ</td>
        <td>2</td>
      </tr>
      <tr>
        <td>5</td>
        <td>X</td>
        <td>TKJ</td>
        <td>3</td>
      </tr>
      <tr>
        <td>6</td>
        <td>X</td>
        <td>MM</td>
        <td>-</td>
      </tr>
    </table><br>
    <router-link to="/class-form">Tambah Kelas</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'class'
}
</script>