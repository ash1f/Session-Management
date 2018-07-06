<template>
    <div id="patientDetails">
        <table>
            <thead>
                <th>Name</th>
                <th>Mobile</th>
            </thead>
            <tbody>
                <tr v-bind:for="patient in patients">
                    <td>{{ patient.name }}</td>
                    <td>{{ patient.Mobile }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            patients: []
        }
    },
    setPatientDetails(){
        return {
            patients: db.ref(ptnts)
        }
    }
}
</script>
