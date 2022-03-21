<script>
  import Icon from "./shared/Icon.svelte";
  import { isModalOpen } from "../stores/store.js";
</script>

<div class="delete-and-edit">
  <Icon
    on:click={() => $isModalOpen = true}
    iconImage={"./images/icon-delete.svg"}
    iconName={"Delete"}
    color="hsl(358, 79%, 66%)"
  />

  <Icon
    on:click
    iconImage={"./images/icon-edit.svg"}
    iconName={"Edit"}
    color="hsl(238, 40%, 52%)"
  />
</div>

<style>
  div {
    display: flex;
    gap: 2em;
  }
</style>
