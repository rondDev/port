<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  let projects = [
    {
      image: {
        link: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "kdsjfsdl",
      },
      title: "jlsfjls",
      time: new Date(),
      content: "lkijsdfljs",
    },
    {
      image: {
        link: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "kdsjfsdl",
      },
      title: "jlsfjls",
      time: new Date(),
      content: "lkijsdfljs",
    },
    {
      image: {
        link: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "kdsjfsdl",
      },
      title: "jlsfjls",
      time: new Date(),
      content: "lkijsdfljs",
    },
  ];
</script>

<div class="h-full w-full text-gray-200">
  <Header />
  <div class="flex flex-col gap-12">
    {#each projects as project}
      <ProjectCard
        image={project.image}
        title={project.title}
        time={project.time}
        content={project.content}
      />
    {/each}
  </div>
</div>
