<script lang="ts">
import { Component } from "vue-property-decorator";
import BaseStringComponent from "@/crud-vue/component/BaseStringComponent";

@Component
export default class RadioButtons extends BaseStringComponent {
  mounted() {
    this.initialize();
  }
}
</script>

<template>
  <div v-if="form && field">
    <v-label>{{ field.title }}</v-label>
    <v-radio-group v-model="fieldData">
      <v-radio
        v-for="(entry, i) in field.additionalInfo.entries"
        :key="i"
        :label="entry.label"
        :value="entry.value"
      />
    </v-radio-group>
  </div>
</template>
