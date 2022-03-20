<script>
  export let iconImage;
  export let iconName = "";
  export let color = "hsl(238, 40%, 52%)";
</script>

<button class="" style="color: {color}">
  <img src={iconImage} alt="{iconName} icon" loading="lazy" />
  <span class="icon-name">{iconName}</span>
</button>

<style>
  button {
    border: none;
    background-color: transparent;
    font-family: "Rubik", sans-serif;
  }
  .icon-name {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    button:hover, .icon-name:hover{
      cursor: pointer;
    }
    .icon-name:hover {
      color: hsl(239, 57%, 85%);
      transition: color 0.1s;
    }
  }
</style>
