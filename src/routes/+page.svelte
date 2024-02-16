<script lang="ts">
	import HudaHeader from "$lib/components/HudaHeader.svelte"
	import Form from "$lib/components/Form.svelte"
	import type { FormConfig } from "$lib/types"
	
	const signUpForm: FormConfig = {
		name: "Create user account",
		fields: [
			{ label: "Email", type: "email", placeholder: "Email" },
			{ label: "Password", type: "password", placeholder: "Password" },
			{ label: "Confirm password", type: "password", placeholder: "Confirm password" },
		],
		buttons: [
			{ name: "Sign up" }
		]
	}
</script>

<HudaHeader />
<section class="flex items-center justify-center w-full h-full my-10">
	<Form formConfig={signUpForm}/>
</section>