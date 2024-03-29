<script>
	import { commentsList, currentUser, isModalOpen } from "../stores/store.js";
	import DeleteAndEdit from "./DeleteAndEdit.svelte";
	import Icon from "./shared/Icon.svelte";
	import Text from "./shared/Text.svelte";
	import UserInfo from "./UserInfo.svelte";
	import Vote from "./shared/Vote.svelte";
	import CreateNewComment from "./CreateNewComment.svelte";
	import DeleteModal from "./DeleteModal.svelte";

	export let comment;
	let isReplyActive = false;

	function deleteComment(commentId) {
		// Find the 'id' inside the comments list.
		let newComments = $commentsList.filter(
			(comment) => comment.id !== commentId
		);

		$commentsList = [...newComments];
		$isModalOpen = false;
	}

	function addCommentToReply(e) {
		let temporaryComments = [];

		$commentsList.forEach((com) => {
			if (com.id === comment.id) {
				com.replies = [...com.replies, e.detail];
			}

			temporaryComments = [...temporaryComments, com];
		});

		$commentsList = [...temporaryComments];
		isReplyActive = false; // hide the textarea for replying
	}
</script>

<article class="comment-card">
	<UserInfo user={comment.user} datePosted={comment.createdAt} />
	<Text isReplying={comment.replyingTo} content={comment.content} />

	<Vote upvotes={comment.score} />
	<div class="update-or-reply">
		{#if comment.user.username === currentUser.username}
			<DeleteAndEdit />
		{:else}
			<Icon
				on:click={() => (isReplyActive = true)}
				iconImage="./images/icon-reply.svg"
				iconName="Reply"
				color="hsl(238, 40%, 52%)"
			/>
		{/if}
	</div>
</article>
<DeleteModal on:click={() => deleteComment(comment.id)} />

<!-- Show if the reply icon was clicked. -->
{#if isReplyActive}
	<CreateNewComment
		replyingTo={comment.user.username}
		buttonText="Reply"
		username={currentUser.username}
		userImageURL={currentUser.image.webp}
		on:addCommentToStore={addCommentToReply}
	/>
{/if}

<style>
	.comment-card {
		border-radius: 7px;
		padding: 2em;
		background-color: hsl(0, 0%, 100%);
		display: grid;
		grid-gap: 1em;
		justify-content: space-between;
		align-items: center;
		grid-template-areas:
			"user-info user-info user-info"
			"text text text"
			"vote . update-reply";
	}
	.update-or-reply {
		grid-area: update-reply;
	}

	@media screen and (min-width: 768px) {
		.comment-card {
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
