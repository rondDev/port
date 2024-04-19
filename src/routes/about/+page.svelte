<script lang="ts">
 import Header from "$lib/components/Header.svelte";
 import { Card, Progressbar } from "flowbite-svelte";
</script>

<div class="h-full w-full flex flex-col items-center">
    <Header />
    <div class="h-full w-full flex flex-col items-center justify-between overflow-x-scroll">
        <div class="mb-16">
            <Card>
                <h5 class="text-3xl text-white mb-2">About me</h5>
                <p class="mb-2">A 22 year old selfmade developer with a preference in backend.
                    Has been working with programming languages since 2017 and diversified skill set since then. Computer interested for over a decade.
                    Some might refer to me as a power-user, which I would agree with. Exceedingly interested in tinkering with software and hardware.</p>
                <h4 class="text-2xl text-white"><span title="Apr 18 2024">Current</span> setup</h4>
                <p>Hardware: Ryzen 3900X, 3080 12GB, 64GB DDR4 @ 2133MT/s</p>
                <p>Keyboard: <a href="https://www.moergo.com/" class="underline">Glove80</a></p>
                <p>OS: Arch Linux</p>
                <p>WM: Hyprland</p>
                <p>Editor: <a href="https://git.rond.cc/rond/remacs" class="underline">Custom Emacs</a></p>
            </Card>
        </div>
        <h2 class="text-5xl mb-8">Languages</h2>
        <div class="grid grid-cols-3 gap-4 w-[60vw] h-[36rem]">
            <div class="col-start-1 col-span-2 bg-[#F57C62] text-black rounded flex justify-evenly pl-8 pr-8 pb-4 pt-4">
                <div class="w-[50%] flex flex-col justify-evenly">
                    <h3 class="text-2xl">Rust</h3>
                    <p class="">One of my all time favorite languages although not the language I have the most experience in. I feel very comfortable in Rust.</p>
                    <div class=" flex flex-col items-center justify-center mb-4">
                        <h4>Confidence in the language</h4>
                        <Progressbar progress="88"/>
                    </div>
                </div>
                <div class="w-[50%] ml-4 mt-2">
                    <h3 class="text-2xl">Projects</h3>
                    <div class="flex flex-col">
                        <a href="https://git.rond.cc/rond/bogopass">Bogopass</a>
                        <a href="">push_to_mute (private)</a>
                        <a href="">monkeyrs (WIP)</a>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div class="col-span-1 bg-blue-300 rounded text-black pl-8 pr-8 pb-4 pt-4 flex flex-col justify-evenly">
                <h3 class="text-2xl">Go</h3>
                <p>Pretty boring language, which is a good thing in this case.</p>
                <div class=" flex flex-col items-center justify-center mb-4">
                    <h4>Confidence in the language</h4>
                    <Progressbar progress="73"/>
                </div>
            </div>
            <div class="col-span-1 bg-orange-300 rounded text-black pl-8 pr-8 pb-4 pt-4 flex flex-col justify-evenly">
                <h3 class="text-2xl">JavaScript</h3>
                <h3>A less comfortable language with worse versatility, decent if performance and corectness isn't the main focus.</h3>
                <div class=" flex flex-col items-center justify-center mb-4">
                    <h4>Confidence in the language</h4>
                    <Progressbar progress="70"/>
                </div>
            </div>
            <div class="col-span-2 bg-purple-300 text-black rounded flex justify-evenly pl-8 pr-8 pb-4 pt-4">
                <div class="w-[50%] flex flex-col justify-evenly">
                    <h3 class="text-2xl">TypeScript</h3>
                    <p>A comfortable language with versatility, decent if performance isn't the main focus. Type system isn't as good as I would hope, but it works.</p>
                    <div class=" flex flex-col items-center justify-center mb-4">
                        <h4>Confidence in the language</h4>
                        <Progressbar progress="78"/>
                    </div>
                </div>
                <div class="w-[50%] ml-4 mt-2">
                    <h3 class="text-2xl">Projects</h3>
                    <div class="flex flex-col">
                        <a href="https://github.com/rondDev/dev.rond.cc">dev.rond.cc</a>
                        <a href="https://github.com/rondDev/CodeProbe">CodeProbe (Unfinished)</a>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div class="col-span-1 bg-green-300 rounded text-black pl-8 pr-8 pb-4 pt-4 flex flex-col justify-evenly">
                <h3 class="text-2xl">Zig</h3>
                <p>Pretty nice language, although I'm not very comfortable with manual memory management</p>
                <div class=" flex flex-col items-center justify-center mb-4">
                    <h4>Confidence in the language</h4>
                    <Progressbar progress="62"/>
                </div>
            </div>
            <div class="col-span-1 bg-red-300 rounded text-black pl-8 pr-8 pb-4 pt-4 flex flex-col justify-evenly">
                <p>And even more languages with little experience...</p>
            </div>
        </div>
        <div class="mt-[80rem] sm:mt-[58rem] md:mt-[46rem] lg:mt-[26rem] xl:mt-[20rem] 2xl:mt-[10rem]">
        <h2 class="text-5xl mb-8 flex justify-center">Frameworks</h2>
        <div class="flex max-xl:flex-col justify-evenly items-center gap-4">
            <div class="flex flex-col justify-center items-center h-48 w-96 bg-[#222243] rounded p-4">
                <h3 class="text-xl">Svelte</h3>
                <p>Svelte is by far my favorite framework, the developer experience seems unhindered in comparison to some other frameworks (*cough* NextJs). It makes developing such a joy.</p>
            </div>
            <div class="flex flex-col justify-center items-center h-48 w-96 bg-[#223243] rounded p-4">
                <h3 class="text-xl">Next.js</h3>
                <p>Next.js has sophisticated server-side functions, but it's still react, so it's more cumbersome to work with. Even if it's painful, I am able to work with it.</p>
            </div>
            <div class="flex flex-col justify-center items-center h-48 w-96 bg-[#322243] rounded p-4">
                <h3 class="text-xl">React</h3>
                <p>React in itself is (or was) an outdated way of doing web development, requiring a wrapper around most libraries to be able to use them. Regardless of that, it was the first framework I had experience with and it is what got me into framework usage.</p>
            </div>
        </div>
        </div>
        <div class="mt-24 mb-24 flex flex-col items-center">
            <h2 class="text-5xl mb-8">Editors</h2>
            <div class="flex flex-col items-center justify-center w-3/6">
                <p>I have played around with a bunch of different editors, and my current choice is a <a href="https://git.rond.cc/rond/remacs">custom framework</a> in emacs. Before that I was using my own config for NeoVim which I really enjoyed. I have also spent a fair amount of time inside VSCode and Visual Studio, and I'm very comfortable in both although I don't prefer it.</p>
            </div>
        </div>
    </div>
</div>
