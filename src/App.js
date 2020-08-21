import React from 'react';
import birdsData from "./Common/birdsData/birdsData";
import './App.css';
import Header from "./Common/Header/Header";
import Question from "./Common/Question/Question";
import AnswerBlock from "./Common/AnswerBlock/AnswerBlock";
import DescriptionBlock from "./Common/DescriptionBlock/DescriptionBlock";


class App extends React.Component {


    state = {
        filterHeaderQuestion: {
            filterCss1: "passive",
            filterCss2: "passive",
            filterCss3: "passive",
            filterCss4: "passive",
            filterCss5: "active",
        },
       numberOfQuestion: 0,
    };



    test1= ()=> {
        alert("next question");
        this.setState({
            filterHeaderQuestion: {...this.state.filterHeaderQuestion, filterCss2: "active"} } );
             // console.log (block)
    };





    render = () => {

        let ArrayBird= birdsData[this.state.numberOfQuestion].map (element =>
                element.name  );

        return (
            <div className="App">
                <header className="App-header">


                    <Header
                        filterHeaderQuestion={this.state.filterHeaderQuestion}
                        changeFilter={this.test1}/>

                    <Question/>


                    {/*{QuestionArray}*/}


                    <div className="ansAndDescr">
                        <AnswerBlock ArrayBird={ArrayBird} />
                        <DescriptionBlock/>
                    </div>

                    <button onClick={this.test1}>gggg</button>


                </header>
            </div>
        );
    }
}

export default App;
