# Timer-watch-
Kronometre Uygulaması
Bu, HTML, CSS ve JavaScript kullanılarak oluşturulmuş basit bir web kronometre uygulamasıdır. Kullanıcının bir zamanlayıcıyı başlatmasına, durdurmasına ve sıfırlamasına olanak tanır.

Özellikler
Başlat: Kronometreyi çalıştırır.

Durdur: Çalışan kronometreyi duraklatır.

Sıfırla: Kronometreyi durdurur ve süreyi 00:00 olarak sıfırlar.

Temiz Arayüz: Modern ve minimalist bir tasarıma sahiptir.

Nasıl Kullanılır?
Proje dosyalarını (index.html, style.css ve index.js) indirin.

index.html dosyasını tercih ettiğiniz web tarayıcısında açın.

Kronometreyi kontrol etmek için ekrandaki Başlat, Durdur ve Sıfırla butonlarını kullanın.

Geliştirme
Bu proje, temel JavaScript kavramlarını ve DOM manipülasyonunu öğrenmek veya pratik yapmak için harika bir başlangıç noktasıdır.

setInterval() ve clearInterval() fonksiyonları, zamanlayıcının davranışını yönetmek için kullanılır.

padStart() fonksiyonu, tek basamaklı sayıların başına sıfır ekleyerek tutarlı bir zaman göstergesi sağlamak için kullanılır.

CSS, kullanıcı arayüzünü ortalamak ve buton gölgeleri gibi estetik dokunuşlar eklemek için kullanılmıştır.

-------------------------------------------------------- ----------------------------------------------
Stopwatch Application
This is a simple stopwatch web application built using HTML, CSS, and JavaScript. It allows the user to start, stop, and reset a timer.

Features
Start: Begins the stopwatch.

Stop: Pauses the running stopwatch.

Reset: Stops the stopwatch and resets the time to 00:00.

Clean UI: Features a modern and minimalist design.

How to Use
Download the project files (index.html, style.css, and index.js).

Open the index.html file in your preferred web browser.

Use the Start, Stop, and Reset buttons on the screen to control the timer.

Development
This project serves as a great starting point for learning or practicing fundamental JavaScript concepts and DOM manipulation.

The setInterval() and clearInterval() functions are used to manage the timer's behavior.

The padStart() function ensures that single-digit numbers are formatted with a leading zero, maintaining a consistent time display.

CSS is used to center the user interface and add aesthetic touches like button shadows.

--------------------------------- ------------------------------------------------- ------------------------------
Kronometrenin Çalışma Algoritması
Bu kronometre, temel olarak bir durum (state) yönetimi ve zamanlayıcı döngüsü üzerine kurulmuştur. İşte adım adım çalışma mantığı:

1. Başlangıç Durumu
Uygulama ilk yüklendiğinde, kronometre kapalı durumdadır.

secondsElapsed değişkeni 0 olarak ayarlanır. Bu değişken, geçen toplam saniye sayısını tutar.

Ekranda görünen süre 00:00 olarak ayarlanır.

2. "Başlat" Butonuna Basıldığında
Uygulama, kullanıcının "Başlat" düğmesine bastığını algılar.

Öncelikle, kronometre zaten çalışıyorsa (yani interval adında bir zamanlayıcı varsa), mevcut sayacı durdurur. Bu, aynı anda birden fazla zamanlayıcının çalışmasını önler.

Daha sonra, setInterval() adında bir JavaScript fonksiyonu çalıştırılır. Bu fonksiyon, timer() fonksiyonunu her 1000 milisaniyede (yani 1 saniyede) bir düzenli olarak çağırması için ayarlanır.

Bu setInterval() çağrısı, interval değişkenine bir referans (bir kimlik numarası) döndürür. Bu referans, zamanlayıcıyı daha sonra durdurmak için kullanılır.

3. Zamanlayıcı Döngüsü (Her Saniye)
setInterval() fonksiyonu her 1 saniyede bir timer() fonksiyonunu çalıştırır.

timer() fonksiyonu içinde:

secondsElapsed değişkeni 1 artırılır.

setTime() fonksiyonu çağrılır. Bu fonksiyon, artırılan secondsElapsed değerini dakika ve saniyeye dönüştürür ve bu yeni süreyi ekrana yazdırır. Bu süreç, kronometre durdurulana kadar her saniye tekrarlanır.

4. "Durdur" Butonuna Basıldığında
Kullanıcı "Durdur" düğmesine bastığında, stopClock() fonksiyonu çalışır.

Bu fonksiyon, daha önce "Başlat" düğmesine basıldığında interval değişkenine kaydedilen referansı kullanarak clearInterval() fonksiyonunu çağırır.

clearInterval() fonksiyonu, setInterval() döngüsünü durdurur ve timer() fonksiyonunun artık çalışmasını engeller.

Kronometre, durdurulduğu andaki sürede ekranda kalır.

5. "Sıfırla" Butonuna Basıldığında
Kullanıcı "Sıfırla" düğmesine bastığında, resetClock() fonksiyonu çalışır.

Bu fonksiyon ilk olarak stopClock() fonksiyonunu çağırarak kronometrenin durdurulmasını sağlar.

Ardından, secondsElapsed değişkenini 0 olarak sıfırlar.

Son olarak, setTime() fonksiyonunu çağırır. Bu, ekrandaki süreyi 00:00 olarak günceller.

<img width="1920" height="867" alt="{19944EF1-F0EC-4EFC-8156-5667E8B219B9}" src="https://github.com/user-attachments/assets/7ddabfe4-992c-4db2-9fa3-79a621ea6d4c" />





