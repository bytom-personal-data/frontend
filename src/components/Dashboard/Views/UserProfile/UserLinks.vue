<template>
  <card class="card-links container-fluid">
      <div class="row">
          <div class="col-md-4">
              <router-link to="/profile/medicine/" class="profile__cat-button">
                  <div class="profile__cat-img">
                      <img src="/static/img/medicine.jpg" alt="">
                  </div>
                  <h3 class="profile__cat-button-title">
                      Medicine
                  </h3>
              </router-link>
          </div>
          <div class="col-md-4">
              <router-link to="/profile/money/" class="profile__cat-button">
                  <div class="profile__cat-img">
                      <img src="/static/img/money.jpg" alt="">
                  </div>
                  <h3 class="profile__cat-button-title">
                      Money
                  </h3>
              </router-link>
          </div>
          <div class="col-md-4">
              <router-link to="/profile/job/" class="profile__cat-button">
                  <div class="profile__cat-img">
                      <img src="/static/img/job.jpg" alt="">
                  </div>
                  <h3 class="profile__cat-button-title">
                      Job
                  </h3>
              </router-link>
          </div>
          <div class="col-md-4">
              <router-link to="/profile/law/" class="profile__cat-button">
                  <div class="profile__cat-img">
                      <img src="/static/img/law.jpg" alt="">
                  </div>
                  <h3 class="profile__cat-button-title">
                      Law
                  </h3>
              </router-link>
          </div>
          <div class="col-md-4">
              <router-link to="/profile/property/" class="profile__cat-button">
                  <div class="profile__cat-img">
                      <img src="/static/img/property.jpg" alt="">
                  </div>
                  <h3 class="profile__cat-button-title">
                      Property
                  </h3>
              </router-link>
          </div>
          <div class="col-md-4">
              <router-link to="/profile/transport/" class="profile__cat-button">
                  <div class="profile__cat-img">
                      <img src="/static/img/transport.jpg" alt="">
                  </div>
                  <h3 class="profile__cat-button-title">
                      Transport
                  </h3>
              </router-link>
          </div>
      </div>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    components: {
      Card
    },
      mounted: function() {
          //TODO:
      },
      data: function() {
          return {
              cards: []
          };
      }
  }
</script>
<style>

</style>
