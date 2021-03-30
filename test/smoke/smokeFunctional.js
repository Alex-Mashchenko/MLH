import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods'

describe('Required fields and story created', function () {

    before('Open app', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1...4 filled with valid values', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.it].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let submitButton = $(sel.submit).isEnabled();
        expect(submitButton).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();


        inputValues4(name.default, gender.it, age.default, story.comedy);

        $(sel.submit).click();
        let tryAgain = $(sel.tryAgain).isDisplayed();
        expect(tryAgain).toEqual(true);
    });

});