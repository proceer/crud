import { Search } from "../crud/Search";
import { FormValidation } from "../crud/FormValidation";
import { DataSourceAdapter } from "../crud/data/DataSourceAdapter";
import { DataDestinationAdapter } from "../crud/data/DataDestinationAdapter";
import { FormDataHandler } from "../crud/FormDataHandler";
import { Sorting } from "../crud/Sorting";
import { Section } from "../crud/Section";
export declare class Form {
    readonly entityName: string;
    readonly title: string | undefined;
    readonly sections: Section[];
    readonly search: Search | undefined;
    readonly sorting: Sorting | undefined;
    readonly validation: FormValidation | undefined;
    readonly itemsPerPage: number;
    readonly data: FormDataHandler;
    constructor(entityName: string, title: string | undefined, sections: Section[], search: Search | undefined, sorting: Sorting | undefined, validation: FormValidation | undefined, itemsPerPage: number, dataSource: DataSourceAdapter, dataDestination: DataDestinationAdapter, entityIdSelector: (entity: any) => string);
    get formIsValid(): boolean;
    get sectionsAreValid(): boolean;
    get isValid(): boolean;
}
