var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_penduduk_1 = new ol.format.GeoJSON();
var features_penduduk_1 = format_penduduk_1.readFeatures(json_penduduk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_penduduk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_penduduk_1.addFeatures(features_penduduk_1);
var lyr_penduduk_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_penduduk_1, 
                style: style_penduduk_1,
                popuplayertitle: 'penduduk',
                interactive: true,
    title: 'penduduk<br />\
    <img src="styles/legend/penduduk_1_0.png" /> 29251 - 55564<br />\
    <img src="styles/legend/penduduk_1_1.png" /> 55564 - 61665<br />\
    <img src="styles/legend/penduduk_1_2.png" /> 61665 - 63886<br />\
    <img src="styles/legend/penduduk_1_3.png" /> 63886 - 130410<br />\
    <img src="styles/legend/penduduk_1_4.png" /> 130410 - 213854<br />' });
var format_rsk_tsunami_2 = new ol.format.GeoJSON();
var features_rsk_tsunami_2 = format_rsk_tsunami_2.readFeatures(json_rsk_tsunami_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rsk_tsunami_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rsk_tsunami_2.addFeatures(features_rsk_tsunami_2);
var lyr_rsk_tsunami_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rsk_tsunami_2, 
                style: style_rsk_tsunami_2,
                popuplayertitle: 'rsk_tsunami',
                interactive: true,
    title: 'rsk_tsunami<br />\
    <img src="styles/legend/rsk_tsunami_2_0.png" /> KRB Tsunami Menengah<br />\
    <img src="styles/legend/rsk_tsunami_2_1.png" /> KRB Tsunami Rendah<br />\
    <img src="styles/legend/rsk_tsunami_2_2.png" /> KRB Tsunami Tinggi<br />\
    <img src="styles/legend/rsk_tsunami_2_3.png" /> <br />' });
var format_hankam_3 = new ol.format.GeoJSON();
var features_hankam_3 = format_hankam_3.readFeatures(json_hankam_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hankam_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hankam_3.addFeatures(features_hankam_3);
var lyr_hankam_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hankam_3, 
                style: style_hankam_3,
                popuplayertitle: 'hankam',
                interactive: true,
                title: '<img src="styles/legend/hankam_3.png" /> hankam'
            });
var format_CagarBudayaPdg_4 = new ol.format.GeoJSON();
var features_CagarBudayaPdg_4 = format_CagarBudayaPdg_4.readFeatures(json_CagarBudayaPdg_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CagarBudayaPdg_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CagarBudayaPdg_4.addFeatures(features_CagarBudayaPdg_4);
var lyr_CagarBudayaPdg_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CagarBudayaPdg_4, 
                style: style_CagarBudayaPdg_4,
                popuplayertitle: 'Cagar Budaya Pdg',
                interactive: true,
                title: '<img src="styles/legend/CagarBudayaPdg_4.png" /> Cagar Budaya Pdg'
            });
var format_IndustriPdg_5 = new ol.format.GeoJSON();
var features_IndustriPdg_5 = format_IndustriPdg_5.readFeatures(json_IndustriPdg_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustriPdg_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndustriPdg_5.addFeatures(features_IndustriPdg_5);
var lyr_IndustriPdg_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndustriPdg_5, 
                style: style_IndustriPdg_5,
                popuplayertitle: 'Industri Pdg',
                interactive: true,
                title: '<img src="styles/legend/IndustriPdg_5.png" /> Industri Pdg'
            });
var format_PemerintahanPdg_6 = new ol.format.GeoJSON();
var features_PemerintahanPdg_6 = format_PemerintahanPdg_6.readFeatures(json_PemerintahanPdg_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PemerintahanPdg_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PemerintahanPdg_6.addFeatures(features_PemerintahanPdg_6);
var lyr_PemerintahanPdg_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PemerintahanPdg_6, 
                style: style_PemerintahanPdg_6,
                popuplayertitle: 'Pemerintahan Pdg',
                interactive: true,
                title: '<img src="styles/legend/PemerintahanPdg_6.png" /> Pemerintahan Pdg'
            });
