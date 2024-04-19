<script lang="ts">
    import { pushState } from "$app/navigation";
    import { GradientButton, Carousel, Modal, Label } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Slide from "flowbite-svelte/Slide.svelte";
    import Header from "$lib/components/Header.svelte";

    onMount(() => {
        pushState("/projects/bogopass-1");
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
                <h1>Bogopass Password Generator</h1>
                    <GradientButton
                        color="purpleToPink"
                        class=""
                        on:click={() => window.open("https://git.rond.cc/rond/bogopass")}
                    >
                        View source code
                    </GradientButton>
            </div>

            <div>
                <div class="max-w-[100%]">
                    <Carousel {images} let:Controls bind:index duration="3000">
                        <div class="w-[80%] h-48 absolute"></div>
                        <Slide class="object-scale-down" slot="slide" image={images[index]}></Slide>
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
                <h3 class="text-2xl mb-4">The explanation</h3>
                <p class="text-slate-300 text-xl mb-8">
                    Bogopass is a password manager that works by creating
                    random characters from the character-set and then checks
                    if those characters meet the requirements specified. This
                    is an extremely bad way of doing the password generation,
                    but that is the whole point.
                </p>
                <h3 class="text-2xl mb-4">The implementation</h3>
                <p class="text-slate-300 text-xl">
                    The implementation tries it's best to compute in the
                    fastest possible way, making it take less than a
                    millisecond on average for a single iteration. In the
                    screenshot above you'll see that 2.3 billion iterations
                    were executed in about 805 seconds. This does seem like
                    a really long time, but in reality, the computations can't
                    be optimized a whole lot more without changing the whole
                    point of the project.
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
