<script lang="ts">
    import { page } from "$app/stores";

    import Header from "$lib/components/Header.svelte";
    import { Card, Marquee, Popover } from "flowbite-svelte";
    import { InfoCircleSolid } from "flowbite-svelte-icons";
    import {
        AdobeAfterEffects,
        AdobePhotoshop,
        Emacs,
        Lua,
        MacVim,
        Prisma,
        Svelte,
        TypeScript,
        Zig,
    } from "svelte-file-icons";
    import { Github, Neovim, Postgresql } from "svelte-simples";
</script>

<div
    class="h-full w-full text-gray-200 flex flex-col items-center pb-8"
>
    <Header />
    <div class="h-full">

    <div class="w-full grid grid-cols-2 justify-evenly pt-24">
        <div
            class="flex flex justify-center items-center px-24 h-72 items-center bg-[#2d0f1f]"
        >
            <div>
                <div class="w-fit h-full p-8">
                    <p class="inline text-2xl">Hey, I'm</p>
                    <p class="text-8xl flex">
                        rond
                        <InfoCircleSolid id="p1" class="h-4 w-4 text-red-300" />
                    </p>
                    <Popover
                        placement="bottom"
                        class="w-48 h-42 bg-purple-950 p-4 text-pretty duration-500 transition-opacity"
                        triggeredBy="#p1"
                    >
                        I prefer my name lowercased, however, I accept lower and
                        uppercase
                    </Popover>
                </div>
            </div>
            <div class="p-8 mt-32">
                <p>Full-stack developer with preference for back-end</p>
            </div>
        </div>
        <div>
            <div class="w-full h-full">
                <div class="bg-[#220c1a] h-72 w-full">
                    <div class="flex w-full justify-center items-center gap-2">
                        <h1
                            class="h-16 flex justify-center items-center text-3xl"
                        >
                            Skills
                        </h1>
                        <InfoCircleSolid
                            class="h-4 w-4 mt-2"
                            id="info-trigger"
                        />
                        <Popover
                            placement="bottom"
                            class="w-48 bg-purple-950 z-[999] p-4"
                            triggeredBy="#info-trigger"
                        >
                            This is just an animation of a subset of the skills
                            I have (I thought it looked cool)
                        </Popover>
                    </div>
                    <Marquee class="py-16" speed="0.3" hoverSpeed="0">
                        <Emacs class="w-24 h-24 mr-4" tabindex="-1" />
                        <Neovim class="w-24 h-24 mx-4" tabindex="-1" />
                        <Github class="w-24 h-24 mx-4" tabindex="-1" />
                        <Lua class="w-24 h-24 mx-4" tabindex="-1" />
                        <Svelte class="w-24 h-24 mx-4" tabindex="-1" />
                        <TypeScript class="w-24 h-24 mx-4" tabindex="-1" />
                        <Zig class="w-24 h-24 mx-4" tabindex="-1" />
                        <Prisma class="w-24 h-24 mx-4" tabindex="-1" />
                    </Marquee>
                </div>

            </div>
        </div>
    </div>
            <div class="mt-24 w-full flex justify-center">
                <a class="bg-[#752945] text-white rounded-full w-64 h-20 flex items-center justify-center text-4xl shadow-2xl shadow-pink-500/50 hover:scale-105 transition-transform" href="/contact">Contact me</a>
                <a class="text-white rounded-full w-36 h-20 flex items-center justify-center text-3xl underline hover:scale-110 transition-transform" href="/about">About</a>
            </div>
    </div>
</div>
