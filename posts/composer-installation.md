---
title: 'Instalasi Composer PHP'
date: '2021-04-22'
desc: 'composer,  php, code, html, cara install composer'
---


Disini saya akan membagikan cara Untuk menginstall composer 2 untuk php untuk OS linux.

Jika kalian ingin mengunjungi tutorial instalasi resminya, kalian dapat kunjungi [Link ini](https://getcomposer.org/download/). Jika kalian tidak mau tutorial berbahasa Inggris, maka kalian datang di blog yang tepat, tutorial ini hanyalah ringkasan dari tutorial resminya.

### **Langkah 1**
Buka terminal kalian, pada umumnya terminal mempunyai ikon seperti ini.

![Terminal](https://dev-to-uploads.s3.amazonaws.com/i/c16fo8yw7rbf11xvg5rl.png)


### **Langkah 2**
``` 
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```
Perintah ini akan mendownload installer untuk composer dan menempatkannya ke direktori kalian saat ini.

### **Langkah 3**
```
php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```
Disini akan memverifikasi installernya, jika berhasil maka akan muncul tulisan 'Installer verified', jika gagal maka muncul tulisan 'Installer corrupt', jika kalian gagal pada tahap ini, kemungkinan kode hash yang kalian masukkan salah. Jika hash salah, kunjungi [Link official](https://getcomposer.org/download/) kode hash ada di bagian paling bawah.
### **Langkah 4**
```
php composer-setup.php
```
Disini akan menjalankan instalasi composer. Seharusnya kalian  dapat menjalankan command
```
php composer.phar
```
Composer siap dijalankan.

### **Langkah opsional**

#### **Mengganti nama file**
```
php composer-setup.php --filename=composer
```
command ini akan mengganti nama file dari composer-setup.php menjadi composer saja.

#### **Agar dapat di eksekusi disetiap folder**
```
 php composer-setup.php --install-dir=/usr/bin
```

Sekian tutorial kali ini. Terimakasih pembaca 




