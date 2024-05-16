export async function load({ params, fetch }) {
    const resp = await fetch(`/${params.slug}.md`);

    if (resp.ok) {
        return {
            status: 200,
            content: await resp.text(),
        };
    }

    return {
        status: 404,
        content: "Not found",
    };
}
