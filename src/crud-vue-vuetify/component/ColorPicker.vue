<script lang="ts">
import { Component } from 'vue-property-decorator';
import BaseStringComponent from '../../crud-vue/component/BaseStringComponent';

@Component
export default class ColorPicker extends BaseStringComponent {
  showPicker: boolean = false;

  mounted() {
    this.initialize();
    if (!this.fieldData) this.fieldData = '#000000FF';
  }
}
</script>

<template>
  <!--
  Variant got from:
  https://codepen.io/JamieCurnow/pen/KKPjraK
  -->
  <v-row>
    <v-col v-if="field.title" cols="3">
      <v-layout :fill-height="true">
        <label class="align-self-center">
          {{ field.title }}
        </label>
      </v-layout>
    </v-col>
    <v-col class="shrink picker-col">
      <!--
      v-mask could get enabled for the text field.
      v-mask="'!#XXXXXXXX'"
      See https://www.npmjs.com/package/v-mask
      -->
      <v-text-field v-model="fieldData" hide-details solo class="ma-0 pa-0">
        <template v-slot:append>
          <v-menu
            v-model="showPicker"
            top
            nudge-bottom="105"
            nudge-left="16"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on }">
              <div
                v-on="on"
                :class="[
                  'picker-activator',
                  { active: showPicker },
                  'elevation-3',
                ]"
                :style="{ backgroundColor: fieldData }"
              />
            </template>
            <v-card>
              <v-card-text class="pa-0">
                <v-color-picker
                  v-model="fieldData"
                  :mode="(field.additionalInfo || {}).mode || 'hexa'"
                  flat
                />
              </v-card-text>
            </v-card>
          </v-menu>
        </template>
      </v-text-field>
    </v-col>
  </v-row>
</template>

<style scoped>
.picker-col {
  min-width: 220px;
}

/*noinspection CssUnusedSymbol*/
.picker-activator {
  cursor: pointer;
  height: 30px;
  width: 30px;
  transition: border-radius 200ms ease-in-out;

  border-radius: 4px;
}

/*noinspection CssUnusedSymbol*/
.picker-activator.active {
  border-radius: 50%;
}
</style>
