<script>
	import data from "../../data.json";
	import DeleteAndEdit from "./DeleteAndEdit.svelte";
	import Icon from "./Icon.svelte";
	import Text from "./Text.svelte";
	import UserInfo from "./UserInfo.svelte";
	import Vote from "./Vote.svelte";

	let currentUser = data.currentUser;

	export let imageURL;
	export let username;
	export let datePosted;
	export let text;
	export let isReply = false;
	export let replyingTo = "";
	export let upvotes = 0;
</script>

<article class="comment-card" class:is-reply={isReply}>
	<UserInfo {username} {datePosted} userImage={imageURL} />
	<Text isReplying={replyingTo} content={text} />

	<!-- Remove reply button for current user -->
	<Vote {upvotes} />
	<div class="update-or-reply">
		{#if username === currentUser.username}
			<DeleteAndEdit />
		{:else}
			<Icon
				iconImage="./images/icon-reply.svg"
				iconName="Reply"
				color="hsl(238, 40%, 52%)"
			/>
		{/if}
	</div>
</article>

<style>
	.comment-card {
		border-radius: 7px;
		padding: 2em;
		background-color: hsl(0, 0%, 100%);
		display: grid;
		justify-content: space-between;
		align-items: center;
		grid-template-areas:
			"user-info user-info user-info"
			"text text text"
			"vote . update-reply";
	}
	.is-reply {
		width: 80%;
		margin-inline-end: auto;
		justify-self: flex-end;
	}
	.update-or-reply {
		grid-area: update-reply;
	}

	@media screen and (min-width: 768px) {
		.comment-card {
			grid-gap: 2em;
			grid-template-areas:
				"vote user-info update-reply"
				"vote text text"
				"vote text text";
		}
		.update-or-reply {
			grid-area: update-reply;
			justify-self: flex-end;
		}
	}
</style>
