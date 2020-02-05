import { Prop } from 'vue-property-decorator';
import BaseComponent from '../../crud-vue/component/BaseComponent';

export default class BaseArrayElementComponent extends BaseComponent {
  @Prop()
  index!: number;
  @Prop()
  // Note: this must not have the same name as the parent "arrayData" because for any strange reason this caused binding errors
  arrayDataInternal!: any[];

  updateRow(row: any) {
    this.$emit('update-row', this.index, row);
  }

  deleteRow() {
    this.$emit('delete-row', this.index);
  }
}
