const cars = {
    name: "cars", data: [
        {
            "tablice": "BG123EC",
            "idVozila": "46ebf37f-3434-4585-84fa-de2391ae7f4c",
            "modelVozila": "Toyota Corolla",
            "godiste": 2018,
            "boja": "Plava",
            "menjac": "Manuelni",
            "sedista": 4,
            "kubikaza": "1400cc",
            "dostupnost": true
        },
        {
            "tablice": "BG246AB",
            "idVozila": "c366d720-3ccb-42cd-8c64-ec83ee635361",
            "modelVozila": "Chevrolet Bolt",
            "godiste": 2016,
            "boja": "Narandžasta",
            "menjac": "Automatski",
            "sedista": 4,
            "kubikaza": "1200cc",
            "dostupnost": true
        },
        {
            "tablice": "BG489BC",
            "idVozila": "097fe43c-b357-43d0-8fb4-89c04f83c343",
            "modelVozila": "Audi A4",
            "godiste": 2018,
            "boja": "Tamno plava",
            "menjac": "Manuelni",
            "sedista": 4,
            "kubikaza": "2300cc",
            "dostupnost": true
        },
        {
            "tablice": "BG999SD",
            "idVozila": "76bde57d-6a24-46ad-a666-2970f51f8a67",
            "modelVozila": "Subaru Forester",
            "godiste": 2019,
            "boja": "Bela",
            "menjac": "Manuelni",
            "sedista": 4,
            "kubikaza": "2500cc",
            "dostupnost": true
        },
        {
            "tablice": "BG444FD",
            "idVozila": "d5c53c2e-c84e-4607-9422-26983096b6e8",
            "modelVozila": "BMW X3",
            "godiste": 2014,
            "boja": "Siva",
            "menjac": "Manuelni",
            "sedista": 4,
            "kubikaza": "3000cc",
            "dostupnost": false
        },
        {
            "tablice": "BG404NF",
            "idVozila": "7edde0c2-e8ee-46ff-9f43-2b346ef699e1",
            "modelVozila": "Bentley Bentayga hybrid",
            "godiste": 2018,
            "boja": "Bela",
            "menjac": "Automatski",
            "sedista": 4,
            "kubikaza": "2000cc",
            "dostupnost": true
        }
    ]
};

const users = {name: "users", data: []};
const reservations = {
    name: "reservations", data: [
        {
            "idVozila": "7edde0c2-e8ee-46ff-9f43-2b346ef699e1",
            "datumOd": 1545177600,
            "datumDo": 1545696000,
            "kupac": "b293545a-6544-421e-8641-8745ae3b6833",
            "cena": 2000,
            "valuta": "RSD",
            "placena": true

        },
        {
            "idVozila": "7edde0c2-e8ee-46ff-9f43-2b346ef699e1",
            "datumOd": 1545782400,
            "datumDo": 1546041600,
            "kupac": "b293545a-6544-421e-8641-8745ae3b6833",
            "cena": 2000,
            "valuta": "RSD",
            "placena": true

        },
        {
            "idVozila": "46ebf37f-3434-4585-84fa-de2391ae7f4c",
            "datumOd": 1546646400,
            "datumDo": 1547078400,
            "kupac": "b293545a-6544-421e-8641-8745ae3b6833",
            "cena": 2000,
            "valuta": "RSD",
            "placena": true

        }
    ]
};

const sampledata = [cars, users, reservations];


module.exports = sampledata;