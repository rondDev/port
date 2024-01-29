<script lang="ts">
  import TimeAgo, { type DateInput } from "javascript-time-ago";

  let imageType: { link: string; alt: string };
  export let image: typeof imageType | null;
  export let title: string;
  export let time: DateInput;
  export let content: string;

  // English.
  import en from "javascript-time-ago/locale/en";

  // NOTE: Funky way of adding locale to bypass the
  // error it throws when more than one instance exists
  TimeAgo.setDefaultLocale(en.locale);
  TimeAgo.addLocale(en);

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");
</script>

<div class="w-full flex justify-center">
  <div
    class="flex flex-col bg-secondaryColor rounded-lg w-[75vw] cursor-pointer hover:bg-pink-700 hover:translate-y-[-0.25rem] transition-transform hover:scale-105"
  >
    <div class="flex justify-between ml-6 mr-6 mt-6">
      <p class="text-[2em]">{title}</p>
      {#if time}
        <p class="text-[1em] text-gray-400">{timeAgo.format(time)}</p>
      {/if}
    </div>
    <div class="flex">
      {#if image}
        <img src={image.link} alt={image.alt} class="h-[10em] w-auto m-4" />
      {/if}
      <p class="ml-8 mr-8 mb-8 mt-4 text-gray-300">
        {content}
      </p>
    </div>
  </div>
</div>
