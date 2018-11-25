<template>
    <div class="container-fluid">
        <card class="card-medicine">
            <h4 class="card-title">Allowed Users</h4>

            <div v-if="requests.length == 0" class="alert alert-info">
                There is no users who allow you to view their information.
            </div>
            <div v-else>
                <div v-for="user in users">
                    <div class="alert alert-info alert-with-icon" data-notify="container">
                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                            <i class="nc-icon nc-simple-remove"></i>
                        </button>
                        <span data-notify="icon" class="nc-icon nc-bell-55"></span>
                        <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                    </div>
                </div>
            </div>

        </card>
    </div>
</template>
<script>
    import { API_URL } from '../../../API/API_URL'

    import Card from 'src/components/UIComponents/Cards/Card.vue'
    const axios = require('axios')

    export default {
        components: {
            Card
        },
        created: function () {
          return new Promise((resolve, reject) => {
            axios({
              url: API_URL + '/data/get',
              headers: {'Auth-Token': localStorage.token},
              params: {labels: ['medicine']}
            })
              .then(resp => {
                console.log(resp)
                this.requsts = resp.data.requests
                resolve(resp)
              })
              .catch(err => {
                console.log(err)
                this.errors.push('Server Error')
                reject(err)
              })
          })
        },
        data: function () {
            return {
                users: [],
                errors: []
            };
        }
    }

</script>
<style>

</style>
