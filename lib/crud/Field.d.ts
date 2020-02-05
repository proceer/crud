import { AdditionalInfo } from '../crud/additional-info/AdditionalInfo';
import { FieldValidation } from '../crud/FieldValidation';
export declare class Field {
    readonly title: string | undefined;
    readonly tooltip: string | undefined;
    readonly type: string;
    readonly additionalInfo: AdditionalInfo | any | undefined;
    readonly validation: FieldValidation | undefined;
    readonly getValue: (data: any) => any;
    readonly setValue: (data: any, value: any) => void;
    constructor(title: string | undefined, tooltip: string | undefined, type: string, additionalInfo: AdditionalInfo | any | undefined, validation: FieldValidation | undefined, getValue: (data: any) => any, setValue: (data: any, value: any) => void);
    isValid(data: any): boolean;
}
