<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import BaseLayout from "@/crud-vue/layout/BaseLayout";
import LoadingIndicator from "@/feature/shared/component/LoadingIndicator.vue";

@Component({
  components: { LoadingIndicator }
})
export default class Edit extends BaseLayout {
  @Prop()
  id!: string;

  formData: any = {};

  // noinspection JSUnusedGlobalSymbols
  async mounted(): Promise<void> {
    this.emitIsLoading(true);
    this.formData = await this.form.data.getById(this.id);
    this.emitIsLoading(false);
  }

  async submit(): Promise<void> {
    // NOTE Handle validation
    if (!this.form.isValid) return;

    this.emitIsLoading(true);
    const result: any | undefined = await this.form.data.save(
      this.formData,
      false
    );
    this.emitIsLoading(false);

    // Notify the parent
    this.$emit("after-submit", result);
  }
}
</script>

<template>
  <div>
    <v-card class="elevation-0 transparent">
      <v-card-title v-if="showTitle">
        {{ titleOfForm }}
      </v-card-title>

      <v-container>
        <v-form>
          <template v-if="showSections">
            <v-expansion-panels accordion class="mb-8">
              <v-expansion-panel v-for="(section, i) in form.sections" :key="i">
                <v-expansion-panel-header>
                  {{ section.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <component
                    v-for="(field, i) in section.fields"
                    :key="i"
                    :is="field.type"
                    :form="form"
                    :field="field"
                    :form-data="formData"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>

          <template v-else>
            <component
              v-for="(field, i) in form.sections.flatMap(
                previousValue => previousValue.fields
              )"
              :key="i"
              :is="field.type"
              :form="form"
              :field="field"
              :form-data="formData"
            />
          </template>

          <v-btn :disabled="!form.isValid" @click="submit()" color="success">
            Save
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>
