<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import { Role } from '@prisma/client';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
</script>

<div class="wrap">
	<Navbar />
	<div class="content">
		{#if data.user.role == null}
			<h2>
				Welcome to NASA Hunch! To verify your identity, we need to know a little more about you.
			</h2>
			<h3>I am a:</h3>
			<div class="buttons">
				<form method="post" use:enhance action="?/setRoleStudent">
					<button class="bigButton">
						<img src="student_cap.svg" alt="student" />
						<p>Student</p>
					</button>
				</form>
				<form method="post" use:enhance action="?/setRoleTeacher">
					<button class="bigButton">
						<img src="admin_shield.svg" alt="teacher" />
						<p>Teacher/Admin</p>
					</button>
				</form>
			</div>
		{:else if data.user.orgId == null}
			{#if data.user.role == Role.UNVERIFIED_TEACHER}
				<h1>Awaiting Verification</h1>
				<p>
					Please email a completed copy of the <a href="/connect#statement_of_work"
						>Statement of Work</a
					>
					to <a href="mailto:JSC-HUNCH@mai.nasa.gov">JSC-HUNCH@mail.nasa.gov</a>
				</p>
				<form method="post" use:enhance action="?/rescindRole">
					<p>Not a teacher? <button class="button">Rescind Your Role</button></p>
				</form>
			{:else if data.user.role == Role.STUDENT}
				<form method="post" use:enhance action="?/submitJoinCode" class="joinCode">
					<h1>Join a Project</h1>
					<div class="formItem">
						<Input name="code" label="Project Join Code" bgColor="#f1f1f1" />
					</div>
					<div class="formItem">
						<Button value="Submit" />
					</div>
				</form>
				<form method="post" use:enhance action="?/rescindRole">
					<p>Not a student? <button class="button">Rescind Your Role</button></p>
				</form>
			{:else}
				<p>Unexpected Role: {data.user.role}</p>
				<p>It seems as if you're missing an organization.</p>
				<p>Contact an administrator</p>
			{/if}
		{/if}
	</div>
</div>

<style>
	.wrap {
		width: 100%;
		height: 100vh;
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
		background: #f1f1f1;
		border: 1px solid #f1f1f1;
		border: 0px solid white;
		padding: 20px;
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
		cursor: pointer;
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
	.buttons form button:hover {
		box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
	}
	.buttons img {
		height: 50%;
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
</style>
