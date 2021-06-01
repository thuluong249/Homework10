let generatehtmlPage = (teamObj) => {
  console.log("team object", teamObj);

  // set card to an empty array.

  let htmlCard = "";

  //loop over array.

  for (let i = 0; i < teamObj.length; i++) {
    let finalPrompt =
      teamObj[i].office || teamObj[i].github || teamObj[i].school;
    let keys = Object.keys(teamObj[i]);
    let lastKey = keys[4];
    let finalOption = lastKey + ":" + finalPrompt;
    if (lastKey === undefined) {
      finalOption = "";
    } else if (lastKey === "gitHub") {
      finalOption = `GitHub : <a href = 'https://www.github.com/${teamObj[i].gitHub}'> ${teamObj[i].gitHub}</a>`;
      console.log(finalOption);
    } else {
      console.log(finalOption);
    }

    //html card
    let { name, id, email, role, github } = teamObj[i];
    htmlCard += `
    <div class="team-member-card">
    <div class="team-member-card-top">
      <h2><strong>${name}</strong></h2>
      <h2>${role}</h2>
    </div>
    <div class="team-member-card-bottom">
      <p><b>Employee ID:</b>${id}</p>
      <p>
        <b>Email:</b><br /><a href="mailto:${email}"
          >${email}</a
        >
      </p>
      <div class="team-member-card">${finalOption}</div>
    </div>
  </div>
`;
  }
};
