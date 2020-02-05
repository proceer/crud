import { Field } from "../crud/Field";
export declare class Section {
    readonly title: string | undefined;
    readonly fields: Field[];
    constructor(title: string | undefined, fields: Field[]);
    isValid(data: any): boolean;
}
