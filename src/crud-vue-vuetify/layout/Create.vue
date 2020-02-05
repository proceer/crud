<script lang="ts">
import { Component } from 'vue-property-decorator';
import BaseLayout from '../../crud-vue/layout/BaseLayout';

@Component
export default class Create extends BaseLayout {
  async submit(): Promise<void> {
    // NOTE Handle validation
    if (!this.form.isValid) return;

    this.emitIsLoading(true);
    const result: any | undefined = await this.form.data.save(
      this.form.data.addFormData,
      true,
    );
    this.emitIsLoading(false);

    // Notify the parent
    this.$emit('after-submit', result);
  }
}
</script>

<template>
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
                  :form-data="form.data.addFormData"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>

        <template v-else>
          <component
            v-for="field in form.sections.flatMap(
              previousValue => previousValue.fields,
            )"
            :key="field.fieldId"
            :is="field.type"
            :form="form"
            :field="field"
            :entry="form.data.addFormData"
          />
        </template>

        <v-btn :disabled="!form.isValid" @click="submit()" color="success">
          Add
        </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>
