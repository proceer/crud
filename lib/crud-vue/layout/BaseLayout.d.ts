import { Vue } from "vue-property-decorator";
import { Form } from "@/crud";
export default class BaseLayout extends Vue {
    form: Form;
    title: string;
    showTitle: boolean;
    get titleOfForm(): string;
    showSections: boolean;
    loading: boolean;
    emitIsLoading(value: boolean): boolean;
}
