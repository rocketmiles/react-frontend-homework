import hotelSortService from './hotel-sort.service';
import testObject from '../testObject'

//all test data and results exist in testObject
//mockApi is an abbreviation of the data called from the RocketMiles API
//tests for sorting dropdown menu ascending, descending, recommended, and no selection

describe('HotelSortService', () => {

    it('sorts hotel prices decending from highest price to lowest price', () => {
        expect(hotelSortService(testObject.mockApi, 'descending')).toStrictEqual(testObject.testSortDescending);
    });

    it('sorts hotel prices ascending from lowest price to highest price', () => {
        expect(hotelSortService(testObject.mockApi, 'ascending')).toStrictEqual(testObject.testSortAscending);
    });

    it('sorts hotel prices descending from highest rating to lowest rating', () => {
        expect(hotelSortService(testObject.mockApi, 'recommended')).toStrictEqual(testObject.testSortRecommended);
    });

    it('is called without user input on sort method', () => {
        expect(hotelSortService(testObject.mockApi)).toStrictEqual(testObject.mockApi);
    });


});
