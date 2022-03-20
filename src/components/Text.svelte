<script>
  export let content = "";
  export let isReplying;
</script>

{#if isReplying}
  <p class="comment"><strong>@{isReplying}</strong> {content}</p>
{:else}
  <p class="comment">{content}</p>
{/if}

<style>
  .comment {
    color: hsl(211, 10%, 45%);
    font-size: 1.5rem;
    line-height: 1.5;
    grid-area: text;
  }
  .comment strong {
    font-weight: 500;
    color: hsl(238, 40%, 52%);
  }
</style>
