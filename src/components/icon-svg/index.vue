<style>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="svgName"></use>
  </svg>
</template>

<script>
  export default {
    name: 'icon-svg',
    props: {
      iconName: {
        type: String,
        required: true
      }
    },
    computed: {
      svgName() {
        return `#icon-${this.iconName}`
      }
    }
  }
</script>
