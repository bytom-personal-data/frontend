<template>
    <div class="container-fluid">
        <card class="card-medicine">
            <h4 class="card-title">Requests</h4>
            Здесь будут заявки от организаций на персональные данные пользователей
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
