let secondsElapsed = 0; // Toplam geçen saniyeyi tutar
let interval = null; // setInterval tarafından döndürülen ve sayacı durdurmak için kullanılan kimlik numarası

const time = document.getElementById("time"); // HTML'de saati gösterecek olan element

// Tek basamaklı sayıların başına "0" ekler (örneğin, 5 -> "05")
function padStart(value) {
    return String(value).padStart(2, "0");
}

// Geçen saniyeyi dakika ve saniye olarak hesaplar ve ekrana yazdırır
function setTime() {
    const minutes = Math.floor(secondsElapsed / 60); // Toplam saniyeden dakikayı bulur
    const seconds = secondsElapsed % 60; // Kalan saniyeyi bulur
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`; // HTML elementinin içeriğini günceller
}

// Her saniye çalışan ana işlev: saniyeyi artırır ve saati günceller
function timer() {
    secondsElapsed++; // Saniyeyi 1 artırır
    setTime(); // Ekranda süreyi günceller
}

// Kronometreyi başlatır
function startClock() {
    if (interval) stopClock(); // Eğer kronometre zaten çalışıyorsa durdurur
    interval = setInterval(timer, 1000); // Her 1000 milisaniyede (1 saniye) bir "timer" fonksiyonunu çalıştırır
}

// Kronometreyi durdurur
function stopClock() {
    clearInterval(interval); // setInterval döngüsünü durdurur
}

// Kronometreyi sıfırlar
function resetClock() {
    stopClock(); // Önce kronometreyi durdurur
    secondsElapsed = 0; // Saniyeyi sıfıra ayarlar
    setTime(); // Ekrandaki göstergeyi 00:00 olarak günceller
}