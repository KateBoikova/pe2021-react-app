import './App.css';
import React from 'react';
// import { BrowserRouter as Router,
//   Switch,
//   Route,
//   Link, 
//   useRouteMatch} from 'react-router-dom';
// import Greeting from './components/Greeting';
// import Counter from './components/Counter';
import Calendar from './components/Calendar';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactsPage from './pages/ContactsPage';
// import NotFound from './pages/ComponentsPage/NotFound';
// import CounterWrapper from './components/CounterWrapper';
// import UsersListHW from './components/UsersListHW';
// import SignUpForm from './components/SignUpForm';
import UsersLoader from './components/UsersLoader';

// const App = () => <PhonesProvider />

function App() {
  return <Calendar />
}

// function App() {
//   return (
//     <>
//     <PageHeader/>
//     <Router>
//       <ul>
//         <li>
//           <Link to={'/'}>Home</Link>
//         </li>
//         <li>
//           <Link to={'/components'}>Components</Link>
//         </li>
//         <li>
//           <Link to={'/contacts'}>Contacts</Link>
//         </li>
//         <li>
//           <Link to={'/about'}>About</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={'/'}>
//           <HomePage/>
//         </Route>
//         <Route path={'/components'}>
//           <ComponentsPage/>
//         </Route>
//         <Route path={'/contacts'}>
//           <ContactsPage/>
//         </Route>
//         <Route path={'/about'}>
//           <AboutPage/>
//         </Route>
//         <Route path={'*'} component={NotFound} />
//       </Switch>
//     </Router>
//     <PageFooter/>
//     </>
//   );
// }
// function PageHeader() {
//   return <div>Header</div>;
// }

// function PageFooter() {
//   return <div>Footer</div>;
// }

// function ComponentsPage() {
//   const { path, url } = useRouteMatch();
//   return (
//       <div> 
//       <ul>
//         <li>
//           <Link to={`${url}/greeting`}>Greeting</Link>
//         </li>
//         <li>
//           <Link to={`${url}/counter`}>Counter</Link>
//         </li>
//         <li>
//           <Link to={`${url}/calendar`}>Calendar</Link>
//         </li>
//       </ul>
//       <Switch>
//           <Route path={`${path}/greeting`}>
//             <Greeting/>
//           </Route>
//           <Route path={`${path}/counter`}>
//             <Counter/>
//           </Route>
//           <Route path={`${path}/calendar`}>
//             <Calendar/>
//           </Route>
//           <Route path={`${path}/*`} component={NotFound} />

//       </Switch>
//     </div>
//   )
// }




// function TestComponent (props) {
//   const {prop1, className} = props;
//   return <div>TestComponent</div>
// }
// function App() {
//   return <TestComponent prop1={2} className={'test'}> 1111 </TestComponent>
// }

// import React, { Component } from 'react'

// function NamedList (props) {
//   const { name, children } = props;
//   return (
//       <>
//         <h2>{name}</h2>
//         <ul>{children}</ul>
//       </>
//   );
// }

// function App() {
//   return (
//     <NamedList name={'test'}>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>

//     </NamedList>
//   )
// }



// function App() {
//   return (
//   <ImageWrapper 
//     width={'400px'} 
//     height={'300px'}    
//     title={'Cat'}
//     tabIndex={1}>
//     <img 
//     src={'https://ichef.bbci.co.uk/images/ic/1200x675/p06vvmvc.jpg'} 
//     alt={'cat'}

//     />
//   </ImageWrapper>);
// }
export default App;




// const App = () => <ParentUsersList name={'boo'} isGreeting={false}/>;

// import Greeting from './components/Greeting';
// class App extends Component {
//   // rconst
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: 'Vasia',
//       isGreeting: true,
//     };
//   }

//   // Дописать в стейт isGreeting и передавать в пропсы

//   render() {
//     const { name, isGreeting } = this.state;
//     return <Greeting name={name} isGreeting={isGreeting} />;
//   }
// }
// //rcc

// export default App;

// function App() {
//   return <Greeting name="Vasia" />;
// }
// props = {name:"Vasia"}
// Greeting(props)