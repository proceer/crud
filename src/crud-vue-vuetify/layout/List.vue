<script lang="ts">
import { Component, Emit, Model, Prop } from "vue-property-decorator";
import BaseLayout from "@/crud-vue/layout/BaseLayout";

@Component
export default class List extends BaseLayout {
  @Prop({ default: "" })
  search!: string;

  allData: any[] = [];

  get searchInternal(): string {
    return this.search;
  }
  // noinspection JSUnusedGlobalSymbols
  set searchInternal(v: string) {
    this.$emit("update:search", v);
  }

  // noinspection JSUnusedGlobalSymbols
  async mounted(): Promise<void> {
    this.emitIsLoading(true);
    this.allData = Array.from(await this.form.data.getAll());
    this.emitIsLoading(false);
  }

  get headers(): any {
    return this.form.sections
      .flatMap(value => value.fields)
      .map((value, i) => ({
        text: value.title,
        value: i
      }));
  }
}
</script>

<template>
  <div>
    <v-card class="elevation-0 transparent">
      <v-card-title>
        <template v-if="showTitle">
          {{ titleOfForm }}
        </template>
        <v-spacer />
        <v-text-field
          v-model="searchInternal"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>

      <v-container>
        <v-data-table
          :headers="headers"
          :items="allData"
          :items-per-page="form.itemsPerPage"
          :footer-props="{ showFirstLastPage: true }"
          loading-text="Loading... Please wait"
          multi-sort
        />
      </v-container>
    </v-card>
  </div>
</template>
