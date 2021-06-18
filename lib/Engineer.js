const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, id, role, gitHub) {
    super(name, email, id, role);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return this.gitHub;
  }
  getHtml() {
    return `
    <div class="col-md-4">
    <div class="team-member-card">
    <div class="team-member-card-top">
      <h2><strong>${this.name}</strong></h2>
      <h2>👓Engineer</h2>
    </div>
    <div class="team-member-card-bottom">
      <p><b>Employee ID:</b>${this.id}</p>
      <p>
        <b>Email:</b><br /><a href="mailto:${this.email}"
          >${this.email}</a
        >
      </p>
      <p><b>Github: </b><br />${this.gitHub}</p>
    </div>
    </div>
    </div>
    `;
  }
}

module.exports = Engineer;
