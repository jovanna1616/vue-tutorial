import Person from './person.js';
import Doctor from './doctor.js';

export default class Patient extends Person {
	constructor(first_name, last_name, doctor) {
		super(first_name, last_name);
		this.doctor	= doctor;
		doctor.addPatient(this);
	}

	setDoctor() {
		return this.doctor;
	}
}
