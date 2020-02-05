import { FieldValidation } from "@/crud/FieldValidation";
import { AdditionalInfo } from "@/crud/additional-info/AdditionalInfo";

export class Field {
  constructor(
    public readonly title: string | undefined,
    public readonly tooltip: string | undefined,
    public readonly type: string,
    public readonly additionalInfo: AdditionalInfo | any | undefined,
    public readonly validation: FieldValidation | undefined,
    public readonly getValue: (data: any) => any,
    public readonly setValue: (data: any, value: any) => void
  ) {}

  isValid(data: any): boolean {
    return this.validation?.validate(this, data) ?? true;
  }
}
