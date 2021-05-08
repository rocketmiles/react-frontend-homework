import hotelFilterService from './hotel-filter.service';
import testObject from '../testObjectSort'

/**
 * Happy path test cases:
 * one letter/number matches, more than one letter/number matches, whole name matches, letters and numbers exists in the name
 * even if the user doesnt capitalize a letter I want the result to show (use toLowerCase or toUpperCase on both API data and user input when compare),
 * user inputs accidental space before/after letters (.trim())
 *
 * unhappy path:
 * letter/number is nowhere in API call, some letters/numbers match and some letters dont, no user input, user inputs only spaces,
 * user inputs right letters/numbers in wrong order, user misspells (eg Jilton for Hilton)
 */


describe('HotelFilterService', () => {

    it('is called without user input on sort method', () => {
        expect(hotelSortService(testObject.mockApi)).toStrictEqual(testObject.mockApi);
    });


});
