import { Emit, Prop, Vue } from "vue-property-decorator";
import { Form } from "@/crud";

// Note, this component should not have the @Component annotation since this
// may be used only once in the hierarchy as of 2020-01-08.
export default class BaseLayout extends Vue {
  @Prop({ required: true })
  form!: Form;

  @Prop({ default: undefined })
  title!: string;
  @Prop({ default: true })
  showTitle!: boolean;
  get titleOfForm(): string {
    return this.title ?? this.form.title;
  }

  @Prop({ default: false })
  showSections!: boolean;

  @Prop({ default: false })
  loading!: boolean;
  @Emit("update:loading")
  emitIsLoading(value: boolean): boolean {
    return value;
  }
}
