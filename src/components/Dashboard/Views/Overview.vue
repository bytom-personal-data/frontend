<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <user-links v-if="user.type == 1"></user-links>
                </div>
            </div>
        </div>
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
            return {
              user: null
            };
        },
        mounted: function() {
            this.user = JSON.parse(localStorage.user);
        }
    }
</script>
<style>

</style>
