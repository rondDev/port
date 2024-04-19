<script lang="ts">
    import { onMount } from "svelte";

    let url = ``;

    onMount(() => (url = window.location.href));
</script>

<div class="w-full h-[7vw] flex items-center mb-12 bg-backgroundColor z-10 border-b border-slate-800">
    <a
        href="/"
        class="ml-8 mr-auto text-[3vw] hover:text-gray-700 hover:translate-y-[-0.25rem] transition-transform hover:scale-110"
        >Portfolio</a
    >
    <div class="flex gap-8 mr-8 text-[2.5vw] h-full items-center">
        <a
            href="/about"
            class={`hover:text-gray-700 hover:translate-y-[-0.25rem] transition-transform hover:scale-110 ${
                url.includes("/about")
                    ? "translate-y-[-0.25rem] scale-105 text-green-400"
                    : ""
            }`}>/about</a
        >
        <a
            href="/projects"
            class={`hover:text-gray-700 hover:translate-y-[-0.25rem] transition-transform hover:scale-110 ${
                url.includes("/projects")
                    ? "translate-y-[-0.25rem] scale-105 text-green-400"
                    : ""
            }`}>/projects</a
        >
        <a
            href="/contact"
            class={`hover:text-gray-700 hover:translate-y-[-0.25rem] transition-transform hover:scale-110 ${
                url.includes("/contact")
                    ? "translate-y-[-0.25rem] scale-105 text-green-400"
                    : ""
            }`}>/contact</a
        >
    </div>
</div>

<style>
</style>
