import hotelFilterService from './hotel-filter.service';
import testObject from '../testObject'


describe('HotelFilterService', () => {

    it('is called without user input on sort method', () => {
        expect(hotelSortService(testObject.mockApi)).toStrictEqual(testObject.mockApi);
    });


});
