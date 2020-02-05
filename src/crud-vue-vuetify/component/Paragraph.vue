<script lang="ts">
import { Component } from 'vue-property-decorator';
import BaseComponent from '../../crud-vue/component/BaseComponent';

@Component
export default class Paragraph extends BaseComponent {}
</script>

<template>
  <div v-if="form && field">
    <p class="font-weight-light">{{ field.title }}</p>
  </div>
</template>
