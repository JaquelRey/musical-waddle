const createEngineer = function(engineer) {
    return `
    <div class="columns m-2">
        <div class="column">
            <div class="card">
                <header class="card-header has-background-info">
                  <p class="card-header-title has-text-white">
                    Engineer
                  </p>
                </header>
                <div class="card-content is-flex is-justify-content-center">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>${engineer.name}</td>
                            </tr>
                            <tr>
                                <th>ID</th>
                                <td>${engineer.id}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td> <a href="mailto:${engineer.email}">${engineer.email}</a></td>
                            </tr>
                            <tr>
                                <th>Github</th>
                                <td><a href="https://github.com/${engineer.github}">${engineer.github}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
        </div>`
}

const createIntern = function(intern) {
    return `
    <div class="columns m-2">
        <div class="column">
            <div class="card">
                <header class="card-header has-background-info">
                  <p class="card-header-title has-text-white">
                    Intern
                  </p>
                </header>
                <div class="card-content is-flex is-justify-content-center">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>${intern.name}</td>
                            </tr>
                            <tr>
                                <th>ID</th>
                                <td>${intern.id}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td> <a href="mailto:${intern.email}">${intern.email}</a></td>
                            </tr>
                            <tr>
                                <th>School</th>
                                <td>${intern.school}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
        </div>`
}

const createManager = function(manager) {
    return `
    <div class="columns m-2">
        <div class="column">
            <div class="card">
                <header class="card-header has-background-info">
                  <p class="card-header-title has-text-white">
                    Manager
                  </p>
                </header>
                <div class="card-content is-flex is-justify-content-center">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>${manager.name}</td>
                            </tr>
                            <tr>
                                <th>ID</th>
                                <td>${manager.id}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td> <a href="mailto:${manager.email}">${manager.email}</a></td>
                            </tr>
                            <tr>
                                <th>Office #</th>
                                <td>${manager.office}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
        </div>`
}

createTeam = (data) => {
    // array to fill with team members generated

    teamArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // call each type of employee

        if (role === 'Engineer') {
            const createdEngineer = createEngineer(employee);
            // push to array
            teamArray.push(createdEngineer);
        }

        if (role === 'Intern') {
            const createdIntern = createIntern(employee);
            // push to array
            teamArray.push(createdIntern);
        }

        if (role === 'Manager') {
            const createdManager = createManager(employee);
            // push to array
            teamArray.push(createdManager);
        }
        
    }

    // joining team array

    const completedTeam = teamArray.join('');

    const generateTeam = createPage(completedTeam);

    return generateTeam;

}

// making full page html

const createPage = function(completedTeam) {
    return`
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  </head>
  <body>
  <section class="hero is-info">
    <div class="hero-body has-text-centered">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
      <br>
    </div> </section>

    <div class="columns m-2">

    ${completedTeam}
    
    </div>

  </body>
</html>`
}

module.exports = generateTeam;