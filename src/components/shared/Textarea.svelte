<script>
  export let placeholder;
  export let text = "";
</script>

<textarea name="comment" {placeholder} bind:value={text} required />

<style>
  textarea {
    min-height: 100px;
    width: 100%;
    padding: 0.5em 0.7em;
    border: 2px solid hsl(223, 19%, 93%);
    border-radius: 5px;
    resize: none;
    font-family: "Rubik", sans-serif;
    grid-area: textarea;
  }
  textarea:focus {
    border: 2px solid rgba(191, 191, 191, 0.466);
    outline: none;
  }

  @media screen and (min-width: 768px) {
  }
</style>
