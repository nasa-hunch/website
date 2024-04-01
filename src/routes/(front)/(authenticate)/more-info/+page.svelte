<script lang="ts">
  import MdiAccountStudent from '~icons/mdi/account-student';
  import MdiShieldAccount from '~icons/mdi/shield-account';
  import { enhance } from '$app/forms';
  import Button from '$lib/components/Button.svelte';
  import InlineButton from '$lib/components/InlineButton.svelte';
  import Input from '$lib/components/Input.svelte';
  import { Role } from '$lib/enums';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="wrap">
  <div class="content">
    {#if data.user.role == null}
      <h2>
        Welcome to <span class="accent">NASA Hunch</span>! To verify your identity, we need to know
        a little more about you.
      </h2>
      <h3>I am a:</h3>
      <div class="buttons">
        <form action="?/setRoleStudent" method="post" use:enhance>
          <button class="bigButton">
            <MdiAccountStudent aria-hidden height="50%" width="50%" />
            <p>Student</p>
          </button>
        </form>
        <form action="?/setRoleTeacher" method="post" use:enhance>
          <button class="bigButton">
            <MdiShieldAccount aria-hidden height="50%" width="50%" />
            <p>Teacher/Admin</p>
          </button>
        </form>
      </div>
      <form action="/logout" method="post" use:enhance>
        <Button value="Or Sign Out" />
      </form>
    {:else if data.user.orgId == null}
      {#if data.user.role == Role.UNVERIFIED_TEACHER}
        <h1>Awaiting Verification</h1>
        <p>
          Please email a completed copy of the <a href="/forms/statement-of-work"
            >Statement of Work</a
          >
          to <a href="mailto:JSC-HUNCH@mai.nasa.gov">JSC-HUNCH@mail.nasa.gov</a>
        </p>
        <form action="?/rescindRole" method="post" use:enhance>
          <p>Not a teacher? <InlineButton value="Rescind Your Role" /></p>
        </form>
      {:else if data.user.role == Role.STUDENT}
        <form class="joinCode" action="?/submitJoinCode" method="post" use:enhance>
          <h1>Join a Project</h1>
          <div class="formItem">
            <Input name="code" bgColor="#f1f1f1" label="Project Join Code" />
          </div>
          <div class="formItem">
            <Button value="Submit" />
          </div>
        </form>
        <form action="?/rescindRole" method="post" use:enhance>
          <p>Not a student? <InlineButton value="Rescind Your Role" /></p>
        </form>
      {:else}
        <p>Unexpected Role: {data.user.role}</p>
        <p>It seems as if you're missing an organization.</p>
        <p>Contact an administrator</p>
      {/if}
    {/if}
  </div>
</div>

<style lang="scss">
  .wrap {
    width: 100%;
    height: calc(100vh - 100px - 75px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bigButton {
    background: white;
    border: 0;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    transition: box-shadow cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    }
  }

  h2 {
    margin-bottom: 5rem;
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    margin: 10px;
  }
  .buttons form {
    width: 100%;
    margin: 10px;
  }
  .buttons form button {
    width: 100%;
    aspect-ratio: 1/1;
  }
  .buttons p {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 2rem;
    margin: 0px;
  }
  .joinCode {
    background: #f1f1f1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
  }
  .formItem {
    width: 100%;
    margin: 7px 0px;
  }

  .accent {
    color: $primary;
  }
</style>
