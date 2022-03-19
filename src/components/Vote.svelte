<script>
  export let upvotes = 0;
  export let hide4mobile = true;
</script>

<div class="upvotes" class:hide-mobile={hide4mobile}>
  <button type="button" class="plus-vote" on:click={() => upvotes++}>
    <img src="./images/icon-plus.svg" alt="add votes" />
  </button>

  <p>{upvotes}</p>

  <button type="button" class="minus-vote" on:click={() => upvotes--}>
    <img src="./images/icon-minus.svg" alt="minus votes" />
  </button>
</div>

<style>
  .upvotes {
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: hsl(228, 33%, 97%);
  }
  .hide-mobile{
    display: none;
  }
  button {
    border: none;
    padding: 0 1em;
    background-color: transparent;
  }
  .upvotes p {
    font-size: 1.45rem;
  }

  @media screen and (min-width: 768px){
    .hide-mobile{
      display: flex;
    }
    button:hover{
      cursor: pointer;
    }
  }
</style>
