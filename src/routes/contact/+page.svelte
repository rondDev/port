<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import { Card } from "flowbite-svelte";
</script>

<div class="h-full w-full flex flex-col items-center">
    <Header />
    <div class="h-full w-full flex justify-center items-center">
        <Card>
            <h5 class="text-3xl text-white mb-2">Contact me</h5>
            <p class="mb-2">Discord: @rond</p>
            <p>Email: contact(at)rond.cc</p>
        </Card>
    </div>
</div>
