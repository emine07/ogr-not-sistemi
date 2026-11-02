// ---------VERİLER (DİZİLER)-----------
let ogrenciler = [];
let notlar = [];

// Hangi satır düzenleniyor? -1 = hiçbiri (yeni ekleme modu)
let duzenlenen = -1;
 
// ---------- FONKSİYONLAR + KOŞULLAR ----------
function harfNotuBul(not) {
if      (not >= 90) return "AA";
else if (not >= 80) return "BA";
else if (not >= 70) return "BB";
else if (not >= 60) return "CC";
else if (not >= 50) return "DD";
else return "FF";
}

// ---------- NOT EKLEME + KAYDETME ----------
function ogrenciEkle() {
  // [HAZIR SATIRLAR] Ekrandaki kutulardan değer okuma
  let ad = document.getElementById("ad").value;
  let not = Number(document.getElementById("not").value);

  // Koşullar: doğrulama
  if (ad === "") {
    mesajYaz("Lütfen öğrenci adını gir!");
    return;
  }
  if (document.getElementById("not").value === "" || isNaN(not) || not < 0 || not > 100) {
    mesajYaz("Not 0 ile 100 arasında olmalı!");
    return;
  }

  if (duzenlenen === -1) {
    // Yeni öğrenci: dizilere ekle
    ogrenciler.push(ad);
    notlar.push(not);
  } else {
    // Düzenleme: o sıradaki değerleri güncelle
    ogrenciler[duzenlenen] = ad;
    notlar[duzenlenen] = not;
    duzenlemeyiIptalEt();
  }

  mesajYaz("");
  tabloyuCiz();
  istatistikHesapla();

  // [HAZIR SATIRLAR] Kutuları temizle
  document.getElementById("ad").value = "";
  document.getElementById("not").value = "";
}

// NOT DÜZENLEME //
function notDuzenle(i) {
duzenlenen = i;
 
// Seçilen Öğrencinin Bilgilerini Kutulara Gir // 
document.getElementById("ad").value = ogrenciler [i];
document.getElementById("not").value = notlar[i];

// Butonu Kaydet Yap, "iptal" butonunu göster
document.getElementById("kaydetBtn").innerHTML = "Kaydet";
document.getElementById("iptalBtn").style.display = "inline-block";

mesajYaz("");
tabloyuCiz();
document.getElementById("ad").focus();
}

function duzenlemeyiIptalEt() {
duzenlenen = -1;

document.getElementById("ad").value = "";
document.getElementById("not").value = "";
document.getElementById("kaydetBtn").innerHTML = "Ekle";
document.getElementById("iptalBtn").style.display = "none"; 

tabloyuCiz();
}

// NOT SİLME //
function ogrenciSil(i) {
// Silinen Satır Düzenleniyorsa Düzenlemeyi Bitir
if (duzenlenen === i) {
duzenlemeyiIptalEt();
} else if (duzenlenen > i) {
duzenlenen--; //silinen satır yukarıdaysa sıra bir kayar
}
ogrenciler.splice(i,1);
notlar.splice(i,1);

tabloyuCiz();
istatistikHesapla();
}
  

// DÖNGÜLER// 
function tabloyuCiz() {
let html = "";
for (let i = 0; i < ogrenciler.length; i++){
let durum= notlar[i] >=50 ? "Geçti" : "Kaldı";
let sinif = notlar[i] >=50 ? "gecti" : "kaldi";
let satirSinifi = (i === duzenlenen) ? "duzenleniyor" : "";

html += "<tr class='" + satirSinifi + "'>" +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + ogrenciler[i] + "</td>" +
      "<td>" + notlar[i] + "</td>" +
      "<td>" + harfNotuBul(notlar[i]) + "</td>" +
      "<td class='" + sinif + "'>" + durum + "</td>" +
      "<td class='islem'>" +
        "<button class='duzenle' onclick='notDuzenle(" + i + ")'>Düzenle</button>" +
        "<button class='sil' onclick='ogrenciSil(" + i + ")'>Sil</button>" +
      "</td>" +
      "</tr>";
}


// [HAZIR SATIR] Tabloyu ekrana basma
  document.getElementById("liste").innerHTML = html;

}

function istatistikHesapla() {
  // Liste boşsa kartları sıfırla
  if (notlar.length === 0) {
    document.getElementById("ortalama").innerHTML = "-";
    document.getElementById("enYuksek").innerHTML = "-";
    document.getElementById("enDusuk").innerHTML = "-";
    document.getElementById("gecen").innerHTML = "-";
    return;
  }

  let toplam = 0;
  let enYuksek = notlar[0];
  let enDusuk = notlar[0];
  let gecen = 0;

  for (let i = 0; i < notlar.length; i++) {
    toplam += notlar[i];
    if (notlar[i] > enYuksek) enYuksek = notlar[i];
    if (notlar[i] < enDusuk) enDusuk = notlar[i];
    if (notlar[i] >= 50) gecen++;
  }

  let ortalama = toplam / notlar.length;

  // [HAZIR SATIRLAR] Sonuçları kartlara yazma
  document.getElementById("ortalama").innerHTML = ortalama.toFixed(1);
  document.getElementById("enYuksek").innerHTML = enYuksek;
  document.getElementById("enDusuk").innerHTML = enDusuk;
  document.getElementById("gecen").innerHTML = gecen + "/" + notlar.length;
}

function mesajYaz(metin) {
  document.getElementById("mesaj").innerHTML = metin;
}
