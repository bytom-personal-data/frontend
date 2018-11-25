<template>
  <card class="card-user container-fluid">
    <div class="author row">
        <div class="avatar-wrapper col-md-3">
          <img v-if="user.type == 1" class="avatar border-gray" src="static/img/faces/user.jpg" alt="..."/>
          <img v-if="user.type == 30" class="avatar border-gray" src="static/img/hospital.png" alt="..."/>
          <img v-if="user.type == 20" class="avatar border-gray" src="static/img/finance-organisation.png" alt="..."/>
          <img v-if="user.type == 10" class="avatar border-gray" src="static/img/business.png" alt="..."/>
        </div>
        <div class="thin-info-wrapper col-md-3">
          <h4 v-if="user.type == 1" class="title">Mike Andrew</h4>
          <h4 v-if="user.type == 30" class="title">Hospital</h4>
          <h4 v-if="user.type == 20" class="title">Tax Authority</h4>
          <h4 v-if="user.type == 10" class="title">Business Account</h4>
          <span v-if="user.type == 1" class="date-of-birth">
            26.10.1987
          </span>
          <span v-if="[10,20,30].includes(user.type)" class="date-of-birth">

          </span>
          <span v-if="user.type == 1" class="gender">
            Male
          </span>
        </div>
        <div class="personal-key-wrapper col-md">
          <label for="personal-key">Your personal key</label>
          <input type="text" v-model="user.receiver_address" id="personal-key">
        </div>
    </div>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    data: function() {
      return {
        user: null
      }
    },
    components: {
      Card
    },
    created: function() {
      this.user = JSON.parse(localStorage.user)
    }
  }
</script>
<style>

</style>
