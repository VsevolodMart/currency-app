<template src="./branding-header.html"></template>
<style src="./branding-header.scss" scoped lang="scss"></style>
<script lang="ts">
import {Vue, Component, Watch, Ref} from 'vue-property-decorator';
import Button from '@/parts/Button/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class BrandingHeader extends Vue {

  @Ref('global-dropdown-menu') globalDropdownMenu!: HTMLElement;
  @Ref('langPickerMob') langPickerMobile: HTMLElement;

  public isShowDropdown: boolean = false
  public isShowGlobalDropdown: boolean = false

  @Watch('isShowGlobalDropdown')
  public onShowDropdownChanged(): void {
    if (this.isShowGlobalDropdown) {
      this.globalDropdownMenu.style.maxHeight = '100vh';
      window.setTimeout(this.overrideOverflowStyle, 400);
    } else {
      this.globalDropdownMenu.style.maxHeight = '';
      this.doNotOverrideOverflowStyle();
    }
  }

  public isDropdownOverflowOverridden: boolean = false;

  private overrideOverflowStyle(): void {
    this.isDropdownOverflowOverridden = true;
  }

  private doNotOverrideOverflowStyle(): void {
    this.isDropdownOverflowOverridden = false;
  }

  public get mySelfAvatar(): string {
    return 'https://mpng.subpng.com/20181107/psb/kisspng-united-states-dollar-logo-image-currency-5be2cfbeefd884.5805530915415909749824.jpg';
  }

  public get mySelFullName(): string {
    return 'Vsevolod';
  }

  public get logo(): string {
    return 'https://mpng.subpng.com/20181107/psb/kisspng-united-states-dollar-logo-image-currency-5be2cfbeefd884.5805530915415909749824.jpg'
  }

  public get name(): string {
    return 'Currency Test App'
  }

  public get location(): string {

    return 'Ukraine, Kyiv';
  }


  private onContentUserClick(): void {
    this.isShowDropdown = !this.isShowDropdown;
  }

}
</script>
