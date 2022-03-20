<script>
	import Comments from "./components/Comments.svelte";
</script>

<main>
	<Comments />
</main>

<style>
	main {
		padding: 1em;
	}

	/* // Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
	}

	/* // Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		main{
			margin-inline: auto;
			max-width: 80%;
		}
	}

	/* // Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		main {
			max-width: 50%;
		}
	}

	/* // Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
	}
</style>
