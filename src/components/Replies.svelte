<script>
  import CommentCard from "./CommentCard.svelte";
  export let replies;
</script>

<section>
  {#each replies as reply}
    <CommentCard
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
    display: grid;
    grid-gap: 1.5em;
    border-left: 2px solid hsl(223, 19%, 93%);
    padding-left: 5vw;
    margin-left: 2.5vw;
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    section {
      padding-left: 4vw;
      margin-left: 2.5vw;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    section {
      padding-left: 3vw;
      margin-left: 1.5vw;
    }
  }
</style>
