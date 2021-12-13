<template src="./Button.html"></template>
<style lang="scss" scoped src="./Button.scss"></style>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary'
}

@Component
export default class Button extends Vue {

  @Prop({
    type: String,
    default: 'primary',
    validator: (value: string) => {
      // The value must match one of these strings
      return ['primary', 'secondary', 'tertiary'].includes(value);
    }
  })
  public readonly buttonType: string;

  @Prop({
    type: String,
    default: '', // fluid | ''
  })
  public readonly buttonSize: string;

  @Prop({type: String, default: ''})
  public readonly title: string;

  @Prop({type: Boolean, default: false})
  public readonly disabled: boolean;

  // 'danger' | ''
  @Prop({
    type: String,
    default: '',
  })
  public readonly textColor: string;

  public get propButtonType(): string {
    return this.buttonType ? `button-${this.buttonType}` : '';
  }

  public get propButtonSize(): string {
    return this.buttonSize ? `button-${this.buttonSize}` : '';
  }

  public get propTextColor(): string {
    return this.textColor ? `button-${this.textColor}` : '';
  }

  public handle(): void {
    this.$emit('button-click');
  }
}
</script>
