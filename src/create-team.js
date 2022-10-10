export const createPage = (array) => {

    let createEngineer = (engineer) => {
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

    let createIntern = (intern) => {
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

    let createManager = (manager) => {
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


    // slap the generated html for the employee cards into the main page and return it
    let fullPage = (cards) => {
        return `
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

    ${cards}
    
    </div>

  </body>
</html>`
    }

    //array of team member objects passed in from script.js

    //empty array for the returned card html
    let completedTeam = []

    //generate a card for each employee
    for (let i = 0; i < array.length; i++) {
        const member = array[i];

        let dispatchTable = (type) => {

            let list = {
                "Engineer": createEngineer(member),

                "Intern": createIntern(member),

                "Manager": createManager(member)
            }
            return list[type]
        }

        //get the employee role (will serve as dispatch table key)
        let type = member.getRole();

        let card = dispatchTable(type)

        //generate card and push to array
        completedTeam.push(card)

    }

    let cards = completedTeam.join('')


    let returnPage = () => {
        Promise.resolve(
            fullPage(cards)
        )
    }

    return returnPage()
    
}
