<template>
  <card class="card-user container-fluid">
    <div class="author row">
        <div class="avatar-wrapper col-md-3">
          <img class="avatar border-gray" src="static/img/faces/face-3.jpg" alt="..."/>
        </div>
        <div class="thin-info-wrapper col-md-3">
          <h4 class="title">Mike Andrew</h4>
          <span class="date-of-birth">
            26.10.1987
          </span>
          <span class="gender">
            Male
          </span>
        </div>
        <div class="personal-key-wrapper col-md">
          <label for="personal-key">Your personal key</label>
          <input type="text" value="a79f19a2207a65e3ef19060c25c8a9ed0a1f55152b93a78cc80de57f91cf99ec" id="personal-key" >
        </div>
    </div>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    components: {
      Card
    }
  }
</script>
<style>

</style>
