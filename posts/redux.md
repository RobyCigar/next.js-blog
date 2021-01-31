---
title: 'Data Flow pada Redux'
date: '2020-01-01'
---
Ketika kita membuat aplikasi react biasa, yang terjadi dibalik layar adalah sebagai berikut:

1. Kita membuat state untuk suatu komponen.
2. UI merender state tersebut.
3. Ketika terjadi action pada UI, seperti mengeklik tombol, **state awal tersebut akan terupdate**.
4. Lalu, UI akan merender state yang telah diupdate tersebut.


Namun, langkah tersebut akan sangat rumit ketika aplikasi kita mempunyai banyak state, maka dari itu kita memerlukan redux.
Redux akan menyimpan seluruh state kedalam sesuatu bernama **store**, jadi ketika aplikasi kita ingin mengupdate state, kita hanya perlu memanggil store tersebut. Berikut ini alurnya.

![pic](https://dev-to-uploads.s3.amazonaws.com/i/e37ud80ju431rz97ptlp.png)


### Rancangan redux

1. Redux store dibentuk.
2. Store tersebut membuat kumpulan state yang bernama reducer.
3. Ketika komponen akan merender, maka komponen tersebut akan memilih, state mana yang akan di render. Komponen tersebut juga akan terus memperhatikan state yang ada di store tersebut, hal ini yang dinamakan dengan **subscribe**  

### Update state

4. Ketika user mengeklik tombol, maka komponen tersebut akan mengirim data tersebut ke dalam store menggunakan fungsi dispatch `dispatch({type: 'nama aksi'})`.
5. State yang berada di store tersebut lalu akan mengupdate state yang diterima oleh fungsi dispatch tersebut.
6. State tersebut telah berubah, lalu komponen yang telah subscribe ke store tersebut mengupdate state nya.

