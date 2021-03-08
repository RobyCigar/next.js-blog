Jadi minggu kemarin saya mengikuti mata kuliah statistika praktikum, disitu saya disuruh oleh dosen saya untuk menggunakan software bernama SPSS untuk praktikum.

Namun, software tersebut tidaklah free akan tetapi berbayar, karena waktu itu juga saya dipandu oleh asisten dosen kami sekelas pun dipandu untuk cara instalasinya, nah yang lucu disini adalah, kami, sekelas, diperintahkan untuk **membajak** software tersebut.

> trivia : saya baru tahu arti membajak dalam bahasa Inggris yaitu pirate(bajak laut) hehe.

Karena saya memakai linux dan saya suka produk-produk gratisan lalu saya googling dan menemukan software mirip SPSS, yaitu PSPP(namanya aja mirip wkwkwk).

>  GNU PSPP is a program for statistical analysis of sampled data. It is a free as in freedom replacement for the proprietary program SPSS, and appears very similar to it with a few exceptions.

Singkatnya PSPP diciptakan sebagai pengganti software milik [IBM](https://en.wikipedia.org/wiki/IBM), yaitu SPSS. Ukuran software ini jauuuuuuh lebih kecil dibanding SPSS yaitu 49.2 mb. 

### Instalasi pada Linux Ubuntu

Pada saat artikel ini dibuat, PSPP hanya dapat diinstall oleh ubuntu versi 18.xx kebawah, maka dari itu saya akan menunjukkan *life hack* yang saya dapat dari jawaban stack exchange [disini](https://askubuntu.com/questions/1299854/advice-installing-pspp-on-ubuntu-20-04)

Masuk ke folder download
`cd ~/Downloads`

Download package berikut satu-satu
```
wget -c http://archive.ubuntu.com/ubuntu/pool/universe/g/gsl/libgsl25_2.6+dfsg-2_amd64.deb
```
```
wget -c http://archive.ubuntu.com/ubuntu/pool/universe/g/gsl/libgslcblas0_2.6+dfsg-2_amd64.deb
```
```
wget -c http://archive.ubuntu.com/ubuntu/pool/universe/s/spread-sheet-widget/libspread-sheet-widget_0.6-3_amd64.deb
```
```
wget -c http://archive.ubuntu.com/ubuntu/pool/universe/p/pspp/pspp_1.4.0-3_amd64.deb
```

Install dengan perintah berikut
```
sudo apt-get install ./libgsl25_2.6+dfsg-2_amd64.deb ./libgslcblas0_2.6+dfsg-2_amd64.deb ./libspread-sheet-widget_0.6-3_amd64.deb ./pspp_1.4.0-3_amd64.deb
```
Voila, software PSPP sudah dapat kalian akses.  