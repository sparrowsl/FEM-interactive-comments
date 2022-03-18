<script>
  import data from "../../data.json";
  import Comment from "./Comment.svelte";
  import Replies from "./Replies.svelte";

  let comments = data.comments;
  console.log(data.currentUser);
</script>

<section>
  {#each comments as comment}
    <Comment
      imageURL={comment.user.image.png}
      username={comment.user.username}
      datePosted={comment.createdAt}
      text={comment.content}
    />
    {#if comment.replies}
      <Replies replies={comment.replies} />
    {/if}
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
