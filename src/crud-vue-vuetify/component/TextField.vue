<script lang="ts">
import { Component } from "vue-property-decorator";
import BaseStringComponent from "@/crud-vue/component/BaseStringComponent";

@Component
export default class TextField extends BaseStringComponent {
  mounted() {
    this.initialize();
  }
}
</script>

<template>
  <div v-if="form && field">
    <v-text-field
      :label="field.title"
      :hint="field.tooltip"
      v-model="fieldData"
    />
  </div>
</template>
