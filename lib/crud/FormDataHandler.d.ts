import { DataDestinationAdapter } from '../crud/data/DataDestinationAdapter';
import { DataSourceAdapter } from '../crud/data/DataSourceAdapter';
export declare class FormDataHandler {
    private readonly sourceAdapter;
    private readonly destinationAdapter;
    private readonly entityIdSelector;
    private readonly dataInternal;
    private addFormDataInternal?;
    constructor(sourceAdapter: DataSourceAdapter, destinationAdapter: DataDestinationAdapter, entityIdSelector: (entity: any) => string, set?: Map<string, any>);
    get addFormData(): any;
    getAll(): Promise<IterableIterator<any>>;
    getById(id: string): Promise<any | undefined>;
    getId(entity: any): string;
    save(entity: any, isNew: boolean): Promise<any | undefined>;
}
