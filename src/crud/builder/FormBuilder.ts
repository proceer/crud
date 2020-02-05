// class FormBuilder {
//   static create(typeId: string) {
//     return new FormBuilder(typeId);
//   }
//
//   private readonly fieldId: string;
//   private _title?: string;
//   private _fields: Field[] = [];
//   private _search?: Search;
//   private _source!: DataSourceAdapter;
//   private _destination!: DataDestinationAdapter;
//
//   protected constructor(fieldId: string) {
//     this.fieldId = fieldId;
//   }
//
//   title(title: string): FormBuilder {
//     this._title = title;
//     return this;
//   }
//
//   field(field: Field): FormBuilder {
//     this._fields.push(field);
//     return this;
//   }
//
//   fields(fields: Field[]): FormBuilder {
//     this._fields.push(fields);
//     return this;
//   }
//
//   search(search: Search): FormBuilder {
//     this._search = search;
//     return this;
//   }
//
//   dataSource(source: DataSourceAdapter): FormBuilder {
//     this._source = source;
//     return this;
//   }
//
//   dataDestination(destination: DataDestinationAdapter): FormBuilder {
//     this._destination = destination;
//     return this;
//   }
//
//   build(): Form {
//     return new Form(
//       this.fieldId,
//       this._title,
//       this._fields,
//       this._search,
//       this._source,
//       this._destination
//     );
//   }
// }
