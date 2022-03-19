<script>
  import data from "../../data.json";
  import Comment from "./Comment.svelte";
  import Replies from "./Replies.svelte";
  import NewComment from "./NewComment.svelte";

  let comments = data.comments;
	console.log(data.comments)
</script>

<section>
  {#each comments as comment (comment.id)}
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
<NewComment
  currentUserImageURL={data.currentUser.image.png}
  currentUsername={data.currentUser.username}
/>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
