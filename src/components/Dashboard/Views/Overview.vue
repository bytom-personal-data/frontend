<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <user-card>
          </user-card>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <a href="#" class="profile__cat-button">
          <div class="profile__cat-img">
            <img src="/static/img/medicine.jpg" alt="">
          </div>
            <h3 class="profile__cat-button-title">
              Medicine
            </h3>
          </a>
        </div>
        <div class="col-md">
          <a href="" class="profile__cat-button">
          <div class="profile__cat-img">
            <img src="/static/img/money.jpg" alt="">
          </div>
            <h3 class="profile__cat-button-title">
              Money
            </h3>
          </a>
        </div>
        <div class="col-md">
          <a href="" class="profile__cat-button">
          <div class="profile__cat-img">
            <img src="/static/img/job.jpg" alt="">
          </div>
            <h3 class="profile__cat-button-title">
              Job
            </h3>
          </a>
        </div>
        <div class="col-md">
          <a href="" class="profile__cat-button">
          <div class="profile__cat-img">
            <img src="/static/img/law.jpg" alt="">
          </div>
            <h3 class="profile__cat-button-title">
              Law
            </h3>
          </a>
        </div>
        <div class="col-md">
          <a href="" class="profile__cat-button">
          <div class="profile__cat-img">
            <img src="/static/img/property.jpg" alt="">
          </div>
          <h3 class="profile__cat-button-title">
            Property
          </h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UserCard from './UserProfile/UserCard.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import LTable from 'src/components/UIComponents/Table.vue'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'
  import Medicine from "./UserData/Medicine";

  export default {
    components: {
        Medicine,
      Checkbox,
      Card,
      LTable,
      UserCard
    },
    data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]

        }
      }
  }
</script>
<style>

</style>
