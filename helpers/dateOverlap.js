//funkcija proverava da li se rezervacije vremenski preklapaju

function dateOverlap(reservations, datumOd, datumDo) {
    let dateRanges = [];
    let overlaps = false;

    reservations.forEach((reservation) => {
        dateRanges.push({datumOd: reservation.datumOd, datumDo: reservation.datumDo})
    });

    dateRanges.forEach((dateRange) => {
        if ((dateRange.datumOd <= datumDo) && (dateRange.datumDo >= datumOd)) {
            overlaps = true;
        }
    });

    return !overlaps;
}

module.exports = dateOverlap;