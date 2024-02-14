<script lang="ts">
  export let style: string = ""
</script>

<p class="huda-text" {style}>
  <slot />
</p>

<style>
  .huda-text {
    text-transform: uppercase;
    font-size: 50px;
    margin: 20px;
  }
</style>