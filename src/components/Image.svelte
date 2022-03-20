<script>
  export let src;
  export let width = "35px";
  export let height = "35px";
  export let alt = "picture";
</script>

<img src={src} {alt} {width} {height} loading="lazy" />

<style>
  img {
    max-width: 100%;
    grid-area: image;
  }
</style>
