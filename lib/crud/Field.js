export class Field {
    constructor(title, tooltip, type, additionalInfo, validation, getValue, setValue) {
        this.title = title;
        this.tooltip = tooltip;
        this.type = type;
        this.additionalInfo = additionalInfo;
        this.validation = validation;
        this.getValue = getValue;
        this.setValue = setValue;
    }
    isValid(data) {
        return this.validation?.validate(this, data) ?? true;
    }
}
//# sourceMappingURL=Field.js.map