var format_pendidikan_7 = new ol.format.GeoJSON();
var features_pendidikan_7 = format_pendidikan_7.readFeatures(json_pendidikan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_7.addFeatures(features_pendidikan_7);
var lyr_pendidikan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikan_7, 
                style: style_pendidikan_7,
                popuplayertitle: 'pendidikan',
                interactive: true,
                title: '<img src="styles/legend/pendidikan_7.png" /> pendidikan'
            });
var format_bangunanperibadatan_8 = new ol.format.GeoJSON();
var features_bangunanperibadatan_8 = format_bangunanperibadatan_8.readFeatures(json_bangunanperibadatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunanperibadatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunanperibadatan_8.addFeatures(features_bangunanperibadatan_8);
var lyr_bangunanperibadatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunanperibadatan_8, 
                style: style_bangunanperibadatan_8,
                popuplayertitle: 'bangunan peribadatan',
                interactive: true,
    title: 'bangunan peribadatan<br />\
    <img src="styles/legend/bangunanperibadatan_8_0.png" /> Gereja Kristen Kalam Kudus Pondok<br />\
    <img src="styles/legend/bangunanperibadatan_8_1.png" /> Masjd Al-Jihad<br />\
    <img src="styles/legend/bangunanperibadatan_8_2.png" /> Masjid Ab-Din<br />\
    <img src="styles/legend/bangunanperibadatan_8_3.png" /> Masjid Agung Batang Lubukkilangan<br />\
    <img src="styles/legend/bangunanperibadatan_8_4.png" /> Masjid Ainul Muttaqin<br />\
    <img src="styles/legend/bangunanperibadatan_8_5.png" /> Masjid Ainul Yakin<br />\
    <img src="styles/legend/bangunanperibadatan_8_6.png" /> Masjid Al-Amin<br />\
    <img src="styles/legend/bangunanperibadatan_8_7.png" /> Masjid Al-Aminn<br />\
    <img src="styles/legend/bangunanperibadatan_8_8.png" /> Masjid Al-Aqsa<br />\
    <img src="styles/legend/bangunanperibadatan_8_9.png" /> Masjid Al-Ashri<br />\
    <img src="styles/legend/bangunanperibadatan_8_10.png" /> Masjid Al-Barkah<br />\
    <img src="styles/legend/bangunanperibadatan_8_11.png" /> Masjid Al-Bayinnah<br />\
    <img src="styles/legend/bangunanperibadatan_8_12.png" /> Masjid Al-Hadid<br />\
    <img src="styles/legend/bangunanperibadatan_8_13.png" /> Masjid Al-Hidayah<br />\
    <img src="styles/legend/bangunanperibadatan_8_14.png" /> Masjid Al-Hijar<br />\
    <img src="styles/legend/bangunanperibadatan_8_15.png" /> Masjid Al-Hijrah<br />\
    <img src="styles/legend/bangunanperibadatan_8_16.png" /> Masjid Al-Hikmah<br />\
    <img src="styles/legend/bangunanperibadatan_8_17.png" /> Masjid Al-Huda<br />\
    <img src="styles/legend/bangunanperibadatan_8_18.png" /> Masjid Al-Hussunah<br />\
    <img src="styles/legend/bangunanperibadatan_8_19.png" /> Masjid Al-Ikhlas<br />\
    <img src="styles/legend/bangunanperibadatan_8_20.png" /> Masjid Al-IKhlas<br />\
    <img src="styles/legend/bangunanperibadatan_8_21.png" /> Masjid Al-Ikhwan<br />\
    <img src="styles/legend/bangunanperibadatan_8_22.png" /> Masjid Al-Iklas<br />\
    <img src="styles/legend/bangunanperibadatan_8_23.png" /> Masjid Al-Iman<br />\
    <img src="styles/legend/bangunanperibadatan_8_24.png" /> Masjid Al-Iqra<br />\
    <img src="styles/legend/bangunanperibadatan_8_25.png" /> Masjid Al-Istiqomah<br />\
    <img src="styles/legend/bangunanperibadatan_8_26.png" /> Masjid Al-Jahid<br />\
    <img src="styles/legend/bangunanperibadatan_8_27.png" /> Masjid Al-Jihad<br />\
    <img src="styles/legend/bangunanperibadatan_8_28.png" /> Masjid Al-Kausar<br />\
    <img src="styles/legend/bangunanperibadatan_8_29.png" /> Masjid Al-Kautsar<br />\
    <img src="styles/legend/bangunanperibadatan_8_30.png" /> Masjid Al-Manar<br />\
    <img src="styles/legend/bangunanperibadatan_8_31.png" /> Masjid Al-Marhamah<br />\
    <img src="styles/legend/bangunanperibadatan_8_32.png" /> Masjid Al-Muhajirin<br />\
    <img src="styles/legend/bangunanperibadatan_8_33.png" /> Masjid Al-Mukhlisin<br />\
    <img src="styles/legend/bangunanperibadatan_8_34.png" /> Masjid Al-Mutakin Muhamaddiah<br />\
    <img src="styles/legend/bangunanperibadatan_8_35.png" /> Masjid Al-Muttakin<br />\
    <img src="styles/legend/bangunanperibadatan_8_36.png" /> Masjid Al-Qariah<br />\
    <img src="styles/legend/bangunanperibadatan_8_37.png" /> Masjid Al-wathan<br />\
    <img src="styles/legend/bangunanperibadatan_8_38.png" /> Masjid Al-Wustra<br />\
    <img src="styles/legend/bangunanperibadatan_8_39.png" /> Masjid An-Naba<br />\
    <img src="styles/legend/bangunanperibadatan_8_40.png" /> Masjid An-Nur<br />\
    <img src="styles/legend/bangunanperibadatan_8_41.png" /> Masjid An-Riur<br />\
    <img src="styles/legend/bangunanperibadatan_8_42.png" /> Masjid Anakairsatu<br />\
    <img src="styles/legend/bangunanperibadatan_8_43.png" /> Masjid Ar-Rahman<br />\
    <img src="styles/legend/bangunanperibadatan_8_44.png" /> Masjid Ar-Rohman<br />\
    <img src="styles/legend/bangunanperibadatan_8_45.png" /> Masjid As-Salam<br />\
    <img src="styles/legend/bangunanperibadatan_8_46.png" /> Masjid Ash-Shalihin<br />\
    <img src="styles/legend/bangunanperibadatan_8_47.png" /> Masjid Asmaul Husna<br />\
    <img src="styles/legend/bangunanperibadatan_8_48.png" /> Masjid At-Aubah<br />\
    <img src="styles/legend/bangunanperibadatan_8_49.png" /> Masjid At-Taqwa<br />\
    <img src="styles/legend/bangunanperibadatan_8_50.png" /> Masjid At-Tawakal<br />\
    <img src="styles/legend/bangunanperibadatan_8_51.png" /> Masjid Babussalam<br />\
    <img src="styles/legend/bangunanperibadatan_8_52.png" /> Masjid Bahrul Ulum<br />\
    <img src="styles/legend/bangunanperibadatan_8_53.png" /> Masjid Baithul Ridho<br />\
    <img src="styles/legend/bangunanperibadatan_8_54.png" /> Masjid Baitul Arafah<br />\
    <img src="styles/legend/bangunanperibadatan_8_55.png" /> Masjid Baitul Hassin<br />\
    <img src="styles/legend/bangunanperibadatan_8_56.png" /> Masjid Baitul Makkwa<br />\
    <img src="styles/legend/bangunanperibadatan_8_57.png" /> Masjid Baitul Mamur<br />\
    <img src="styles/legend/bangunanperibadatan_8_58.png" /> Masjid Baitul Muhaimin<br />\
    <img src="styles/legend/bangunanperibadatan_8_59.png" /> Masjid Baitull Mutaqin<br />\
    <img src="styles/legend/bangunanperibadatan_8_60.png" /> Masjid Baitur Arohman<br />\
    <img src="styles/legend/bangunanperibadatan_8_61.png" /> Masjid Baitur Rohim<br />\
    <img src="styles/legend/bangunanperibadatan_8_62.png" /> Masjid Baiturrahman<br />\
    <img src="styles/legend/bangunanperibadatan_8_63.png" /> Masjid Bandarbuat<br />\
    <img src="styles/legend/bangunanperibadatan_8_64.png" /> Masjid Barokah<br />\
    <img src="styles/legend/bangunanperibadatan_8_65.png" /> Masjid Beringin<br />\
    <img src="styles/legend/bangunanperibadatan_8_66.png" /> Masjid Berkah<br />\
    <img src="styles/legend/bangunanperibadatan_8_67.png" /> Masjid Buah Manggis<br />\
    <img src="styles/legend/bangunanperibadatan_8_68.png" /> Masjid Darul-Fallah<br />\
    <img src="styles/legend/bangunanperibadatan_8_69.png" /> Masjid Darul-Ishlah<br />\
    <img src="styles/legend/bangunanperibadatan_8_70.png" /> Masjid Darul-Jadid<br />\
    <img src="styles/legend/bangunanperibadatan_8_71.png" /> Masjid Darul-Muttaqin<br />\
    <img src="styles/legend/bangunanperibadatan_8_72.png" /> Masjid Darul-Ulum<br />\
    <img src="styles/legend/bangunanperibadatan_8_73.png" /> Masjid Darussalam<br />\
    <img src="styles/legend/bangunanperibadatan_8_74.png" /> Masjid Darussalikin<br />\
    <img src="styles/legend/bangunanperibadatan_8_75.png" /> Masjid Husnul Khatimah<br />\
    <img src="styles/legend/bangunanperibadatan_8_76.png" /> Masjid Ihsan<br />\
    <img src="styles/legend/bangunanperibadatan_8_77.png" /> Masjid Indarung<br />\
    <img src="styles/legend/bangunanperibadatan_8_78.png" /> Masjid Istighfar<br />\
    <img src="styles/legend/bangunanperibadatan_8_79.png" /> Masjid Istikomah<br />\
    <img src="styles/legend/bangunanperibadatan_8_80.png" /> Masjid Istiqlal<br />\
    <img src="styles/legend/bangunanperibadatan_8_81.png" /> Masjid Istiqomah<br />\
    <img src="styles/legend/bangunanperibadatan_8_82.png" /> Masjid Jabal Firdaus<br />\
    <img src="styles/legend/bangunanperibadatan_8_83.png" /> Masjid Jabal Nur<br />\
    <img src="styles/legend/bangunanperibadatan_8_84.png" /> Masjid Jabal Rahman<br />\
    <img src="styles/legend/bangunanperibadatan_8_85.png" /> Masjid Jabar Nur<br />\
    <img src="styles/legend/bangunanperibadatan_8_86.png" /> Masjid Jami Airpacah<br />\
    <img src="styles/legend/bangunanperibadatan_8_87.png" /> Masjid Jami Airtunggul<br />\
    <img src="styles/legend/bangunanperibadatan_8_88.png" /> Masjid Jami Al-Muqaddimah<br />\
    <img src="styles/legend/bangunanperibadatan_8_89.png" /> Masjid Jami Alanglaweh<br />\
    <img src="styles/legend/bangunanperibadatan_8_90.png" /> Masjid Jami Batungtabananduapuluh<br />\
    <img src="styles/legend/bangunanperibadatan_8_91.png" /> Masjid Jami Bungopasang<br />\
    <img src="styles/legend/bangunanperibadatan_8_92.png" /> Masjid Jami Islamiyah<br />\
    <img src="styles/legend/bangunanperibadatan_8_93.png" /> Masjid Jami Lubukkilangan<br />\
    <img src="styles/legend/bangunanperibadatan_8_94.png" /> Masjid Jami Paraklawehpulauaienanduapuluh<br />\
    <img src="styles/legend/bangunanperibadatan_8_95.png" /> Masjid Jami Tanahsirah<br />\
    <img src="styles/legend/bangunanperibadatan_8_96.png" /> Masjid Kampungpinang<br />\
    <img src="styles/legend/bangunanperibadatan_8_97.png" /> Masjid Kandangairdingin<br />\
    <img src="styles/legend/bangunanperibadatan_8_98.png" /> Masjid Kuba<br />\
    <img src="styles/legend/bangunanperibadatan_8_99.png" /> Masjid Laban<br />\
    <img src="styles/legend/bangunanperibadatan_8_100.png" /> Masjid Mab Atsul Iman<br />\
    <img src="styles/legend/bangunanperibadatan_8_101.png" /> Masjid Mardhatilah<br />\
    <img src="styles/legend/bangunanperibadatan_8_102.png" /> Masjid Miftahull Jannah<br />\
    <img src="styles/legend/bangunanperibadatan_8_103.png" /> Masjid Muhajirin<br />\
    <img src="styles/legend/bangunanperibadatan_8_104.png" /> Masjid Muhammadiyah<br />\
    <img src="styles/legend/bangunanperibadatan_8_105.png" /> Masjid Mujahiddin<br />\
    <img src="styles/legend/bangunanperibadatan_8_106.png" /> Masjid Mukhlisin<br />\
    <img src="styles/legend/bangunanperibadatan_8_107.png" /> Masjid Mutha Thahirin<br />\
    <img src="styles/legend/bangunanperibadatan_8_108.png" /> Masjid Mutmainah<br />\
    <img src="styles/legend/bangunanperibadatan_8_109.png" /> Masjid Nur El Hidayah<br />\
    <img src="styles/legend/bangunanperibadatan_8_110.png" /> Masjid Nurul Amal<br />\
    <img src="styles/legend/bangunanperibadatan_8_111.png" /> Masjid Nurul Anhar<br />\
    <img src="styles/legend/bangunanperibadatan_8_112.png" /> Masjid Nurul Fallah<br />\
    <img src="styles/legend/bangunanperibadatan_8_113.png" /> Masjid Nurul Hidayah<br />\
    <img src="styles/legend/bangunanperibadatan_8_114.png" /> Masjid Nurul Huda<br />\
    <img src="styles/legend/bangunanperibadatan_8_115.png" /> Masjid Nurul Ihsan<br />\
    <img src="styles/legend/bangunanperibadatan_8_116.png" /> Masjid Nurul Ikhsan<br />\
    <img src="styles/legend/bangunanperibadatan_8_117.png" /> Masjid Nurul Ikwah<br />\
    <img src="styles/legend/bangunanperibadatan_8_118.png" /> Masjid Nurul Iman<br />\
    <img src="styles/legend/bangunanperibadatan_8_119.png" /> Masjid Nurul Iqdam<br />\
    <img src="styles/legend/bangunanperibadatan_8_120.png" /> Masjid Nurul Islam<br />\
    <img src="styles/legend/bangunanperibadatan_8_121.png" /> Masjid Nurul Qalbi<br />\
    <img src="styles/legend/bangunanperibadatan_8_122.png" /> Masjid Nurul Sallam<br />\
    <img src="styles/legend/bangunanperibadatan_8_123.png" /> Masjid Nurul Wujud<br />\
    <img src="styles/legend/bangunanperibadatan_8_124.png" /> Masjid Nurul Yaqin<br />\
    <img src="styles/legend/bangunanperibadatan_8_125.png" /> Masjid Padangbesi<br />\
    <img src="styles/legend/bangunanperibadatan_8_126.png" /> Masjid Rahmat Baiturahman<br />\
    <img src="styles/legend/bangunanperibadatan_8_127.png" /> Masjid Raijatu Janah<br />\
    <img src="styles/legend/bangunanperibadatan_8_128.png" /> Masjid Raya Al-Itihad<br />\
    <img src="styles/legend/bangunanperibadatan_8_129.png" /> Masjid Raya Al-ittihad<br />\
    <img src="styles/legend/bangunanperibadatan_8_130.png" /> Masjid Raya Ampang<br />\
    <img src="styles/legend/bangunanperibadatan_8_131.png" /> Masjid Raya Baitul Makmur<br />\
    <img src="styles/legend/bangunanperibadatan_8_132.png" /> Masjid Raya Balaigadang<br />\
    <img src="styles/legend/bangunanperibadatan_8_133.png" /> Masjid Raya Belimbing<br />\
    <img src="styles/legend/bangunanperibadatan_8_134.png" /> Masjid Raya Binuangkampungdalam<br />\
    <img src="styles/legend/bangunanperibadatan_8_135.png" /> Masjid Raya Jabal Kudus<br />\
    <img src="styles/legend/bangunanperibadatan_8_136.png" /> Masjid Raya Kuranji<br />\
    <img src="styles/legend/bangunanperibadatan_8_137.png" /> Masjid Raya Kuraokapalobanda<br />\
    <img src="styles/legend/bangunanperibadatan_8_138.png" /> Masjid Raya Kuraopagang<br />\
    <img src="styles/legend/bangunanperibadatan_8_139.png" /> Masjid Raya Limaumanis<br />\
    <img src="styles/legend/bangunanperibadatan_8_140.png" /> Masjid Raya Lubukminturun<br />\
    <img src="styles/legend/bangunanperibadatan_8_141.png" /> Masjid Raya Nurul Islam<br />\
    <img src="styles/legend/bangunanperibadatan_8_142.png" /> Masjid Raya Nurul Yakin<br />\
    <img src="styles/legend/bangunanperibadatan_8_143.png" /> Masjid Raya Pasarbaru<br />\
    <img src="styles/legend/bangunanperibadatan_8_144.png" /> Masjid Raya Taqrib<br />\
    <img src="styles/legend/bangunanperibadatan_8_145.png" /> Masjid Raya Ulu Gadut<br />\
    <img src="styles/legend/bangunanperibadatan_8_146.png" /> Masjid Sahara<br />\
    <img src="styles/legend/bangunanperibadatan_8_147.png" /> Masjid Sungaibalang<br />\
    <img src="styles/legend/bangunanperibadatan_8_148.png" /> Masjid Sungailimau<br />\
    <img src="styles/legend/bangunanperibadatan_8_149.png" /> Masjid Syuhada<br />\
    <img src="styles/legend/bangunanperibadatan_8_150.png" /> Masjid Syukur<br />\
    <img src="styles/legend/bangunanperibadatan_8_151.png" /> Masjid Tajul Arifin<br />\
    <img src="styles/legend/bangunanperibadatan_8_152.png" /> Masjid Takwa<br />\
    <img src="styles/legend/bangunanperibadatan_8_153.png" /> Masjid Tawakkal<br />\
    <img src="styles/legend/bangunanperibadatan_8_154.png" /> Masjid Than Kaitul Janah<br />\
    <img src="styles/legend/bangunanperibadatan_8_155.png" /> Masjid Ukhuwah<br />\
    <img src="styles/legend/bangunanperibadatan_8_156.png" /> Masjid Umnul Muminin<br />\
    <img src="styles/legend/bangunanperibadatan_8_157.png" /> Masjid Uswatun Hasanah<br />\
    <img src="styles/legend/bangunanperibadatan_8_158.png" /> Musholla Aisiyah<br />\
    <img src="styles/legend/bangunanperibadatan_8_159.png" /> Musholla AL-Hidayah<br />\
    <img src="styles/legend/bangunanperibadatan_8_160.png" /> Musholla Al-Munawaroh<br />\
    <img src="styles/legend/bangunanperibadatan_8_161.png" /> Musholla Jamiatul Khairat<br />\
    <img src="styles/legend/bangunanperibadatan_8_162.png" /> Musholla Pasargadang<br />\
    <img src="styles/legend/bangunanperibadatan_8_163.png" /> Pesantren Shahabisma<br />\
    <img src="styles/legend/bangunanperibadatan_8_164.png" /> Pondok Pesantren Darul Quran<br />\
    <img src="styles/legend/bangunanperibadatan_8_165.png" /> Pondok Pesantren Khairunumah<br />\
    <img src="styles/legend/bangunanperibadatan_8_166.png" /> <br />\
    <img src="styles/legend/bangunanperibadatan_8_167.png" /> Gedung Dakwah Muhamadiyyah<br />' });
