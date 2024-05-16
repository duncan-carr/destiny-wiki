<script>
    import "../app.css";
</script>

<nav
    class="sticky top-0 flex flex-nowrap justify-between p-5 bg-black text-white"
>
    <a href="/">DestinyWiki</a>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <input type="text" placeholder="Search" />
</nav>

<slot />
