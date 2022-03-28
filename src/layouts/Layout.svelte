<script>
  export let templateHtml;
</script>

<style>
</style>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<main>
  {@html templateHtml}
</main>
<footer />
