import { DataDestinationAdapter } from '../crud/data/DataDestinationAdapter';
import { DataSourceAdapter } from '../crud/data/DataSourceAdapter';

export class FormDataHandler {
  private readonly dataInternal: Map<string, any>;
  private addFormDataInternal?: any;

  constructor(
    private readonly sourceAdapter: DataSourceAdapter,
    private readonly destinationAdapter: DataDestinationAdapter,
    private readonly entityIdSelector: (entity: any) => string,
    set?: Map<string, any>,
  ) {
    this.dataInternal = set ?? new Map<string, any>();
  }

  get addFormData(): any {
    return this.addFormDataInternal ?? (this.addFormDataInternal = {});
  }

  async getAll(): Promise<IterableIterator<any>> {
    if (this.dataInternal.size === 0) {
      const all = await this.sourceAdapter.loadAll();
      for (const e of all) {
        this.dataInternal.set(this.getId(e), e);
      }
    }
    return this.dataInternal.values();
  }

  getById(id: string): Promise<any | undefined> {
    // Note that using the cache here is not wanted
    //if (!this.dataInternal.has(id)) {
    //  const e = await this.sourceAdapter.loadById(id);
    //  this.dataInternal.set(id, e);
    //}
    //return this.dataInternal.get(id);
    return this.sourceAdapter.loadById(id);
  }

  getId(entity: any): string {
    return this.entityIdSelector(entity);
  }

  save(entity: any, isNew: boolean): Promise<any | undefined> {
    return this.destinationAdapter.saveById(this.getId(entity), entity, isNew);
  }
}
