<template>
    <div class="form">
        123
    </div>
</template>

<script>
    window.onbeforeunload = e => {
        e.preventDefault();
        console.log(window.closed);
        return 'are u sure?';

    }
    export default {}
</script>
<style scoped>
    body {
        background: black;
    }
</style>
