export class FormDataHandler {
    constructor(sourceAdapter, destinationAdapter, entityIdSelector, set) {
        this.sourceAdapter = sourceAdapter;
        this.destinationAdapter = destinationAdapter;
        this.entityIdSelector = entityIdSelector;
        this.dataInternal = set ?? new Map();
    }
    get addFormData() {
        return this.addFormDataInternal ?? (this.addFormDataInternal = {});
    }
    async getAll() {
        if (this.dataInternal.size === 0) {
            const all = await this.sourceAdapter.loadAll();
            for (const e of all) {
                this.dataInternal.set(this.getId(e), e);
            }
        }
        return this.dataInternal.values();
    }
    getById(id) {
        // Note that using the cache here is not wanted
        //if (!this.dataInternal.has(id)) {
        //  const e = await this.sourceAdapter.loadById(id);
        //  this.dataInternal.set(id, e);
        //}
        //return this.dataInternal.get(id);
        return this.sourceAdapter.loadById(id);
    }
    getId(entity) {
        return this.entityIdSelector(entity);
    }
    save(entity, isNew) {
        return this.destinationAdapter.saveById(this.getId(entity), entity, isNew);
    }
}
//# sourceMappingURL=FormDataHandler.js.map