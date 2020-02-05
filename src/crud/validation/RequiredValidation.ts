import { Field, FieldValidation } from '../../crud';

class RequiredValidation implements FieldValidation {
  validate(field: Field, data: any): boolean {
    return false;
    // TODO Implement this
    //return !validator.isEmpty(data[field.fieldId]);
  }
}

export default new RequiredValidation();
