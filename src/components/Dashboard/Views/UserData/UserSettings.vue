<template>
    <div class="container-fluid">
        <card class="card-settings">
            <h4 class="card-title">Default privacy settings</h4>

            <l-table :data="mainTableData.data"
                     :columns="mainTableData.columns">
                <template slot="columns">
                    <th>Main data</th>
                    <!--<th></th>-->
                </template>
                <template slot-scope="{row}">
                    <td>{{row.title}}</td>
                    <td>
                        <Checkbox v-model="row.checked"></Checkbox>
                    </td>
                </template>
            </l-table>
            <l-table :data="taxTableData.data"
                     :columns="taxTableData.columns">
                <template slot="columns">
                    <th>Tax data</th>
                    <th></th>
                </template>

                <template slot-scope="{row}">
                    <td>{{row.title}}</td>
                    <td>
                        <Checkbox v-model="row.checked"></Checkbox>
                    </td>
                </template>
            </l-table>
            <l-table :data="medicineTableData.data"
                     :columns="medicineTableData.columns">
                <template slot="columns">
                    <th>Medical data</th>
                    <th></th>
                </template>

                <template slot-scope="{row}">
                    <td>{{row.title}}</td>
                    <td>
                        <Checkbox v-model="row.checked"></Checkbox>
                    </td>
                </template>
            </l-table>
        </card>
    </div>
</template>
<script>
    import Card from 'src/components/UIComponents/Cards/Card.vue'
    import LTable from 'src/components/UIComponents/Table.vue'
    import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'

    export default {
        components: {
            Card,
            LTable,
            Checkbox
        },
        mounted: function () {
            //TODO:
        },
        data: function () {
            return {
                mainTableData: {
                    data: [
                        {title: 'Show my first and last name', checked: false},
                        {title: 'Show my age', checked: false},
                        {title: 'Show my place of birth', checked: false},
                        {title: 'Show my contacts', checked: false}
                    ]
                },
                taxTableData: {
                    data: [
                        {title: 'Show my tax number', checked: false},
                        {title: 'Show my tax history', checked: false},
                        {title: 'Show my job requisites', checked: false}
                    ]
                },
                medicineTableData: {
                    data: [
                        {title: 'Show my insurance policy number', checked: false},
                        {title: 'Show my helth history', checked: false},
                        {title: 'Show my contraindications', checked: false}
                    ]
                }
            };

        }

    }

</script>
<style>

</style>
