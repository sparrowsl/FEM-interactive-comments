<script>
  import Image from "./Image.svelte";

  export let username;
  export let datePosted = "2 days ago";
  export let userImage;
</script>

<div class="user-info">
  <Image src={userImage} alt="{username}'s' profile" />

  {#if username === "juliusomo"}
    <!-- Add a 'you' tag if its the current user -->
    <p class="username">
      <strong>{username}</strong> <span class="tag">you</span>
    </p>
  {:else}
    <p class="username"><strong>{username}</strong></p>
  {/if}
  <p class="datePosted">{datePosted}</p>
</div>

<style>
  .user-info {
    display: flex;
    align-items: center;
    grid-area: user-info;
  }
  .username {
    margin-inline: 0.5em 1.2em;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
    color: hsl(212, 24%, 26%);
  }
  .tag {
    display: inline-block;
    background-color: hsl(238, 40%, 52%);
    color: hsl(0, 0%, 100%);
    font-weight: 500;
    font-size: 1.25rem;
    padding: 0.1em 0.3em;
    border-radius: 2px;
  }
  .datePosted {
    color: hsl(211, 10%, 45%);
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
  }
</style>
