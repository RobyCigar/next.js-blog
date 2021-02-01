---
title: 'Menggabungkan React dengan Leaflet js'
date: '2020-12-01'
desc: 'Belajar Leaflet js, library javascript untuk menampilkan peta pada website'
---
Halo, disaat pandemi yang tak berujung ini Saya akan membagikan cara menggabungkan leafletjs di dalam aplikasi React anda.

### Instalasi React
Jika memakai npm
```
npm install react react-dom leaflet react-leaflet
```

Jika pakai yarn
```
yarn add react react-dom leaflet react-leaflet
```
Note: didalam instalasi diatas, kalian sudah menginstall leafletjs, namun ada hal tambahan agar program dapat berjalan.

### Menambah CDN (Content Delivery Network)
Untuk step ini klian cukup copy paste saja. karena disini kalian akan mengambil css dan js dari leafletjs kedalam program kalian.

##### taruh stylesheet berikut di header file index.html kalian yang berada di direktori "namaProject/public/index.html"
```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
```

##### taruh script berikut di bagian bawah diakhir body tag index.html kalian.

```
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
```
Jika sudah, beginilah index.html Anda.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <!-- Load Leaflet js -->
	 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
		 integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		 crossorigin=""/>
    <title>Title</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
     <!-- Make sure you put this AFTER Leaflet's CSS -->
 		 <!-- Make sure you put this AFTER Leaflet's CSS -->
	 <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
		 integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
		 crossorigin=""></script>
  </body>
</html>
```
### Setting React Component
Step terakhir kalian dapat mengambil class dari react-leaflet yang sudah kalian install di step sebelumnya di file js Anda.
class yang kalian butuhkan adalah *MapContainer, TileLayer, Marker, Popup*

```
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import style from './Map.css';

function Map() {
	return (
		<div>
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="mapid">
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

export default Map;
```
**Note: code diatas mempunyai _id="mapid"_**
kita harus tentukan dulu seberapa tinggi dan lebar map yang akan ditampilkan. Tambahkan css ke id tersebut.
```
#mapid { 
	height: 500px;
	width: 600px;
	
}
```
Selamat kalian suda bs menampilkan map didlm localhost klian yey.



