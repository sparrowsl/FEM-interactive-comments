<script>
  export let src;
  export let width = 35;
  export let height = 35;
  export let alt = "picture";
</script>

<img src="{src}" {alt} {width} {height} />

<style>
  img {
    max-width: 100%;
    grid-area: image;
  }
</style>
