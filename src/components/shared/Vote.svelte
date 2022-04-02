<script>
  import Icon from "./Icon.svelte";

  export let upvotes = 0;
</script>

<div class="upvotes">
  <!-- Increase the votes -->
  <Icon iconImage="./images/icon-plus.svg" on:click={() => upvotes++} />
    <!-- display the votes -->
  <span>{upvotes}</span>
  <!-- Decrease the votes -->
  <Icon iconImage="./images/icon-minus.svg" on:click={() => upvotes--} />
</div>

<style>
  .upvotes {
    padding: 1.2em 1.5em;
    display: flex;
    gap: 1.5em;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: hsl(228, 33%, 97%);
    grid-area: vote;
  }
  .upvotes span {
    font-size: 1.45rem;
  }

  @media screen and (min-width: 768px) {
    .upvotes {
      flex-direction: column;
      height: fit-content;
      align-self: start;
    }
  }
</style>
