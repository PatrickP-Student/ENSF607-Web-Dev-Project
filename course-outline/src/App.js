import './App.css';
import "bulma/css/bulma.css";

//TODO: Create functions that will add <li></li> components to the areas when the button is pressed.
//TODO: Create functions that will remove <li></li> objects from the areas when the delete buttons are pressed
//TODO: refactor all this code into components, and simple call the components to return the html below (This code
// is super unreadable, so we need to break it out into individual components for readability and to adhere to the
// SOLID principles.)

function App() {
  return (
    <div className="App">

      <div class="block">
        <div className="App Header">

          <section class="hero is-primary is-bold">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Course Outline Form
                  </h1>
                <h2 class="subtitle">
                  Create Course Syllabus
                  </h2>
              </div>
            </div>
          </section>

        </div>
      </div>

      <div class="block">
        <div className="Container 1">

          <div class="block">
            <div className="Section 1a">
              <div className="Course Information Header">
                <div class="container">

                  <div class="notification is-info">
                    <strong>1. Course Information</strong>
                  </div>
                  <h1 align="left"><strong>Course Specific Information</strong></h1>
                  <textarea class="textarea" placeholder="Input course description..." rows="5">
                  </textarea>

                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="block">
              <div className="Section 1b">
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Course Hours</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <input class="input" type="text" placeholder="Input course hours..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="block">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Academic Credit</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input class="input" type="text" placeholder="Input course credit amount..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="block">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Calendar Reference</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input class="input" type="text" placeholder="Input calender url link..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="block">
        <div className="Section 2">

          <div class="block">
            <div className="Learning Outcome Header">
              <div class="container">

                <div class="notification is-info">
                  <strong>2. Learning Outcomes</strong>
                </div>

              </div>
            </div>
          </div>

          <div class="block">
            <div className="Learning Outcome List">

              <div class="block">
                <div class="container">
                  <div class="field">
                    <div class="control">
                      <input class="input" type="text" placeholder="Input learning outcome..." />
                    </div>
                  </div>
                </div>
              </div>

              <div class="block">
                <div class="container">
                  <div class="field is-grouped is-centered">

                    <div class="buttons">
                      <button class="button is-success is-light">Add Element</button>
                      <button class="button is-danger is-light">Delete Element</button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div class="block">
        <div className="Section 3">

          <div class="block">
            <div className="Final Grade Determination Header">
              <div class="container">

                <div class="notification is-info">
                  <strong>3. Final Grade Determination</strong>
                </div>

              </div>
            </div>
          </div>

          <div class="block">
            <div className="Final Grades Determination List">

              <div class="block">
                <div class="container">
                  <div class="columns">

                    <div class="column is-half">
                      <div class="field">
                        <div class="control">
                          <input class="input" type="text" placeholder="Input grade component..." />
                        </div>
                      </div>
                    </div>

                    <div class="column">
                      <div class="field">
                        <div class="control">
                          <input class="input" type="text" placeholder="Input outcome(s) evaluated..." />
                        </div>
                      </div>
                    </div>

                    <div class="column">
                      <div class="field">
                        <div class="control">
                          <input class="input" type="text" placeholder="Input grading weight..." />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div class="block">
                <div class="container">
                  <div class="field is-grouped is-centered">

                    <div class="buttons">
                      <button class="button is-success is-light">Add Learning Outcome</button>
                      <button class="button is-danger is-light">Delete Learning Outcome</button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div class="block">
        <div className="Save to database section">

          <div class="block">
            <div class="container">

              <div class="field is-grouped is-centered">
                <div class="buttons">
                  <button class="button is-warning">Save to database</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
