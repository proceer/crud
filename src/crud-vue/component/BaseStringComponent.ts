import BaseComponent from "@/crud-vue/component/BaseComponent";

export default class BaseStringComponent extends BaseComponent {
  fieldDataInternal: string = "";

  initialize() {
    const value = this.field.getValue(this.formData);
    if (value) this.fieldDataInternal = value;
  }

  public get fieldData(): string {
    return this.fieldDataInternal;
  }

  // noinspection JSUnusedGlobalSymbols
  public set fieldData(value: string) {
    this.fieldDataInternal = value;
    this.field.setValue(this.formData, this.fieldDataInternal);
  }
}
