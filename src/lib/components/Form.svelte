<script context="module" lang="ts">
  import type { FormConfig } from "$lib/types";
</script>
<script lang="ts">
  export let formConfig: FormConfig | undefined = undefined
</script>

<form on:submit|preventDefault={() => { }} class="rounded-container-token space-y-7 p-7 m-5 max-w-md shadow-lg">
  {#if !formConfig}
  <h2 class="w-full text-center text-lg">Form fields are not defined</h2>
  {:else}
  <h2 class="w-full text-center text-3xl">{formConfig.name}</h2>
  {#each formConfig.fields as field, index (index)}
  <label class="label">
    <span>{field.label}</span>
    <input type={field.type} class="input" placeholder={field.placeholder}>
  </label>
  {/each}
  <div class="w-full flex items-center justify-center">
    {#each formConfig.buttons as button, index (index)}
    <button type="submit" class="btn variant-filled-primary p-3 w-40 font-bold">{button.name}</button>
    {/each}  
  </div>
  {/if}
</form>	