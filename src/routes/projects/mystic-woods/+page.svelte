<script lang="ts">
    import { pushState } from "$app/navigation";
    import { GradientButton, Carousel, Modal, Label } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Slide from "flowbite-svelte/Slide.svelte";
    import Header from "$lib/components/Header.svelte";

    onMount(() => {
        pushState("/projects/mystic-woods-1");
    });

    let index = 0;

    let formModal = false;

    $: images = $page.data.images;
</script>

<!-- <div class="h-full w-full flex flex-col items-center">
    <Header />
    <div class="h-full w-full"></div>
</div> -->

<div class="flex flex-col h-full w-full items-center">
    <Header />
    <div class="h-full w-full flex justify-center items-center overflow-scroll">
        <div
            class="w-128 max-w-[1200px] bg-slate-900 flex flex-col gap-4 p-12 mb-36 mt-72 mr-4 ml-4 rounded-3xl"
        >
            <Modal
                bind:open={formModal}
                size="xl"
                autoclose={false}
                class="w-auto h-full"
                outsideclose
                color="primary"
            >
                <img src={images[index].src} alt={images[index].alt} />
            </Modal>
            <div class="text-red-400 text-4xl mb-10 flex justify-between">
                <h1>Mystic Woods Game</h1>
                    <GradientButton
                        color="purpleToPink"
                        class=""
                        on:click={() => window.open("https://github.com/rondK-H01/mystic_woods")}
                    >
                        View source code
                    </GradientButton>
            </div>

            <div>
                <div class="max-w-[100%]">
                    <Carousel {images} let:Controls bind:index duration="3000">
                        <div class="w-[80%] h-48 absolute"></div>
                        <Slide slot="slide" image={images[index]}></Slide>
                        <Controls />
                    </Carousel>
                    <GradientButton
                        outline
                        color="purpleToPink"
                        class="w-48 ml-auto mt-4"
                        on:click={() => (formModal = true)}
                    >
                        View larger image
                    </GradientButton>
                </div>
            </div>

            <div>
                <h3 class="text-2xl mb-4">The task</h3>
                <p class="text-slate-300 text-xl mb-8">
                    Build a story based game in the console. It must use
                    Console.WriteLine and Console.ReadLine for input and output.
                    For repeated tasks, a loop should be utilized.
                </p>
                <h3 class="text-2xl mb-4">The implementation</h3>
                <p class="text-slate-300 text-xl">
                    The implementation started off with the ambitious idea
                    to include a map that would show the surroundings in a 2D
                    array, but it quickly turned into a difficult task in the
                    timeframe for the project. In addition to it being a
                    difficulty, it would be way too far above what the project
                    task should be. So what remains is a basic game which
                    contains multiple different outcomes.
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    a {
        @apply text-purple-300;
    }
</style>
