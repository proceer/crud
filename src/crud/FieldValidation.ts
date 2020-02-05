import { Field } from '../crud/Field';

export interface FieldValidation {
  validate(field: Field, data: any): boolean;
}
