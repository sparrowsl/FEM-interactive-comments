<script>
  import data from "../../data.json";
  import Comment from "./Comment.svelte";
  import Replies from "./Replies.svelte";
  import CreateNewComment from "./CreateNewComment.svelte";
</script>

<section>
  <!-- Loop through the comments from the data imported -->
  {#each data.comments as comment (comment.id)}
    <Comment
      imageURL={comment.user.image.png}
      username={comment.user.username}
      datePosted={comment.createdAt}
      text={comment.content}
      upvotes={comment.score}
    />
    {#if comment.replies}
      <Replies replies={comment.replies} />
    {/if}
  {/each}
</section>
<CreateNewComment
  userImageURL={data.currentUser.image.png}
  currentUsername={data.currentUser.username}
/>

<style>
  section {
    display: grid;
    grid-gap: 1em;
  }
</style>
