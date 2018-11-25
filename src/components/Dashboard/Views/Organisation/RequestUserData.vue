<template>
    <card>
        <h4 slot="header" class="card-title">Send Request for User Data</h4>
        <form>
            <div v-if="requestStatus === true" class="alert alert-success">Request wa successfully send!</div>

            <div class="row">
                <div class="col-md-5">
                    <fg-input v-model="user.key" type="text"
                              label="User Key"
                              placeholder="abcdef123">
                    </fg-input>
                </div>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="sendRequest">
                    Send Request
                </button>
            </div>
            <div class="clearfix"></div>
        </form>
    </card>
</template>
<script>
  import { API_URL } from '../../../API/API_URL'

  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import * as axios from 'axios'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          key: ''
        },
        requestStatus: null
      }
    },
    methods: {
      sendRequest () {
        this.requestStatus = null
        return new Promise((resolve, reject) => {
          axios({
            method: 'post',
            url: API_URL + '/data/request',
            headers: {'Auth-Token': localStorage.token},
            data: {
              owner_hash: this.user.key,
              labels: ['fullname', 'personal_id', 'personal_photo', 'medicine']
            }
          })
            .then(resp => {
              this.requestStatus = true
              resolve(resp)
            })
            .catch(err => {
              console.log(err)
              reject(err)
            })
        })
      }
    }
  }

</script>
<style>

</style>
