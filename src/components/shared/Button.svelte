<script>
  export let buttonType = "button";
  export let isPrimary = true; // For blue background
  export let isDanger = false; // For red background
  export let isTertiary = false; // For grey background
</script>

<button
  type={buttonType}
  class:is-primary={isPrimary}
  class:is-danger={isDanger}
  class:is-tertiary={isTertiary}
  on:click
>
  <slot>Button</slot>
</button>

<style>
  button {
    max-width: fit-content;
    color: hsl(0, 0%, 100%);
    border: 0;
    border-radius: 5px;
    padding: 0.9em 1.5em;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    grid-area: button;
    justify-self: flex-end;
  }
  .is-primary {
    background-color: hsl(238, 40%, 52%);
  }
  .is-danger {
    background-color: hsl(358, 79%, 66%);
  }
  .is-tertiary {
    background-color: hsl(211, 10%, 45%);
  }

  @media screen and (min-width: 768px) {
    button:hover {
      background-color: hsl(239, 57%, 85%);
      transition: background-color 0.15s;
      cursor: pointer;
    }
  }
</style>
