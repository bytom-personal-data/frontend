<template>
    <div class="container-fluid">
        <card class="card-medicine">
            <h4 class="card-title">Settings</h4>
            Здесь будут настройки базовой приватности для запросов по открытому ключу
        </card>
    </div>
</template>
<script>
    import Card from 'src/components/UIComponents/Cards/Card.vue'

    export default {
        components: {
            Card
        },
        mounted: function () {
            //TODO:
        },
        data: function () {
            return {
                cards: []
            };
        }
    }

</script>
<style>

</style>
