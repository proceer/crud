import { Prop, Vue } from 'vue-property-decorator';
import { Field, Form } from '../../crud';

// Note, this component should not have the @Component annotation since this
// may be used only once in the hierarchy as of 2020-01-08.
export default class BaseComponent extends Vue {
  @Prop()
  form!: Form;
  @Prop()
  field!: Field;
  @Prop()
  formData!: any;
}
