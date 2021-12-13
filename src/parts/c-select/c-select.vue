<template src="./c-select.html"></template>
<style lang="scss" scoped src="./c-select.scss"></style>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class CSelect extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: (): string[] => {
      return [];
    }
  })
  public currencyList: string[];

  @Prop({type: Number, default: 0})
  public readonly tabindex: number;

  @Prop({type: String, default: ''})
  public readonly title: string;

  @Prop({type: Boolean, default: false})
  public readonly disabled: boolean;

  public selected: string = this.currencyList.length > 0 ? this.currencyList[0] : ''
  public open: boolean = false

}
</script>
