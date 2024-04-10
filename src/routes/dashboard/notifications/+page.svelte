<script lang="ts">
	import sanitizeHtml from 'sanitize-html';
	import Pfp from '$lib/components/Pfp.svelte';

	export let data;

	$: sentNotifications = data.notifications.filter(
		(notification) => notification.senderId === data.user.id
	);
	$: receivedNotifications = data.notifications.filter(
		(notification) => notification.receiverId === data.user.id
	);
</script>

<main>
	<h1>Notifications</h1>

	{#if data.notifications.length > 0}
		{#if sentNotifications.length > 0}
			<h2>Sent</h2>
			<div class="notifications">
				{#each sentNotifications as notification}
					<div class="notification">
						<h3>
							<Pfp user={notification.receiver} />
							To
							{#if data.user.role === 'ORG_ADMIN' || data.user.role === 'HUNCH_ADMIN'}
								<a href="/dashboard/users/{notification.receiverId}">
									{notification.receiver.firstName}
									{notification.receiver.lastName}
								</a>
							{:else}
								{notification.receiver.firstName}
								{notification.receiver.lastName}
							{/if}
						</h3>
						<p class="time">{notification.createdAt.toLocaleString()}</p>
						<p>{@html sanitizeHtml(notification.message)}</p>
					</div>
				{/each}
			</div>
		{/if}

		{#if receivedNotifications.length > 0}
			<h2>Received</h2>
			<div class="notifications">
				{#each receivedNotifications as notification}
					<div class="notification">
						<h3>
							<Pfp user={notification.sender} />
							From
							{#if data.user.role === 'ORG_ADMIN' || data.user.role === 'HUNCH_ADMIN'}
								<a href="/dashboard/users/{notification.senderId}">
									{notification.sender.firstName}
									{notification.sender.lastName}
								</a>
							{:else}
								{notification.sender.firstName}
								{notification.sender.lastName}
							{/if}
						</h3>
						<p class="time">{notification.createdAt.toLocaleString()}</p>
						<p>{@html sanitizeHtml(notification.message)}</p>
					</div>
				{/each}
			</div>
		{/if}
	{:else}
		<i>No notifications sent or received.</i>
	{/if}
</main>

<style lang="scss">
	main {
		margin: 1rem;
	}

	.notifications {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}

	.notification {
		background-color: #f1f1f1;
		padding: 1rem;
		border-radius: 0.5rem;

		.time {
			font-size: 0.8rem;
			color: #666;
			margin-top: 0;
		}

		h3 {
			margin-bottom: 0;
			display: flex;
			align-items: center;
		}

		a {
			margin-left: 0.25rem;
		}
	}
</style>
