import { Component } from "react";

class LetterGradeFields extends Component {

    render() {
        let middle = "≤T<"
        let first = "T≥"
        let last = "T<"
       return (
       <div class="block">
           <div class="table is-narrow">
               <thead>
                   <th>Letter Grade</th>
                   <th></th>
                   <th>Total Mark (T)</th>
                   <th></th>
               </thead>
               <tr>
                   <td>A+</td>
                   <td></td>
                   <td>{ first }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="95.0%"/></div></td>
               </tr>
               <tr>
                   <td>A</td>
                   <td><div class="control"><input class="input" type="text" placeholder="90.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="95.0%"/></div></td>
               </tr>
               <tr>
                   <td>A-</td>
                   <td><div class="control"><input class="input" type="text" placeholder="85.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="90.0%"/></div></td>
               </tr>
               <tr>
                   <td>B+</td>
                   <td><div class="control"><input class="input" type="text" placeholder="80.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="85.0%"/></div></td>
               </tr>
               <tr>
                   <td>B</td>
                   <td><div class="control"><input class="input" type="text" placeholder="75.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="80.0%"/></div></td>
               </tr>
               <tr>
                   <td>B-</td>
                   <td><div class="control"><input class="input" type="text" placeholder="70.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="75.0%"/></div></td>
               </tr>
               <tr>
                   <td>C+</td>
                   <td><div class="control"><input class="input" type="text" placeholder="65.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="70.0%"/></div></td>
               </tr>
               <tr>
                   <td>C</td>
                   <td><div class="control"><input class="input" type="text" placeholder="60.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="65.0%"/></div></td>
               </tr>
               <tr>
                   <td>C-</td>
                   <td><div class="control"><input class="input" type="text" placeholder="56.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="60.0%"/></div></td>
               </tr>
               <tr>
                   <td>D+</td>
                   <td><div class="control"><input class="input" type="text" placeholder="53.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="56.0%"/></div></td>
               </tr>
               <tr>
                   <td>D</td>
                   <td><div class="control"><input class="input" type="text" placeholder="50.0%"/></div></td>
                   <td>{ middle }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="53.0%"/></div></td>
               </tr>
               <tr>
                   <td>F</td>
                   <td></td>
                   <td>{ last }</td>
                   <td><div class="control"><input class="input" type="text" placeholder="50.0%"/></div></td>
               </tr>
           </div>
       </div> 
       )
    }

}

export default LetterGradeFields;