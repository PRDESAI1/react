import { Component } from 'react';
//import Greet1 from './component/Greet';//u can change name of tag
//import { Greet } from './component/Greet';//for named export
// import Welcome from './component/Welcome';
// import Hello from './component/Hello';
// import Message from './component/Message';
// import Counter from './component/Counter';
// import Greet from './component/Greet';
// import FunctionalClick from './component/FunctionalClick';
// import ClassClick from './component/ClassClick';
// import EventBind from './component/EventBind';
// import ParentComponent from './component/ParentComponent';
// import UserGreeting from './component/UserGreeting';
// import NameList from './component/NameList';
// import StyleSheet from './component/StyleSheet';
// import LifeCycleA from './component/LifeCycleA';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import PureCompo from './component/PureComp';
import ParentCompo from './component/ParentCompo';




class App extends  Component{
 render() {return (
    <div className="App">
      {/* <Greet name="bruce" heroName="batman">
       <p>this childeren prop</p>   
       </Greet>

       <Greet name="diana" heroName="wonder" />
       <button>action</button>
       <Greet name="ravi" heroName="hero"/>


  
      <Welcome  name="bruce" heroName="batman"/>
      <Welcome  name="diana" heroName="wonder"/>
      <Welcome  name="ravi" heroName="hero"/>

 */}
     {/* <Hello/>*/}

     {/*  <Message/>  */}

     {/*<Counter/>*/}


     {/*<Greet name="diana" heroName="wonder" /> 
<Welcome  name="bruce" heroName="batman"/>*/}

      {/*<FunctionalClick></FunctionalClick>
<ClassClick></ClassClick>*/}

     {/*  //14  <EventBind/>*/}

     {/*  //15  <ParentComponent/>*/}
  
     {/* //16    <UserGreeting/>*/}


     {/* //18,19 <NameList/> */}

        {/* <StyleSheet/>*/}

 {/* //23,24  <LifeCycleA/>*/}
{/*//25   <FragmentDemo/>*/}
{/*//25   <Table/>*/}

{/*//26<PureCompo/>*/}
<ParentCompo/>


    </div>
  );
}}

export default App;
