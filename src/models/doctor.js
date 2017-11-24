import Person from './person.js';
import Patient from './patient.js';

export default class Doctor extends Person {
	constructor(first_name, last_name) {
		super(first_name, last_name);
		this.patients = [];
	}

	addPatient(patient) {
		this.patients.push(patient);
	}
}
