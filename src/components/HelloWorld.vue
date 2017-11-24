<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
import Person from './../models/person'
import Doctor from './../models/doctor'
import Patient from './../models/patient'
export default {
  name: 'HelloWorld',
  data () {
    return {
      selected: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}


let doctor = new Doctor('John', 'Doe');
let patient = new Patient('Joan', 'Doe', doctor);
// console.log(doctor);
// console.log(patient);
// console.log(doctor instanceof Person);
// console.log(patient instanceof Person);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
