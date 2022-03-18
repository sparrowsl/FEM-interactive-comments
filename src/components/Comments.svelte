<script>
  import data from "../../data.json";
  import Comment from "./Comment.svelte";

  // console.log(data)
  let comments = data.comments
</script>

<section>
  {#each comments as comment}
    <Comment imageURL={comment.user.image.png}
      username={comment.user.username}
      datePosted={comment.createdAt}
      text={comment.content}
    />
  {/each}
</section>

<style>
  section{
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
</style>
