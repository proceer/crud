import BaseComponent from '../../crud-vue/component/BaseComponent';
export default class BaseArrayComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.arrayData = [];
        this.count = 0;
        // Must be a callback function because this would not be available
        this.updateRow = (index, rowData) => {
            this.arrayData[index] = rowData;
            this.field.setValue(this.formData, this.arrayData);
        };
        // Must be a callback function because this would not be available
        this.deleteRow = (index) => {
            console.log(index);
            this.arrayData.splice(index, 1);
            this.field.setValue(this.formData, this.arrayData);
        };
    }
    initialize() {
        const fieldData = this.field.getValue(this.formData);
        if (fieldData) {
            this.arrayData = fieldData;
            this.count = fieldData.length;
        }
    }
}
//# sourceMappingURL=BaseArrayComponent.js.map