import { Vue } from "vue-property-decorator";
import BaseComponent from "@/crud-vue/component/BaseComponent";

export default class BaseArrayComponent extends BaseComponent {
  arrayData: any[] = [];
  count: number = 0;

  initialize() {
    const fieldData = this.field.getValue(this.formData);
    if (fieldData) {
      this.arrayData = fieldData;
      this.count = fieldData.length;
    }
  }

  // Must be a callback function because this would not be available
  updateRow = (index: number, rowData: any) => {
    this.arrayData[index] = rowData;
    this.field.setValue(this.formData, this.arrayData);
  };

  // Must be a callback function because this would not be available
  deleteRow = (index: number) => {
    console.log(index);
    this.arrayData.splice(index, 1);
    this.field.setValue(this.formData, this.arrayData);
  };
}
