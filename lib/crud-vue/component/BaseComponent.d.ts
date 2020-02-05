import { Vue } from 'vue-property-decorator';
import { Field, Form } from '../../crud';
export default class BaseComponent extends Vue {
    form: Form;
    field: Field;
    formData: any;
}
