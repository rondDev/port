<script lang="ts">
import { onMount } from 'svelte';

    let url = ``;

     onMount(() => url = window.location.href);

    function checkContains(input: string) {
        return input.includes(input);
    }
let h;
let w;
let ow;
let oh;
</script>

<div bind:offsetWidth={ow} bind:offsetHeight={oh} bind:clientWidth={w} bind:clientHeight={h} class="w-[70vw] h-[7vw] flex items-center m-12 bg-accentColor rounded-full z-10">
  <a
    href="/"
    class="ml-4 mr-auto text-[4vw] hover:text-gray-700 hover:translate-y-[-0.25rem] transition-transform hover:scale-110"
    >Portfolio</a
  >
  <div class="flex gap-8 mr-8 text-[2.5vw]">
    <a
      href="/about"
      class="hover:text-gray-700 hover:translate-y-[-0.25rem] transition-transform hover:scale-110"
      >/about</a
    >
    <a
      href="/projects"
      class="hover:text-gray-700 hover:translate-y-[-0.25rem] transition-transform hover:scale-110"
      >/projects</a
    >
    <a
      href="/contact"
      class="hover:text-gray-700 hover:translate-y-[-0.25rem] transition-transform hover:scale-110"
      >/contact</a
    >
  </div>
  {#if url.includes("/about")}
      <div class="relative z-0">
          <div class={`p-2 absolute bg-red-200 text-red-900 rounded-b-lg whitespace-nowrap z-0 text-[2vw]`} style="top: {h / 2}px; right: {w/18}px">
              You are currently at /about
           </div>
</div>  {/if}
  {#if url.includes("/projects")}
      <div class="relative z-0">
          <div class={`p-2 absolute bg-red-200 text-red-900 rounded-b-lg whitespace-nowrap z-0 text-[2vw]`} style="top: {h / 2}px; right: {w/18}px">
              You are currently at /projects
           </div>
</div>  {/if}
  {#if url.includes("/contact")}
      <div class="relative z-0">
          <div class={`p-2 absolute bg-red-200 text-red-900 rounded-b-lg whitespace-nowrap z-0 text-[2vw]`} style="top: {h / 2}px; right: {w/18}px">
              You are currently at /contact
           </div>
</div>  {/if}
</div>

<style>
</style>
