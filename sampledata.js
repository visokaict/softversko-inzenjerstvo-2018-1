const cars = {
    name: "cars", data: [
        {
            "tablice": "BG123EC",
            "id": "46ebf37f-3434-4585-84fa-de2391ae7f4c",
            "modelVozila": "Toyota Corolla",
            "godiste": 2018,
            "boja": "Plava",
            "menjac": "Manuelni",
            "sedista": 4,
            "kubikaza": 1400,
            "dostupnost": true
        },
        {
            "tablice": "BG246AB",
            "id": "c366d720-3ccb-42cd-8c64-ec83ee635361",
            "modelVozila": "Chevrolet Bolt",
            "godiste": 2016,
            "boja": "Narandžasta",
            "menjac": "Automatski",
            "sedista": 4,
            "kubikaza": 1200,
            "dostupnost": true
        },
        {
            "tablice": "BG489BC",
            "id": "097fe43c-b357-43d0-8fb4-89c04f83c343",
            "modelVozila": "Audi A4",
            "godiste": 2018,
            "boja": "Tamno plava",
            "menjac": "Manuelni",
            "sedista": 4,
            "kubikaza": 2300,
            "dostupnost": true
        },
        {
            "tablice": "BG999SD",
            "id": "76bde57d-6a24-46ad-a666-2970f51f8a67",
            "modelVozila": "Subaru Forester",
            "godiste": 2019,
            "boja": "Bela",
            "menjac": "Manuelni",
            "sedista": 4,
            "kubikaza": 2500,
            "dostupnost": true
        },
        {
            "tablice": "BG444FD",
            "id": "d5c53c2e-c84e-4607-9422-26983096b6e8",
            "modelVozila": "BMW X3",
            "godiste": 2014,
            "boja": "Siva",
            "menjac": "Manuelni",
            "sedista": 4,
            "kubikaza": 3000,
            "dostupnost": false
        },
        {
            "tablice": "BG404NF",
            "id": "7edde0c2-e8ee-46ff-9f43-2b346ef699e1",
            "modelVozila": "Bentley Bentayga hybrid",
            "godiste": 2018,
            "boja": "Bela",
            "menjac": "Automatski",
            "sedista": 4,
            "kubikaza": 2000,
            "dostupnost": true
        }
    ]
};

const users = {
    name: "users", data: [
        {
            "lozinkaHash": "$2a$10$abT3vapJUO0u68N0Bksz1OvYRaEicGp2MMSMMR2WlFMvhZvvIHdxa",
            "idKorisnika": "18d52f65-dd05-41c9-886f-60b334f2662f",
            "korIme": "Korisnik1",
            "ime": "Korisnik Korisniković",
            "email": "korisnik1@ggmail.com",
            "tipKorisnika": "Kupac",
        },
        {
            "lozinkaHash": "$2a$10$IIPoxjAb.yw5T7DBAlXGXOgawWDJ5GM1mm18b/ZxQvEBe66emyNha",
            "id": "8b2fee33-4bf2-4f5f-9444-a714c1e29e95",
            "korIme": "Korisnik2",
            "ime": "Korisnik Korisniković",
            "email": "korisnik2@ggmail.com",
            "tipKorisnika": "Kupac",
        }
    ]
};
const reservations = {
    name: "reservations", data: [
        {
            "id": "71802399-b4fb-43e1-86d4-f35f79e89f80",
            "kupac": "b293545a-6544-421e-8641-8745ae3b6833",
            "idVozila": "7edde0c2-e8ee-46ff-9f43-2b346ef699e1",
            "datumOd": 1545177600,
            "datumDo": 1545696000,
            "cena": 2000,
            "valuta": "RSD",
            "placena": true

        },
        {
            "id": "d790af63-92a0-432c-8634-08e3e9b1bccf",
            "kupac": "b293545a-6544-421e-8641-8745ae3b6833",
            "idVozila": "7edde0c2-e8ee-46ff-9f43-2b346ef699e1",
            "datumOd": 1545782400,
            "datumDo": 1546041600,
            "cena": 2000,
            "valuta": "RSD",
            "placena": true

        },
        {
            "id": "7837b4a6-fc99-4859-92f1-e83478d4fb1d",
            "kupac": "b293545a-6544-421e-8641-8745ae3b6833",
            "idVozila": "46ebf37f-3434-4585-84fa-de2391ae7f4c",
            "datumOd": 1546646400,
            "datumDo": 1547078400,
            "cena": 2000,
            "valuta": "RSD",
            "placena": true

        }
    ]
};

const sampledata = [cars, users, reservations];


module.exports = sampledata;