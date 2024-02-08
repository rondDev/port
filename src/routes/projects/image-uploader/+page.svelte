<script lang="ts">
    import { pushState } from "$app/navigation";
    import { GradientButton, Carousel, Modal, Label } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Slide from "flowbite-svelte/Slide.svelte";
    import Header from "$lib/components/Header.svelte";

    onMount(() => {
        pushState("/projects/image-uploader-0");
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
            <div class="text-red-400 text-4xl mb-10">
                <h1>Image Uploader</h1>
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
                <h3 class="text-2xl mb-4">The problem</h3>
                <p class="text-slate-300 text-xl mb-8">
                    It all started around circa 2018, I was in my forum era
                    where having an image uploader became more rapidly common.
                    So as any other, I of course sought out to explore github to
                    find resources to make one for myself, and I did find a php
                    script that did the job quite well. As a matter of fact,
                    that same solution I had back then still retains ~4.2GB (or
                    around 16400 files) of images/videos to this day. Although
                    it didn't at all allow for any control over any of the
                    images I had uploaded, I was still overall happy with the
                    solution. The biggest annoyance was when I had to delete a
                    file, the process was: Open my browser - firstly remember
                    the IP - then navigate to my server - I didn't have a web
                    dashboard at the time - after which I could enter the login
                    details - which were randomly generated when I set up the
                    panel - then I could proceed into the file browser and
                    manually go into the folder of my uploads - imagine loading
                    10000 files in a web panel (it was really slow) - search for
                    and then subsequently delete the file.
                </p>
                <h3 class="text-2xl mb-4">The solution</h3>
                <p class="text-slate-300 text-xl">
                    It started as an idea way back <span
                        >- maybe around 2020-2021 -</span
                    >
                    and like any great idea, it stayed on the backburner for
                    <i>a little while</i>
                    which in the end turned out to be a net positive. Instead of
                    starting this ambitious project and quickly abandoning it due
                    to lack of experience in the web development space, I ended up
                    learning a lot beforehand, therein TypeScript, React, Next.js,
                    Svelte and Prisma, to mention some of it. So when I started the
                    ambitious project of an image uploader with a web dashboard,
                    I set out to build it in Next.js, which quickly turned into a
                    chore due to my lack of experience with their new
                    <a href="https://nextjs.org/docs/app">App Router</a> which ended
                    with me reaching for Svelte instead. I'm very happy I did migrate
                    to Svelte, because it turned into my favorite full-stack framework.
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
