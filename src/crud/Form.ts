import { Search } from "../crud/Search";
import { FormValidation } from "../crud/FormValidation";
import { DataSourceAdapter } from "../crud/data/DataSourceAdapter";
import { DataDestinationAdapter } from "../crud/data/DataDestinationAdapter";
import { FormDataHandler } from "../crud/FormDataHandler";
import { Sorting } from "../crud/Sorting";
import { Section } from "../crud/Section";

export class Form {
  readonly data: FormDataHandler;

  constructor(
    public readonly entityName: string,
    public readonly title: string | undefined,
    public readonly sections: Section[],
    public readonly search: Search | undefined,
    public readonly sorting: Sorting | undefined,
    public readonly validation: FormValidation | undefined,
    public readonly itemsPerPage: number,
    dataSource: DataSourceAdapter,
    dataDestination: DataDestinationAdapter,
    entityIdSelector: (entity: any) => string
  ) {
    this.data = new FormDataHandler(
      dataSource,
      dataDestination,
      entityIdSelector
    );
  }

  get formIsValid(): boolean {
    return this.validation?.validate(this) ?? true;
  }

  get sectionsAreValid(): boolean {
    return this.sections.reduce(
      // TODO Not only add, also edit needed here
      (previousValue: boolean, currentValue: Section) =>
        previousValue && currentValue.isValid(this.data.addFormData),
      true
    );
  }

  get isValid(): boolean {
    return this.formIsValid && this.sectionsAreValid;
  }
}
