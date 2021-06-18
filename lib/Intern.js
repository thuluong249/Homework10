const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email, role);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getHtml() {
    return `
    <div class="col-md-4">
    <div class="team-member-card">
    <div class="team-member-card-top">
      <h2><strong>${this.name}</strong></h2>
      <h2> 🎓 Intern</h2>
    </div>
    <div class="team-member-card-bottom">
      <p><b>Employee ID:</b>${this.id}</p>
      <p>
        <b>Email:</b><br /><a href="mailto:${this.email}"
          >${this.email}</a
        >
      </p>
      <p><b>School: </b><br />${this.school}</p>
    </div>
    </div>
    </div>
    `;
  }
}

module.exports = Intern;
