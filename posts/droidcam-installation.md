---
title: 'Cara Connect Kamera HP dengan Linux Menggunakan Aplikasi Droidcam'
date: '2021-04-22'
desc: 'droidcam, linux, kamera hp menggunakan droidcam, instalasi'
---

Disaat pandemi ini banyak orang yang menggunakan video konferensi seperti zoom atau google meet. Namun, tidak sedikit orang yang bermasalah dengan kamera laptop "kentang" mereka yang kualitasnya sangat buruk, di tutorial kali ini saya akan memberi solusinya dengan cara menghubungkannya dengan hp android menggunakan aplikasi bernama droidcam, aplikasi ini tidak memakan banyak ruang, ukurannya kurang dari 10 mb

## Download Droidcam di PC dan di HP

### Untuk PC
Droidcam dapat di download di [sini](https://www.dev47apps.com/) atau di [sini](https://droidcam.en.softonic.com/)

### Untuk HP 

Install di [sini](https://play.google.com/store/apps/details?id=com.dev47apps.droidcam&hl=en_US&gl=US)


## Instalasi

Copy paste command berikut di terminal kalian, pastikan kalian membuka terminalnya di folder tempat  aplikasi droidcam berada ya... kalo aku sih downloadnya di folder `Downloads` 


```
cd /tmp/
wget https://files.dev47apps.net/linux/droidcam_latest.zip
unzip droidcam_latest.zip -d droidcam
cd droidcam && sudo ./install-client
```
## Install Video dan Audio

Droidcam kalian masih belum bisa jalan, sekarang jalankan command berikut untuk menginstall video dan audio.

`sudo ./install-video`
`sudo ./install-sound`

## Hubungkan!

Buka, droidcam di HP kalian, pastikan HP dan PC berada pada wifi yang sama. Maka akan muncul tulisan wifi IP, Droidcam Port, Browser IP cam address.

![Gambar SS](https://dev-to-uploads.s3.amazonaws.com/i/39yszk71gz6h48z5iwk6.png)

ketik Browser IP cam address di browser kalian, diakhiri dengan /video, contoh `http://192.168.0.100:4747/video`

Selesai!!! 

Note: Kalian juga dapat menghubungkannya lewat kabel usb. lihat artikel [berikut](https://www.dev47apps.com/droidcam/connect/)