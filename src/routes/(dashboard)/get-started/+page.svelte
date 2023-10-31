<script>
	import Input from "$lib/components/Input.svelte";
	import Button from "$lib/components/Button.svelte";
	import Navbar from "$lib/Navbar.svelte";
</script>


<div class="wrap">
	<Navbar/>
	<div class="contentWrap">
		<form class="content">
			<h1>Register</h1>
			<span class="inputDiv">
				<Input name="firstName" label="First Name"/>
			</span>
			<span class="inputDiv">
				<Input name="lastName" label="last Name"/>
			</span>
			<span class="inputDiv">
				<Input name="email" label="Email"/>
			</span>
			<span class="inputDiv">
				<Input name="pass1" label="Password" customType="password"/>
			</span>
			<span class="inputDiv">
				<Input name="pass2" label="Confirm Password" customType="password"/>
			</span>
			<span class="inputDiv">
				<Button value="Register" type="submit"/>
			</span>
		</form>
	</div>
	
</div>

<style>
	form {
		background: white;
	}
	.wrap {
		width: 100%;
		height: 100vh;
		background: #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		background-image: url("cool_space.jpg");
	}
	.contentWrap {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(3px);
	}
	.content {
		max-width: 350px;
		width: 100%;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}
	input {
		font-size: 1.2rem;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		position: relative;
		border-radius: 5px;
		outline: 0px;
		border: 1px solid gray;
	}
	.inputDiv {
		margin: 7px;
		width: 100%;
		background: white;
	}
	input:hover {
		border: 1px solid black;
	}
	input:focus {
		border: 1px solid #dd361c;
	}
	button {
		font-size: 1.2rem;
		padding: 10px;
		width: 100%;
		position: relative;
		border-radius: 5px;
		outline: 0px;
		border: 1px solid gray;
	}
</style>
