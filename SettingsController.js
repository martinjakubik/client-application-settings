import { SettingsView } from './SettingsView.js';

class SettingsController {
    constructor(aSettings) {
        this.aSettings = aSettings;
    }

    renderSettings() {
        this.aSettings.forEach(oSetting => {
            console.log(`key: ${oSetting.key} value: ${oSetting.value}`);
        })
        SettingsView.render(this.aSettings);
    }
}

export { SettingsController };