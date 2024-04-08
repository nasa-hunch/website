<script lang="ts">
    export let data;

    $: sentNotifications = data.notifications.filter(notification => notification.senderId === data.user.id);
    $: receivedNotifications = data.notifications.filter(notification => notification.receiverId === data.user.id);
</script>

<main>
    <h1>Notifications</h1>
</main>

<style lang="scss">
    main {
        margin: 1rem;
    }
</style>
