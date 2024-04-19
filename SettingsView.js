import { createDiv, createParagraph } from './learnhypertext.mjs';

class SettingsView {
    static render(aSettings) {
        const oSettingsList = createDiv('settings');
        aSettings.forEach((oSetting, nIndex) => {
            const oSettingItem = createDiv(`settingItem${nIndex}`, oSettingsList);
            const sSettingKey = oSetting.key;
            const sSettingValue = oSetting.value;
            const oKeyArea = createDiv(`settingKeyArea-${sSettingKey}`, oSettingItem);
            const oValueArea = createDiv(`settingValueArea-${sSettingKey}`, oSettingItem);
            createParagraph(`settingKey-${sSettingKey}`, sSettingKey, oKeyArea);
            createParagraph(`settingValue-${sSettingKey}`, sSettingValue, oValueArea);
        });
    }
}

export { SettingsView };