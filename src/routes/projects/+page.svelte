<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
import { projects } from '$lib/projects'
</script>

<div class="h-full w-full text-gray-200 flex flex-col items-center overflow-x-scroll pb-8">
  <Header />
  <div class="h-full w-full flex flex-col gap-12">
    {#each projects.reverse() as project}
      <ProjectCard
        id={project.id}
        image={project.image}
        title={project.title}
        time={project.time}
        content={project.content}
      />
    {/each}
  </div>
</div>
