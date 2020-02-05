import { Field } from "@/crud/Field";

export class Section {
  constructor(
    public readonly title: string | undefined,
    public readonly fields: Field[]
  ) {}

  isValid(data: any): boolean {
    return this.fields.reduce(
      (previousValue: boolean, currentValue: Field) =>
        previousValue && currentValue.isValid(data),
      true
    );
  }
}
