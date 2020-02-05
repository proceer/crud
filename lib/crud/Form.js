import { FormDataHandler } from "../crud/FormDataHandler";
export class Form {
    constructor(entityName, title, sections, search, sorting, validation, itemsPerPage, dataSource, dataDestination, entityIdSelector) {
        this.entityName = entityName;
        this.title = title;
        this.sections = sections;
        this.search = search;
        this.sorting = sorting;
        this.validation = validation;
        this.itemsPerPage = itemsPerPage;
        this.data = new FormDataHandler(dataSource, dataDestination, entityIdSelector);
    }
    get formIsValid() {
        return this.validation?.validate(this) ?? true;
    }
    get sectionsAreValid() {
        return this.sections.reduce(
        // TODO Not only add, also edit needed here
        (previousValue, currentValue) => previousValue && currentValue.isValid(this.data.addFormData), true);
    }
    get isValid() {
        return this.formIsValid && this.sectionsAreValid;
    }
}
//# sourceMappingURL=Form.js.map