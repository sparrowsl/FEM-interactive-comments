<script>
  export let buttonType = "button";
</script>

<button type={buttonType}>
  <slot>Button</slot>
</button>

<style>
  button {
    max-width: fit-content;
    background-color: hsl(238, 40%, 52%);
    border: 0;
    border-radius: 5px;
    padding: 0.8em 2em;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: hsl(0, 0%, 100%);

    grid-area: button;
    justify-self: flex-end;
  }

  @media screen and (min-width: 768px) {
    button:hover {
      background-color: hsl(239, 57%, 85%);
      transition: background-color 0.15s;
      cursor: pointer;
    }
  }
</style>
