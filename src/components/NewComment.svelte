<script>
import Button from "./Button.svelte";

  export let currentUserImageURL;
  export let currentUsername;
</script>

<section class="new-comment">
  <form action="" on:submit|preventDefault={() => console.log("submitted")}>
    <div class="textarea">
      <textarea name="textComment" placeholder="Add a comment..." />
    </div>

    <div class="send">
      <img src={currentUserImageURL} alt="{currentUsername}" loading="lazy" />

      <!-- Send button -->
      <Button buttonType="submit">Send</Button>
    </div>
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
  .send {
    margin-top: 1.25em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  textarea {
    min-height: 100px;
    width: 100%;
    padding: 0.5em 0.7em;
    border: 2px solid hsl(223, 19%, 93%);
    border-radius: 5px;
    resize: none;
    font-family: inherit;
  }
  textarea:focus {
    border: 2px solid hsl(223, 19%, 93%);
    outline: none;
  }
  .send img{
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 768px) {
    textarea {
      min-height: 150px;
    }
  }
</style>
