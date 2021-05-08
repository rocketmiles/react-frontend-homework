export default function HotelSortService(arrayToSort, direction) {

    const hotelSort = arrayToSort.sort((a, b) => {

        switch (direction) {
            case 'descending':
                return b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;
            case 'ascending':
                return a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;
            case 'recommended':
                return b.hotelStaticContent.rating - a.hotelStaticContent.rating;
            default:
                console.error('issue sorting, hotel results are returned unsorted')
                return arrayToSort
        }
    })

    return hotelSort
}
