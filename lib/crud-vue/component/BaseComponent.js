import { __decorate, __metadata } from "tslib";
import { Prop, Vue } from 'vue-property-decorator';
import { Field, Form } from '../../crud';
// Note, this component should not have the @Component annotation since this
// may be used only once in the hierarchy as of 2020-01-08.
export default class BaseComponent extends Vue {
}
__decorate([
    Prop(),
    __metadata("design:type", Form)
], BaseComponent.prototype, "form", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Field)
], BaseComponent.prototype, "field", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], BaseComponent.prototype, "formData", void 0);
//# sourceMappingURL=BaseComponent.js.map