var format_PuskesmasPdg_9 = new ol.format.GeoJSON();
var features_PuskesmasPdg_9 = format_PuskesmasPdg_9.readFeatures(json_PuskesmasPdg_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuskesmasPdg_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuskesmasPdg_9.addFeatures(features_PuskesmasPdg_9);
var lyr_PuskesmasPdg_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuskesmasPdg_9, 
                style: style_PuskesmasPdg_9,
                popuplayertitle: 'Puskesmas Pdg',
                interactive: true,
                title: '<img src="styles/legend/PuskesmasPdg_9.png" /> Puskesmas Pdg'
            });
var format_rs_10 = new ol.format.GeoJSON();
var features_rs_10 = format_rs_10.readFeatures(json_rs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rs_10.addFeatures(features_rs_10);
var lyr_rs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rs_10, 
                style: style_rs_10,
                popuplayertitle: 'rs',
                interactive: true,
                title: '<img src="styles/legend/rs_10.png" /> rs'
            });
var format_UsahaPdg_11 = new ol.format.GeoJSON();
var features_UsahaPdg_11 = format_UsahaPdg_11.readFeatures(json_UsahaPdg_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsahaPdg_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsahaPdg_11.addFeatures(features_UsahaPdg_11);
var lyr_UsahaPdg_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsahaPdg_11, 
                style: style_UsahaPdg_11,
                popuplayertitle: 'Usaha Pdg',
                interactive: true,
                title: '<img src="styles/legend/UsahaPdg_11.png" /> Usaha Pdg'
            });
