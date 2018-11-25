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
    import Card from 'src/components/UIComponents/Cards/Card.vue'
    import LTable from 'src/components/UIComponents/Table.vue'

    export default {
        components: {
            Card,
            LTable
        },
        mounted: function () {
            //TODO:
        },
        data: function () {
            return {
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
