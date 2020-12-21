import './App.css';
import "bulma/css/bulma.css";
import SectionHeaders from './components/SectionHeaders';
import PageHeader from './components/PageHeader';
import StaticInputFields from './components/StaticInputFields';
import Buttons from './components/Buttons';
import { Component } from 'react';
import ChangeLearningOutcome from './components/ChangeLearningOutcome';
import DisplayLO from './components/DisplayLO';
import DisplayGD from './components/DisplayGD';
import ChangeGradeDetermination from './components/ChangeGradeDetermination';
import LetterGradeFields from './components/LetterGradeFields';

//TODOS: 
// 1) Add states to each input component class and an OnChange() event handler function so we will update the local 
// state for each component as text is input into the field.
// 2) Store each components object in the App class somehow (will likely be messy as fuck here since we have so
// many), so that we have access to all of the inputs held in the states. We will need this when we make CALLs, etc
// to the DB when we hook this up to Django

class App extends Component {

  constructor() {
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
    if(this.state.learningOuts.length > 1){
      this.setState({
        learningOuts: this.state.learningOuts.splice(0, this.state.learningOuts.length - 1)
      });
    }
  }

  addNewGD = () => {
    const newGD = 0
    this.setState({
      gradeComps: [...this.state.gradeComps, newGD]
    });
  }

  removeGD = () => {
    if(this.state.gradeComps.length > 1){
      this.setState({
        gradeComps: this.state.gradeComps.splice(0, this.state.gradeComps.length - 1)
      });
    }
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

                    <StaticInputFields
                      label="Course Name"
                      placeholder="Input course name..."
                    />

                    <StaticInputFields
                      label="Course Number"
                      placeholder="Input course number..."
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
                <div class="container">

                  <div class="block">
                    <h1 align="left">This course will consist of the following learning components:</h1>
                  </div>
                  <DisplayLO displayLO={this.state.learningOuts} />
                  <ChangeLearningOutcome
                    addNewLO={this.addNewLO}
                    removeLO={this.removeLO}
                  />

                </div>
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
                <div class="container">

                  <div class="block">
                    <h1 align="left">The final grade in this course will be based on the following components:</h1>
                  </div>
                  <DisplayGD displayGD={this.state.gradeComps} />
                  <ChangeGradeDetermination
                    addNewGD={this.addNewGD}
                    removeGD={this.removeGD}
                  />

                  <div class="block">
                    <h1 align="left"><strong>Extra Notes on Final Grade Determination</strong></h1>
                    <textarea class="textarea" placeholder="Input notes..." rows="8">
                    </textarea>
                  </div>

  
                    <h1 align="left"><strong><u>Letter Grades Conversion</u></strong></h1>
                  <LetterGradeFields/>

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
