<template>
    <div class="container-fluid">
        <card class="card-medicine">
            <h4 class="card-title">Medicine</h4>

            {{ dataList }}

            <table>
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Doctor specialitet</td>
                    <td>Doctor name</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>13/09/2018</td>
                    <td>Surgeon</td>
                    <td>Tropov Nikolay Igorevich</td>
                </tr>
                <tr>
                    <td>16/09/2018</td>
                    <td>Okulist</td>
                    <td>Nurin Sergey Gennadjevich</td>
                </tr>
                <tr>
                    <td>25/09/2018</td>
                    <td>Therapist</td>
                    <td>Sebastianova Natalia Aleksandrovna</td>
                </tr>
                <tr>
                    <td>07/10/2018</td>
                    <td>Otolaryngologist</td>
                    <td>Zimina Irina Leonidovna</td>
                </tr>
                <tr>
                    <td>06/11/2018</td>
                    <td>Masseur</td>
                    <td>Kozjuhov Timur Burhanovich</td>
                </tr>
                </tbody>
            </table>
        </card>
    </div>
</template>
<script>
    import { API_URL } from '../../../API/API_URL'

    const axios = require('axios')

    import Card from 'src/components/UIComponents/Cards/Card.vue'
    import Table from 'src/components/UIComponents/Table.vue'

    export default {
        components: {
            Card,
            Table
        },
        mounted: function () {
          this.errors = []
          return new Promise((resolve, reject) => {
            axios({
              url: API_URL + '/data/get',
              headers: {'Auth-Token': localStorage.token},
              params: {labels: ['medicine']}
            })
              .then(resp => {
                console.log(resp)
                this.dataList = 'adasd'
                resolve(resp)
              })
              .catch(err => {
                console.log(err)
                this.errors.push('There is a Server Error');
                reject(err)
              })
          })
        },
        data: function () {
            return {
                dataList: null,
                errors: []
            };
        }
    }

</script>
<style>

</style>
