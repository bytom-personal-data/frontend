<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <user-links></user-links>
                </div>
            </div>
        </div>
        <!--<div class="container-fluid">-->
            <!--<div class="row">-->
                <!--<div class="col-md-12">-->
                    <!--<user-card></user-card>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>
    import UserLinks from './UserProfile/UserLinks.vue'
    import UserCard from './UserProfile/UserCard.vue'

    export default {
        components: {
            UserCard,
            UserLinks
        },
        data() {
            return {};
        }
    }
</script>
<style>

</style>
