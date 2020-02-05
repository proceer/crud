<script lang="ts">
import { Component } from "vue-property-decorator";
import BaseStringComponent from "@/crud-vue/component/BaseStringComponent";

@Component
export default class HiddenField extends BaseStringComponent {
  mounted() {
    this.initialize();
    this.fieldData = this.field.additionalInfo.value;
  }
}
</script>

<template>
  <div v-if="form && field">
    <!-- No need to render this -->
    <!--
    <v-text-field
      :label="field.title"
      :hint="field.tooltip"
      v-model="fieldData"
      hidden
    />
    -->
  </div>
</template>
