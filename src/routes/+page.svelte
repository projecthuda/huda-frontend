<script context="module">
	import HudaText from "$lib/components/HudaText.svelte"
	import { Avatar } from "@skeletonlabs/skeleton"
</script>

<section class="rounded-container-token bg-blue-950 flex flex-col items-center justify-center mx-6 my-6 p-6">
	<Avatar 
		src="https://drive.google.com/thumbnail?id=1m78IXxOwWH3CImj5Y2DAzfOP3eBRCcur"
		class="hover:!cursor-pointer p-1"
		background="bg-white"
	/>
	<HudaText>The huda project</HudaText>
	<HudaText 
		style="font-size: 20px">Let's build something cool
	</HudaText>
</section>