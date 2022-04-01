<script>
  import { isModalOpen } from "../stores/store.js";
  import Button from "./shared/Button.svelte";
  import Text from "./shared/Text.svelte";

  const modalMessage = `Are you sure you want to delete this comment?
        This will remove comment and can't be undone.`;
</script>

{#if $isModalOpen}
  <section class="modal-backdrop">
    <div class="modal">
      <h2 class="modal-header">Delete Comment</h2>
      <div class="modal-body">
        <Text content={modalMessage} />
      </div>
      <div class="modal-buttons">
        <Button isTertiary={true} on:click={() => ($isModalOpen = false)}>
          No, Cancel
        </Button>
        <Button isDanger={true} on:click>Yes, Delete</Button>
      </div>
    </div>
  </section>
{/if}

<style>
  .modal-backdrop {
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: hsla(0, 0%, 69%, 0.22);
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .modal {
    border-radius: 8px;
    background-color: hsl(0, 0%, 100%);
    margin: 1em 1.5em;
    padding: 2.5em;
    max-width: 350px;
  }
  .modal-header {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
  }
  .modal-body {
    margin: 2em 0;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    gap: 1.5em;
  }
</style>
