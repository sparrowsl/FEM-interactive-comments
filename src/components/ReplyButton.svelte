<script>
</script>

<button class="reply-icon" on:click={() => console.log("replying")}>
  <img src="./images/icon-reply.svg" alt="" />
  <span>Reply</span>
</button>

<style>
  .reply-icon {
    border: none;
    background-color: transparent;
    display: flex;
    gap: 0.75em;
    justify-content: center;
    align-items: center;
    font-family: "Rubik", sans-serif;
  }
  .reply-icon span {
    font-size: 1.5rem;
    color: hsl(238, 40%, 52%);
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    .reply-icon:hover > * {
      color: hsl(239, 57%, 85%);
      transition: color 0.1s;
      cursor: pointer;
    }
  }
</style>
