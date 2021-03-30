
import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods'

     describe('Age field suit', function () {

        before('Open app', function () {
          browser.url('');
    });

    describe('Placeholder', function () {

        it('TC-XXX Placeholder is correct', function () {

            expect(submitButton).toEqual(true);
        });
    });

    describe('Positive cases', function () {

        it('TC-XXX Age = 1', function () {
            inputValues4(name.default, gender.it, age.min, story.comedy);
            let submitButton = $(sel.submit).isEnabled();
            expect(submitButton).toEqual(true);
        });

        it('TC-XXX Age = 999999999999', function () {
            let submitButton = $(sel.submit).isEnabled();
            expect(submitButton).toEqual(true);
        });

    });

    describe('Negative cases', function () {

        it('TC-XXX Age = 0', function () {
        expect(tryAgain).toEqual(true);
        });

        it('TC-XXX Age = 1000000000000', function () {
        expect(tryAgain).toEqual(true);
        });

    });

});

 */
