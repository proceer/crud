import BaseComponent from "@/crud-vue/component/BaseComponent";
export default class BaseArrayComponent extends BaseComponent {
    arrayData: any[];
    count: number;
    initialize(): void;
    updateRow: (index: number, rowData: any) => void;
    deleteRow: (index: number) => void;
}
