<script>
  import Comment from "./Comment.svelte";
  export let replies;
  console.log(replies);
</script>

<section>
  {#each replies as reply}
    <Comment
      imageURL={reply.user.image.png}
      username={reply.user.username}
      datePosted={reply.createdAt}
      text={reply.content}
      replyingTo={reply.replyingTo}
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
</style>
