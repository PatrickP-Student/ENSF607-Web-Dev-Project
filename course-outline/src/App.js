import './App.css';
import "bulma/css/bulma.css";
import SectionHeaders from './components/SectionHeaders';
import PageHeader from './components/PageHeader';
import StaticInputFields from './components/StaticInputFields';
import Buttons from './components/Buttons';
import { Component} from 'react';
import ChangeLearningOutcome from './components/ChangeLearningOutcome';
import DisplayLO from './components/DisplayLO';
import DisplayGD from './components/DisplayGD';
import ChangeGradeDetermination from './components/ChangeGradeDetermination';

class App extends Component {

  constructor () {
    super();
    this.state = {
      learningOuts: [{
        key: 0,
      }],
      gradeComps: [{
        key: 0,
      }],
    }
  }

  addNewLO = () => {
    const newLO = 0
    this.setState({
      learningOuts: [...this.state.learningOuts, newLO]
    });
  }

  removeLO = () => {
    this.setState({
      learningOuts: this.state.learningOuts.splice(0, this.state.learningOuts.length - 1)
    });
  }

  addNewGD = () => {
    const newGD = 0
    this.setState({
      gradeComps: [...this.state.gradeComps, newGD]
    });
  }

  removeGD = () => {
    this.setState({
      gradeComps: this.state.gradeComps.splice(0, this.state.gradeComps.length - 1)
    })
  }

  render() {
    return (
      <div className="App">

        <PageHeader
          title="Course Outline Form"
          subtitle="Create Course Syllabus"
        />

        <div class="block">
          <div className="Container 1">

            <div class="block">
              <div className="Section 1a">
                <div className="Course Information Header">
                  <div class="container">

                    <SectionHeaders
                      title="1. Course Information"
                    />
                    <h1 align="left"><strong>Course Specific Information</strong></h1>
                    <textarea class="textarea" placeholder="Input course description..." rows="5">
                    </textarea>

                  </div>
                </div>
              </div>
            </div>

            <div class="container">

              <StaticInputFields
                label="Course Hours"
                placeholder="Input course hours..."
              />

              <StaticInputFields
                label="Academic Credit"
                placeholder="Input course credit amount..."
              />

              <StaticInputFields
                label="Calendar Reference"
                placeholder="Input calendar url..."
              />

            </div>

          </div>
        </div>

        <div class="block">
          <div className="Section 2">

            <SectionHeaders
              title="2. Learning Outcomes"
            />

            <div class="block">
              <div className="Learning Outcome List">

                <DisplayLO displayLO={ this.state.learningOuts }/>
                <ChangeLearningOutcome 
                  addNewLO={ this.addNewLO }
                  removeLO={ this.removeLO }
                />

              </div>
            </div>

          </div>
        </div>

        <div class="block">
          <div className="Section 3">

            <SectionHeaders
              title="3. Final Grade Determination"
            />

            <div class="block">
              <div className="Final Grades Determination List">

                <DisplayGD displayGD={this.state.gradeComps} />
                <ChangeGradeDetermination
                  addNewGD={ this.addNewGD }
                  removeGD={ this.removeGD }
                />

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
                    <Buttons
                      style="button is-warning"
                      text="Save to database"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