var format_gempa_12 = new ol.format.GeoJSON();
var features_gempa_12 = format_gempa_12.readFeatures(json_gempa_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gempa_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gempa_12.addFeatures(features_gempa_12);
var lyr_gempa_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gempa_12, 
                style: style_gempa_12,
                popuplayertitle: 'gempa',
                interactive: true,
                title: '<img src="styles/legend/gempa_12.png" /> gempa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_penduduk_1.setVisible(true);lyr_rsk_tsunami_2.setVisible(true);lyr_hankam_3.setVisible(true);lyr_CagarBudayaPdg_4.setVisible(true);lyr_IndustriPdg_5.setVisible(true);lyr_PemerintahanPdg_6.setVisible(true);lyr_pendidikan_7.setVisible(true);lyr_bangunanperibadatan_8.setVisible(true);lyr_PuskesmasPdg_9.setVisible(true);lyr_rs_10.setVisible(true);lyr_UsahaPdg_11.setVisible(true);lyr_gempa_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_penduduk_1,lyr_rsk_tsunami_2,lyr_hankam_3,lyr_CagarBudayaPdg_4,lyr_IndustriPdg_5,lyr_PemerintahanPdg_6,lyr_pendidikan_7,lyr_bangunanperibadatan_8,lyr_PuskesmasPdg_9,lyr_rs_10,lyr_UsahaPdg_11,lyr_gempa_12];
lyr_penduduk_1.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', 'Penduduk,': 'Penduduk,', });
lyr_rsk_tsunami_2.set('fieldAliases', {'ID': 'ID', 'UNSUR': 'UNSUR', 'KETERANGAN': 'KETERANGAN', 'TAHUN': 'TAHUN', 'WILAYAH': 'WILAYAH', 'LCODE': 'LCODE', 'FCODE': 'FCODE', });
lyr_hankam_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'FUNBHM': 'FUNBHM', });
lyr_CagarBudayaPdg_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_IndustriPdg_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FUNGSI': 'FUNGSI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FGSKOD': 'FGSKOD', 'JNSPSR': 'JNSPSR', 'JNSTKO': 'JNSTKO', 'JNSKTR': 'JNSKTR', 'PRSTRP': 'PRSTRP', });
lyr_PemerintahanPdg_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_pendidikan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_bangunanperibadatan_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PuskesmasPdg_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_rs_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_UsahaPdg_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FUNGSI': 'FUNGSI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FGSKOD': 'FGSKOD', 'JNSPSR': 'JNSPSR', 'JNSTKO': 'JNSTKO', 'JNSKTR': 'JNSKTR', 'PRSTRP': 'PRSTRP', });
lyr_gempa_12.set('fieldAliases', {'Gempa': 'Gempa', 'Tahun': 'Tahun', 'Magnitudo': 'Magnitudo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_penduduk_1.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', 'Penduduk,': 'TextEdit', });
lyr_rsk_tsunami_2.set('fieldImages', {'ID': 'Range', 'UNSUR': 'TextEdit', 'KETERANGAN': 'TextEdit', 'TAHUN': 'Range', 'WILAYAH': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', });
lyr_hankam_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'FUNBHM': 'TextEdit', });
lyr_CagarBudayaPdg_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_IndustriPdg_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FUNGSI': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FGSKOD': 'TextEdit', 'JNSPSR': 'TextEdit', 'JNSTKO': 'TextEdit', 'JNSKTR': 'TextEdit', 'PRSTRP': 'TextEdit', });
lyr_PemerintahanPdg_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_pendidikan_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_bangunanperibadatan_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PuskesmasPdg_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'TextEdit', 'KMPPKM_': 'TextEdit', 'JPLPKM_': 'TextEdit', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'TextEdit', 'PKMLMT_': 'TextEdit', });
lyr_rs_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', });
lyr_UsahaPdg_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FUNGSI': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FGSKOD': 'TextEdit', 'JNSPSR': 'TextEdit', 'JNSTKO': 'TextEdit', 'JNSKTR': 'TextEdit', 'PRSTRP': 'TextEdit', });
lyr_gempa_12.set('fieldImages', {'Gempa': 'TextEdit', 'Tahun': 'TextEdit', 'Magnitudo': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_penduduk_1.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'inline label - always visible', 'Penduduk,': 'inline label - always visible', });
lyr_rsk_tsunami_2.set('fieldLabels', {'ID': 'no label', 'UNSUR': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', 'TAHUN': 'no label', 'WILAYAH': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', });
lyr_hankam_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'FUNBHM': 'no label', });
lyr_CagarBudayaPdg_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_IndustriPdg_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'FUNGSI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FGSKOD': 'no label', 'JNSPSR': 'no label', 'JNSTKO': 'no label', 'JNSKTR': 'no label', 'PRSTRP': 'no label', });
lyr_PemerintahanPdg_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_pendidikan_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_bangunanperibadatan_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - always visible', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PuskesmasPdg_9.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_rs_10.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_UsahaPdg_11.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'LUAS': 'no label', 'FUNGSI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FGSKOD': 'no label', 'JNSPSR': 'no label', 'JNSTKO': 'no label', 'JNSKTR': 'no label', 'PRSTRP': 'no label', });
lyr_gempa_12.set('fieldLabels', {'Gempa': 'inline label - always visible', 'Tahun': 'inline label - always visible', 'Magnitudo': 'inline label - always visible', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_gempa_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});