<template>
    <div class="container-fluid">
        <card class="card-medicine">
            <h4 class="card-title">Medicine</h4>
            <l-table :columns="tableData.columns"
                     :data="tableData.data">
                <template slot="columns">{{columns}}</template>
                <template slot-scope="{row}">
                    <td>{{row.date}}</td>
                    <td>{{row.docType}}</td>
                    <td>{{row.docName}}</td>
                </template>
            </l-table>
        </card>
    </div>
</template>
<script>
    import { API_URL } from '../../../API/API_URL'

    const axios = require('axios')

    import Card from 'src/components/UIComponents/Cards/Card.vue'
    import LTable from 'src/components/UIComponents/Table.vue'

    export default {
        components: {
            Card,
            LTable
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
                errors: [],
              tableData: {
                // columns: [
                //     {date: 'Дата', docType: 'Doctor specialitet', docName: 'Doctor name'}
                // ],
                data: [
                  {date: '13/09/2018', docType: 'Surgeon', docName: 'Tropov Nikolay Igorevich'},
                  {date: '16/09/2018', docType: 'Okulist', docName: 'Nurin Sergey Gennadjevich'},
                  {date: '25/09/2018', docType: 'Therapist', docName: 'Sebastianova Natalia Aleksandrovna'},
                  {date: '07/10/2018', docType: 'Otolaryngologist', docName: 'Zimina Irina Leonidovna'},
                  {date: '06/11/2018', docType: 'Masseur', docName: 'Kozjuhov Timur Burhanovich'},
                ]
              }
            };
        }
    }

</script>
<style>

</style>
