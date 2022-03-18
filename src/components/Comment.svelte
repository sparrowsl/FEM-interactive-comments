<script>
	export let imageURL;
	export let username;
	export let datePosted;
	export let text;
</script>

<div class="comment-card">
	<div class="user-info">
		<div class="profile-img">
			<img src="{imageURL}" alt="{username}'s' profile" loading="lazy" />
		</div>
		<p><strong>{username}</strong> <span class="date-posted">{datePosted}</span></p>
	</div>

	<p class="comment">{text}</p>
</div>

<style>
	.comment-card {
		border-radius: 5px;
		padding: 2em;
		background-color: hsl(0, 0%, 100%);
		font-family: "Rubik", sans-serif;
	}
	.date-posted, .comment{
		color: hsl(211, 10%, 45%);
		font-size: 1.6rem;
	}
	.comment{
		line-height: 1.5;
	}
	.user-info{
		display: flex;
		align-items: center;
		gap: 1.5em;
	}
	/* User's username */
	.user-info strong{
		font-size: 1.6rem;
		font-weight: 500;
		margin-right: 1.25em;
	}
	.profile-img img{
		width: 35px;
		height: 35px;
	}
</style>
