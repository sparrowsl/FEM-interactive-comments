<script>
  import Button from "./Button.svelte";
  import Image from "./Image.svelte";
  import Textarea from "./Textarea.svelte";

  export let userImageURL;
  export let currentUsername;
  let userComment;

  function addCommentToCommentsList() {
    console.log(userComment);

    // Clear the textarea
    userComment = "";
  }
</script>

<section class="new-comment">
  <form action="" on:submit|preventDefault={addCommentToCommentsList}>
    <!-- Image component comes first because of the flexbox used at desktop screens -->
    <Image src={userImageURL} alt={currentUsername} />
    <Textarea placeholder="Add a comment..." bind:text={userComment} />
    <Button buttonType="submit">Send</Button>
  </form>
</section>

<style>
  .new-comment {
    margin-top: 1.5em;
    border-radius: 5px;
    padding: 1.5em;
    background-color: hsl(0, 0%, 100%);
    font-family: "Rubik", sans-serif;
  }
  form {
    display: grid;
    grid-gap: 2em;
    grid-template-areas:
      "textarea textarea"
      "image button";
    /* justify-content: space-between; */
  }

  @media screen and (min-width: 768px) {
    form{
      display: flex;
      align-items: flex-start;
    }
  }
</style>
