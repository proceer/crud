import BaseComponent from '../../crud-vue/component/BaseComponent';
export default class BaseStringComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fieldDataInternal = '';
    }
    initialize() {
        const value = this.field.getValue(this.formData);
        if (value)
            this.fieldDataInternal = value;
    }
    get fieldData() {
        return this.fieldDataInternal;
    }
    // noinspection JSUnusedGlobalSymbols
    set fieldData(value) {
        this.fieldDataInternal = value;
        this.field.setValue(this.formData, this.fieldDataInternal);
    }
}
//# sourceMappingURL=BaseStringComponent.js.map