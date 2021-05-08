import HotelSortService from './hotel-sort.service';
import testObject from '../testObject'

describe('HotelSortService', () => {

    it('sorts hotel prices decending from highest price to lowest price', () => {
        expect(HotelSortService(testObject.mockApi, 'descending')).toStrictEqual(testObject.testSortDescending);
    });

    it('sorts hotel prices ascending from lowest price to highest price', () => {
        expect(HotelSortService(testObject.mockApi, 'ascending')).toStrictEqual(testObject.testSortAscending);
    });

    it('is called without user input on sort method', () => {
        expect(HotelSortService(testObject.mockApi)).toStrictEqual(testObject.mockApi);
    });


});
