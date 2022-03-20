<script>
  export let src;
  export let width = "40px";
  export let height = "40px";
  export let alt = "picture";
</script>

<img src={src} {alt} {width} {height} loading="lazy" />

<style>
  img {
    max-width: 100%;
    grid-area: image;
  }
</style>
