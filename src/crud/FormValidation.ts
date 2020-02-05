import { Form } from "@/crud/Form";

export interface FormValidation {
  validate(form: Form): boolean;
}
