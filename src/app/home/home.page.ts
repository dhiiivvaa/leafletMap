import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}

  ionViewDidEnter() {
    // Inisialisasi peta di elemen dengan ID "mapId"
    this.map = L.map('mapId').setView([48.24875473201907, 12.28339678407802], 4);
    
    // Tambahkan layer peta
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Definisikan basemap
    const openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satelliteMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    });

    const darkMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/attribution">CARTO</a>'
    });

    const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const esriWorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const googleSatellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; <a href="https://www.google.com/intl/en_US/help/terms_maps/">Google</a>'
    });

    // Tambahkan layer control untuk menampilkan opsi basemap
    const baseMaps = {
      'OpenStreetMap': openStreetMap,
      'Satellite Map': satelliteMap,
      'Dark Map': darkMap,
      'Satellite': esriWorldImagery,
      'Topographic': esriWorldTopoMap,
      'Google Satellite': googleSatellite
    };

    // Set OpenStreetMap sebagai layer default
    satelliteMap.addTo(this.map);

    // Menambahkan layer control ke peta
    L.control.layers(baseMaps).addTo(this.map);

    // Add a custom icon
    const icon = L.icon({
      iconUrl: 'assets/icon/file.png', // Ganti dengan path yang sesuai
      iconSize: [25, 41], // Ukuran ikon
      iconAnchor: [12, 41], // Titik di mana ikon akan ditandai pada peta
      popupAnchor: [1, -34], // Titik di mana pop-up akan muncul relatif terhadap ikon
    });

    // Marker di Switzerland
    const markerSwitzerland = L.marker([46.947033732750924, 7.44317590991258], { icon }).addTo(this.map);
    markerSwitzerland.bindPopup('Marker di Switzerland').openPopup();

    // Marker di London
    const markerLondon = L.marker([51.5074, -0.1278], { icon }).addTo(this.map);
    markerLondon.bindPopup('Marker di London').openPopup();

    // Marker di Turki (contoh: Istanbul)
    const markerTurkey = L.marker([41.0082, 28.9784], { icon }).addTo(this.map);
    markerTurkey.bindPopup('Marker di Turki').openPopup();

    // Marker di Mesir (contoh: Kairo)
    const markerEgypt = L.marker([30.0444, 31.2357], { icon }).addTo(this.map); // Koordinat Kairo
    markerEgypt.bindPopup('Marker di Mesir').openPopup();

    // Marker di Rusia (contoh: Moskow)
    const markerRussia = L.marker([55.7558, 37.6173], { icon }).addTo(this.map); // Koordinat Moskow
    markerRussia.bindPopup('Marker di Rusia').openPopup();
  }
}
