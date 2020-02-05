import { __decorate, __metadata } from "tslib";
import { Emit, Prop, Vue } from 'vue-property-decorator';
import { Form } from '../../crud';
// Note, this component should not have the @Component annotation since this
// may be used only once in the hierarchy as of 2020-01-08.
export default class BaseLayout extends Vue {
    get titleOfForm() {
        return this.title ?? this.form.title;
    }
    emitIsLoading(value) {
        return value;
    }
}
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Form)
], BaseLayout.prototype, "form", void 0);
__decorate([
    Prop({ default: undefined }),
    __metadata("design:type", String)
], BaseLayout.prototype, "title", void 0);
__decorate([
    Prop({ default: true }),
    __metadata("design:type", Boolean)
], BaseLayout.prototype, "showTitle", void 0);
__decorate([
    Prop({ default: false }),
    __metadata("design:type", Boolean)
], BaseLayout.prototype, "showSections", void 0);
__decorate([
    Prop({ default: false }),
    __metadata("design:type", Boolean)
], BaseLayout.prototype, "loading", void 0);
__decorate([
    Emit('update:loading'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Boolean)
], BaseLayout.prototype, "emitIsLoading", null);
//# sourceMappingURL=BaseLayout.js.map