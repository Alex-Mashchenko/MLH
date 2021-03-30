import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods'
import exp from "../../data/expected.json";

describe('Story field suit', function () {

    before('Open app', function () {
        browser.url('');
    });

    it('TC-090 Placeholder is correct', function () {
        let storyPlaceholder = $(sel.storyType).getText();
        expect(storyPlaceholder).toEqual(exp.storyPlaceHolder);
    });

    it('TC-091 The field is a dropdown', function () {
        browser.refresh();
        $(sel.storyType).click();
        let storyDropdown = $(sel.storyDropdown).isDisplayedInViewport();
        expect(storyDropdown).toEqual(true);
    });

    it('TC-092 User can choose one of the types "Comedy" ', function () {
        browser.refresh();
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let storyComedyIsField = $(sel.storyType).getText();
        expect(storyComedyIsField).toEqual(exp.storyComedy);
    });

    it('TC-093 User can choose one of the types "Overcoming the Monster" ', function () {
        browser.refresh();
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let storyOvercomingTheMonsterIsField = $(sel.storyType).getText();
        expect(storyOvercomingTheMonsterIsField).toEqual(exp.storyOvercomingTheMonster);
    });

    it('TC-094 User can choose one of the types "Rebirth" ', function () {
        browser.refresh();
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let storyRebirthIsField = $(sel.storyType).getText();
        expect(storyRebirthIsField).toEqual(exp.storyRebirth);
    });

    it('TC-095 User can choose one of the types "Quest" ', function () {
        browser.refresh();
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let storyQuestIsField = $(sel.storyType).getText();
        expect(storyQuestIsField).toEqual(exp.storyQuest);
    });

    it('TC-096 User can choose one of the types "Journey and Return" ', function () {
        browser.refresh();
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let storyJourneyAndReturnIsField = $(sel.storyType).getText();
        expect(storyJourneyAndReturnIsField).toEqual(exp.storyJourneyAndReturn);
    });

    it('TC-097 User can choose one of the types "Rags and Riches" ', function () {
        browser.refresh();
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let storyRagsAndRichesIsField = $(sel.storyType).getText();
        expect(storyRagsAndRichesIsField).toEqual(exp.storyRagsAndRiches);
    });

    it('TC-098 User can choose one of the types "Tragedy" ', function () {
        browser.refresh();
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let storyTragedyIsField = $(sel.storyType).getText();
        expect(storyTragedyIsField).toEqual(exp.storyTragedy);
    });

    it('TC-099 User can choose one of the types "Quest change to Tragedy" ', function () {
        browser.refresh();
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let storyComedyIsField = $(sel.storyType).getText();
        expect(storyComedyIsField).toEqual(exp.storyTragedy);
    });

    it('TC-100 After the value is chosen the dropdown is collapsed', function () {
        browser.refresh();
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let storyDropdown = $(sel.storyDropdown).isFocused();
        expect(storyDropdown).toEqual(false);

    });
/*
    it('TC-101 Story Type is hightlighted when user hovers on it', function () {
        browser.refresh();
        browser.pause(2000);
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let storyDropdown = $(sel.storyDropdown).isDisplayed();
        expect(storyDropdown).toEqual(false);

    });

 */

    it('TC-102 Type is not selected', function () {
        browser.refresh();
        browser.pause(2000);
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.it].click();
        $(sel.age).setValue(age.default);
        let submitButton = $(sel.submit).isClickable();
        expect(submitButton).toEqual(false);
    });
});
