<script>
  import { createEventDispatcher } from "svelte";
  import { currentUser } from "../stores/store.js";
  import Button from "./shared/Button.svelte";
  import Image from "./shared/Image.svelte";
  import Textarea from "./shared/Textarea.svelte";

  const dispatch = createEventDispatcher();
  export let userImageURL;
  export let username;
  export let buttonText = "Send";
  export let replyingTo = "";

  let userComment;

  function addCommentToStore() {
    // const randomId =
    const userData = {
      id: Date.now(),
      content: userComment,
      createdAt: "1 minute ago",
      score: 0,
      user: currentUser,
      replies: [],
    };

    if (replyingTo) {
      userData.replyingTo = replyingTo;
    }

    dispatch("addCommentToStore", userData);
    userComment = ""; // Clear the textarea
  }
</script>

<section class="new-comment">
  <form action="" on:submit|preventDefault={addCommentToStore}>
    <!-- Image component comes first because of the flexbox used at desktop screens -->
    <Image src={userImageURL} alt={username} />
    <Textarea placeholder="Add a comment..." bind:text={userComment} />
    <Button buttonType="submit">{buttonText}</Button>
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
  }

  @media screen and (min-width: 768px) {
    form {
      display: flex;
      align-items: flex-start;
    }
  }
</style>
