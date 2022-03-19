<script>
  import Comment from "./Comment.svelte";
  export let replies;
</script>

<section>
  {#each replies as reply}
    <Comment
      imageURL={reply.user.image.png}
      username={reply.user.username}
      datePosted={reply.createdAt}
      text={reply.content}
      replyingTo={reply.replyingTo}
      upvotes={reply.score}
    />
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    border-left: 2px solid hsl(223, 19%, 93%);
    padding-left: 1.75em;
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    section {
      padding-left: 2.75em;
      margin-left: 1em;
    }
  }
</style>
