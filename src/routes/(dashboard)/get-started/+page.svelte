<div class="wrap">
	<form class="content">
		<span class="inputDiv">
			<input name="firstName" placeholder="First Name" />
		</span>
		<span class="inputDiv">
			<input name="lastName" placeholder="Last Name" />
		</span>
		<span class="inputDiv">
			<input name="email" type="email" placeholder="Email" />
		</span>
		<span class="inputDiv">
			<input class="passwordHolder" name="pass1" placeholder="Password" type="password" />
		</span>
		<span class="inputDiv">
			<input class="passwordHolder" name="pass2" placeholder="Confirm Password" type="password" />
		</span>
		<span class="inputDiv">
			<button type="submit">Register</button>
		</span>
	</form>
</div>

<style>
	.wrap {
		width: 100%;
		height: 100vh;
		background: #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
	.content {
		max-width: 350px;
		width: 100%;
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
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
		margin: 5px;
		width: 100%;
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
