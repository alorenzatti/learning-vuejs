<template>
    <div>
    	<slot name="header"></slot>
    	<slot name="body"></slot>
    	<slot name="footer"></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>