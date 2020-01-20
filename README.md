# Movie App

Bu proje  [Create React App](https://github.com/facebook/create-react-app) ile yapıldı.

Sadece mobil ekranlar için tasarlandı masaüstü desteklenmiyor.

## Localde çalıştırmak

###### Gereksinimler

- NodeJs


------------

Kurulum : `npm install`
Çalıştırmak  : `npm start`
Test : `npm run test`


Tarayıcıda [localhost:3000](http://localhost:3000) adresini açınca uygulama çalışıyor olacak.



## Uygulamaya Genel Bakış

#### Movie List Page

![](https://raw.githubusercontent.com/bilalkocak/armut-fe/master/ScreenShots/list.gif)

Data klasörü altındaki `movieList.json` dosyasındaki filmlerin listelendiği sayfa.

- Sayfa yüklenirken data gelene kadar loading componenti gösteriliyor. Herhangi bir api bağlantısı olmadığı için ve gerçeğe yakın olması loadingin gözükmesi için datanın gelmesi geciktirildi.

- Listelenen filmlerdeki "Movie Details" butonuna tıklanınca `/movie-detail/{id}` ye yönlendirir.

- Film puanı ve puan barı 0'dan başlayarak 2 saniyelik bir süreçte yavaş yavaş artıyor.

------------
#### Movie Detail Page

![](https://raw.githubusercontent.com/bilalkocak/armut-fe/master/ScreenShots/details.gif)

Yine data klasörü altındaki `{id}.json` dosyasından uygun olan filmin detaylarının gösterildiği sayfa. Buradaki id, URL'den alınır.

- Loading gösterimi ve film puanı ilk sayfada olduğu şekilde gerçekleşiyor.

- Film afişinin sağ altında ve sayfa altındaki butonlar aynı işlevi görüyor. Bir filmi izleme listenize ekleyip çıkarabiliyorsunuz. Bir db olmadığı için bu liste `localstorage`'da tutuluyor.

------------


#### 404 Page

![](https://raw.githubusercontent.com/bilalkocak/armut-fe/master/ScreenShots/404.png)

App.js dosyasında tanımlanmış Route paternleri dışında bir url girilirse veya var olan id lerden başka bir id ile film istenirse bu sayfa açılır.


