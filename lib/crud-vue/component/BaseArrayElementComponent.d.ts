import BaseComponent from '../../crud-vue/component/BaseComponent';
export default class BaseArrayElementComponent extends BaseComponent {
    index: number;
    arrayDataInternal: any[];
    updateRow(row: any): void;
    deleteRow(): void;
}
