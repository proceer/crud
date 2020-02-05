export interface DataSourceAdapter {
    loadAll(): Promise<IterableIterator<any>>;
    loadById(id: string): Promise<any | undefined>;
}
