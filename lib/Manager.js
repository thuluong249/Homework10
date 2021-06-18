const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, id, role, office) {
    super(name, email, id, role);
    this.office = office;
  }

  getOffice() {
    return this.office;
  }
  getHtml() {
    return `
    <div class="col-md-4">
    <div class="team-member-card">
    <div class="team-member-card-top">
      <h2><strong>${this.name}</strong></h2>
      <h2>☕️ Manager</h2>
    </div>
    <div class="team-member-card-bottom">
      <p><b>Employee ID:</b>${this.id}</p>
      <p>
        <b>Email:</b><br /><a href="mailto:${this.email}"
          >${this.email}</a
        >
      </p>
      <p><b>Office Number:</b><br />${this.office}</p>
    </div>
    </div>
    </div>
    `;
  }
}

module.exports = Manager;
