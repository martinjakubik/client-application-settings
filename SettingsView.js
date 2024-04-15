import { createDiv, createParagraph } from './learnhypertext.mjs';

class SettingsView {
    static render(aSettings) {
        const oSettingsList = createDiv('settings');
        aSettings.forEach((oSetting, nIndex) => {
            console.log(`key: ${oSetting.key} value: ${oSetting.value}`);
            const oSettingItem = createDiv(`settingItem${nIndex}`, oSettingsList);
            const sSettingKey = oSetting.key;
            const sSettingValue = oSetting.value;
            const oKeyArea = createDiv(`settingKeyArea-${sSettingKey}`, oSettingItem);
            const oValueArea = createDiv(`settingValueArea-${sSettingKey}`, oSettingItem);
            createParagraph(`settingKey-${settingKey}`, sSettingKey, oKeyArea);
            createParagraph(`settingValue-${settingKey}`, sSettingValue, oValueArea);
        });
    }
}

export { SettingsView };