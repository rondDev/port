<script>
	import { page } from '$app/stores';
    import { GradientButton, Card } from 'flowbite-svelte';
</script>

<div class="w-full h-full flex items-center justify-center gap-4">
    <Card class="bg-backgroundColor border-none min-w-96 min-h-48 flex flex-col gap-16 items-center justify-center">
    <h1 class="text-4xl text-white">{$page.error.message}</h1>
    <!-- svelte-ignore missing-declaration -->
    <GradientButton shadow color="pinkToOrange" class="text-2xl"><a href="/">Go to home</a></GradientButton>

    </Card>

</div>
