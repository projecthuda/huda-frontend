<script lang="ts">
	import HudaHeader from "$lib/components/HudaHeader.svelte"
	import Form from "$lib/components/Form.svelte"
	import type { FormConfig } from "$lib/types"
	
	const signUpForm: FormConfig = {
		name: "Create user account",
		fields: [
			{ name: "email", label: "Email", type: "email", placeholder: "Email", value: "" },
			{ name: "password", label: "Password", type: "password", placeholder: "Password", value: "" },
			{ label: "Confirm password", type: "password", placeholder: "Confirm password", value: "" },
		],
		buttons: [
			{ name: "Sign up" }
		],
		onSubmit: (values) => {
			// Form submission logic - typically involving fetch API
		}
	}
</script>

<HudaHeader />
<section class="flex items-center justify-center w-full h-full my-10">
	<Form formConfig={signUpForm} />
</section>