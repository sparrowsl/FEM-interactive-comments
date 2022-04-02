<script>
  export let src;
  export let alt = "picture";
  export let isDefault = true;
</script>

<img {src} {alt} class:size-default={isDefault} />

<style>
  img {
    max-width: 100%;
    grid-area: image;
  }
  .size-default {
    width: 35px;
    height: 35px;
  }
</style>
