import { SettingsView } from './SettingsView.js';

class SettingsController {
    constructor(aSettings) {
        this.aSettings = aSettings;
    }

    renderSettings() {
        SettingsView.render(this.aSettings);
    }
}

export { SettingsController };