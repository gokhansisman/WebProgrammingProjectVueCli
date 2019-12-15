const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const messages = require('./db/messages');
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
            "musteriler": [
              {
                "id": 1,
                "isim": "Gokhan",
                "soyad": "Sisman",
                "email": "gokhansisman97@gmail.com",
                "sifre": "12345",
                "dogumTarihi": "12-12-1912"
              },
              {
                "id": 2,
                "isim": "Bektas",
                "soyad": "Cimen",
                "email": "bektasCimen@gmail.com",
                "sifre": "1234",
                "dogumTarihi": "12-12-1912"
              },
              {
                "id": 3,
                "isim": "Furkan",
                "soyad": "Baltaci",
                "email": "fbaltaci34@gmail.com",
                "sifre": "123",
                "dogumTarihi": "12-12-1912"
              },
              {
                "isim": "Gokhan",
                "soyad": "",
                "email": "",
                "sifre": "",
                "dogumTarihi": "",
                "id": 4
              },
              {
                "isim": "Gokhan5",
                "soyad": "",
                "email": "",
                "sifre": "",
                "dogumTarihi": "",
                "id": 5
              },
              {
                "isim": "GokhanDeneme",
                "soyad": "SismanDeneme",
                "email": "gokhanDeneme",
                "sifre": "1234",
                "dogumTarihi": "12/02/2022",
                "id": 6
              }
            ],
            "yayinevleri": [
              {
                "id": 1,
                "yayinevi": "A Kariyer Yayıncılık"
              },
              {
                "id": 2,
                "yayinevi": "A Kitap"
              },
              {
                "id": 3,
                "yayinevi": "Academia Yayınevi"
              },
              {
                "id": 4,
                "yayinevi": "A Yayınları"
              },
              {
                "yayinevi": "Adem Yayınları",
                "id": 5
              }
            ],
            "books": [
              {
                "kitap1Adi": "Issız Kadınlar Sokağı",
                "kitap1Yazar": "Canan Tan",
                "kitap1YayinEvi": "Doğan Kitap",
                "kitap1Yuzde": "28",
                "kitap1Fiyat": "27,00",
                "kitap1IndirimliFiyat": "19,44",
                "kitap1Editor": "Nejla Feroğlu",
                "kitap2Adi": "Dün Bugün Yarın ve Sonsuza Kadar",
                "kitap2Yazar": "Zeynep Sahr",
                "kitap2YayinEvi": "Ren Kitap",
                "kitap2Yuzde": "40",
                "kitap2Fiyat": "30,00",
                "kitap2IndirimliFiyat": "23,40",
                "kitap2Editor": "Nejla Feroğlu",
                "kitap3Adi": "Ağacın Hafızası",
                "kitap3Yazar": "Tina Valles",
                "kitap3YayinEvi": "Can Yayınları",
                "kitap3Yuzde": "30",
                "kitap3Fiyat": "27,50",
                "kitap3IndirimliFiyat": "19,44",
                "kitap3Editor": "19,25",
                "kitap30Adi": "Nal Köyü",
                "kitap30Yazar": "Mustafa İsen",
                "kitap30YayinEvi": "Mustafa İsen",
                "kitap30Yuzde": "28",
                "kitap30Fiyat": "18,00",
                "kitap30IndirimliFiyat": "12,96",
                "kitap30Editor": "Nejla Feroğlu"
              }
            ]
          
    });
});

app.get('/messages', (req, res) => {
    messages.getAll().then((messages) => {
        res.json(messages);
    });
});

app.post('/messages', (req, res) => {
    console.log(req.body);
    messages.create(req.body).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});