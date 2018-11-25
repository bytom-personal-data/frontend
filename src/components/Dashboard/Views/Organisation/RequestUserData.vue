<template>
    <card>
        <h4 slot="header" class="card-title">Request User Data</h4>
        <form>
            <div class="row">
                <div class="col-md-5">
                    <fg-input type="text"
                              label="User Key"
                              :disabled="true"
                              placeholder="abcdef123">
                    </fg-input>
                </div>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="sendRequest">
                    Update Profile
                </button>
            </div>
            <div class="clearfix"></div>
        </form>
    </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          company: 'Paper Dashboard',
          username: 'michael23',
          email: '',
          firstName: 'Mike',
          lastName: 'Andrew',
          address: 'Melbourne, Australia',
          city: 'melbourne',
          country: 'Australia',
          postalCode: '',
          aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
        }
      }
    },
    methods: {
      sendRequest () {
        //
      }
    }
  }

</script>
<style>

</style>
