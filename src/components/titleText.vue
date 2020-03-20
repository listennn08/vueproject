<template>
    <div class="container">
        <div class="row">
            <div id="titleText" class="col-md-10" :key="text">
                <h1>{{ text }}</h1>
            </div>

        </div>

    </div>
</template>
<script>
    export default {
        props: {
            text: String
        }
    }
</script>
<style>
    #titleText {
        text-align: center;
    }
</style>
