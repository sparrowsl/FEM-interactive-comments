<script>
	import data from "../../data.json";

	let currentUser = data.currentUser;

	export let imageURL;
	export let username;
	export let datePosted;
	export let text;
	export let isReply = false;
	export let replyingTo = "";
</script>

<div class="comment-card" class:is-reply={isReply}>
	<div class="user-info">
		<div class="profile-img">
			<img src={imageURL} alt="{username}'s' profile" loading="lazy" />
		</div>
		<p>
			<!-- Add a username tag if the current user has this reply -->
			{#if username === currentUser.username}
				<strong style="margin: 0;">{username}</strong>
				<span class="user-tag">you</span>
			{:else}
				<strong>{username}</strong>
			{/if}
			<span class="date-posted">{datePosted}</span>
		</p>
	</div>

	{#if replyingTo}
		<p class="comment"><strong>@{replyingTo}</strong> {text}</p>
	{:else}
		<p class="comment">{text}</p>
	{/if}
</div>

<style>
	.comment-card {
		border-radius: 7px;
		padding: 2em;
		background-color: hsl(0, 0%, 100%);
		font-family: "Rubik", sans-serif;
	}
	.is-reply {
		width: 80%;
		margin-inline-end: auto;
		justify-self: flex-end;
	}
	.date-posted,
	.comment {
		color: hsl(211, 10%, 45%);
		font-size: 1.6rem;
	}
	.comment {
		line-height: 1.5;
	}
	.comment strong {
		font-weight: 500;
		color: hsl(238, 40%, 52%);
	}
	.user-info {
		display: flex;
		align-items: center;
		gap: 1.5em;
	}
	.user-tag {
		display: inline-block;
		background-color: hsl(238, 40%, 52%);
		color: hsl(0, 0%, 100%);
		font-weight: 500;
		margin-inline: .25em 1.25em;
		font-size: 1.2em;
		padding: 0.2em 0.5em;
		border-radius: 2px;
	}
	/* User's username */
	.user-info strong {
		font-size: 1.6rem;
		font-weight: 500;
		margin-right: 1.25em;
	}
	.profile-img img {
		width: 35px;
		height: 35px;
	}
</style>
