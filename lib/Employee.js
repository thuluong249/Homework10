class Employee {
  constructor(name, email, id, role) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
  getID() {
    return this.id;
  }

  getRole() {
    return this.role;
  }
  getHtml() {
    return `<div class="team-member-card">
    <div class="team-member-card-top">
      <h2><strong>${this.name}</strong></h2>
      <h2>👓Employee</h2>
    </div>
    <div class="team-member-card-bottom">
      <p><b>Employee ID:</b>${this.id}</p>
      <p>
        <b>Email:</b><br /><a href="mailto:${this.email}"
          >${this.email}</a
        >
      </p>
      <p><b>Role: </b><br />${this.role}</p>
    </div>
    </div>
    `;
  }
}
//exporting Employee class
module.exports = Employee;
