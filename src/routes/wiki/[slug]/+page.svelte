<script lang="ts">
    import { marked } from "marked";

    let { data } = $props();
</script>

<main class="grid grid-cols-4 m-5 gap-3">
    <section class="col-span-1 fixed top-24">
        <strong class="uppercase text-sm">On This Page</strong>
        <p>Destiny 2: A Beginner's Guide</p>
        <p>Getting Started</p>
        <p>Choosing a Class</p>
    </section>
    <article class="col-start-2 col-end-5">
        {@html marked(data.content)}
    </article>
</main>
