<script>
  // Wrap variable(s) in '{}' if they were not exported with the default
  // keyword inside the store.js
  import { commentsList } from "../stores/store.js";
  import CommentCard from "./CommentCard.svelte";
  import Replies from "./Replies.svelte";
  import CreateNewComment from "./CreateNewComment.svelte";
  import { currentUser } from "../stores/store.js";
</script>

<section>
  <!-- Loop through the comments from the data imported -->
  {#each $commentsList as comment (comment.id)}
    <CommentCard {comment} />
    {#if comment.replies}
      <Replies replies={comment.replies} />
    {/if}
  {/each}
</section>
<CreateNewComment
  userImageURL={$currentUser.image.webp}
  username={$currentUser.username}
/>

<style>
  section {
    display: grid;
    grid-gap: 1em;
  }
</style>
