# Vue Router
![alt text](https://github.com/shimdev/vue-router/blob/master/src/assets/display.gif)

Vue.js memiliki *router* resmi, yaitu Vue Router yang berguna untuk melakukan *routing* serta membangun SPA (Single Page Application). *Routing* mengatur alur seluruh halaman *website*. Dengan menggunakan Vue Router, navigasi antar halaman bisa dilakukan tanpa perlu *reload* dan *passing* parameter *query* pun lebih mudah dilakukan. Fitur Vue Router lainnya bisa dilihat di [Router: Introduction](https://router.vuejs.org/).

## Instalasi Proyek
1. Unduh atau salin proyek:
```
git clone https://github.com/shimdev/vue-router
```
2. Arahkan ke direktori proyek tersebut kemudian: **npm install**
3. Setelah proses instalasi *node modules* selesai, jalankan proyek dengan: **npm run serve**
```
App running at:
- Local: http://localhost:8081/
- Network: http://your.ip:8081/
```
4. Buka *url* di atas menggunakan *browser*

## Bedah Direktori
| Direktori  | Penjelasan |
| ------------- | ------------- |
| src/router/... | Berisi **index.js** yang berguna untuk memetakan *route* **path** beserta **komponennya**. *Path* merupakan lokasi yang bisa diakses di-*address bar browser* guna menampilkan komponen. |
| src/components/... | Terdapat komponen-komponen yang nantinya akan ditampilkan apabila *path*-nya telah diatur |

## Bedah Koding
```
<router-link to="/path"></router-link>
<router-view/>
```
Apabila sebuah *link* -yang menampung sebuah komponen dan lokasinya telah dikonfigurasi pada **index.js**- diklik, maka komponen yang disimpan dalam lokasi tersebut akan dimuat di **router-view**.

| Elemen  | Fungsi |
| ------------- | ------------- |
| router-link | Membuat *link* ke sebuah komponen |
| router-view | Menampung komponen yang akan ditampilkan |
