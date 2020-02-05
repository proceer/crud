import { __decorate, __metadata } from "tslib";
import { Prop } from "vue-property-decorator";
import BaseComponent from "@/crud-vue/component/BaseComponent";
export default class BaseArrayElementComponent extends BaseComponent {
    updateRow(row) {
        this.$emit("update-row", this.index, row);
    }
    deleteRow() {
        this.$emit("delete-row", this.index);
    }
}
__decorate([
    Prop(),
    __metadata("design:type", Number)
], BaseArrayElementComponent.prototype, "index", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Array)
], BaseArrayElementComponent.prototype, "arrayDataInternal", void 0);
//# sourceMappingURL=BaseArrayElementComponent.js.map