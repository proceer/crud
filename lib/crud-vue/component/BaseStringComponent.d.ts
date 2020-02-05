import BaseComponent from "@/crud-vue/component/BaseComponent";
export default class BaseStringComponent extends BaseComponent {
    fieldDataInternal: string;
    initialize(): void;
    get fieldData(): string;
    set fieldData(value: string);
}
