<script>
  import Icon from "./Icon.svelte";

  export let upvotes = 0;
</script>

<div class="upvotes">
  <button type="button" class="plus-vote" on:click={() => upvotes++}>
    <Icon iconImage="./images/icon-plus.svg" />
  </button>

  <span>{upvotes}</span>

  <button type="button" class="minus-vote" on:click={() => upvotes--}>
    <Icon iconImage="./images/icon-minus.svg" />
  </button>
</div>

<style>
  .upvotes {
    padding: 1.2em 1em;
    display: flex;
    gap: 1.35em;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: hsl(228, 33%, 97%);
    grid-area: vote;
  }
  button {
    height: 100%;
    border: none;
    padding: 0 0.5em;
    background-color: transparent;
  }
  .upvotes span {
    font-size: 1.45rem;
  }

  @media screen and (min-width: 768px) {
    button:hover {
      cursor: pointer;
    }
    .upvotes {
      flex-direction: column;
      height: fit-content;
      align-self: start;
    }
  }
</style>
