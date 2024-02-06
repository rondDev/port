<script lang="ts">
export let data;
</script>

<div class="flex flex-col h-full w-full items-center justify-center">
    {#if data.project}
       <div class="w-[50vw] h-[50vh] bg-slate-900 flex flex-col gap-4 p-6">
           <div class="text-red-400 text-2xl">
               {data.project.title}
           </div>
           <div>
               {data.project.content}
           </div>
       </div>
    {/if}
</div>
