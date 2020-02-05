export class Section {
    constructor(title, fields) {
        this.title = title;
        this.fields = fields;
    }
    isValid(data) {
        return this.fields.reduce((previousValue, currentValue) => previousValue && currentValue.isValid(data), true);
    }
}
//# sourceMappingURL=Section.js.map