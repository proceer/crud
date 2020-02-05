import { Field, FieldValidation } from '../../crud';
declare class RequiredValidation implements FieldValidation {
    validate(field: Field, data: any): boolean;
}
declare const _default: RequiredValidation;
export default _default;
