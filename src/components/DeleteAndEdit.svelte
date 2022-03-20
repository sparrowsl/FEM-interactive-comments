<script>
  import Icon from "./Icon.svelte";
</script>

<div class="delete-and-edit">
  <Icon
    iconImage={"./images/icon-delete.svg"}
    iconName={"Delete"}
    color="hsl(358, 79%, 66%)"
  />

  <Icon
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
