import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    // Use more functionsa comonens  they cant mangae state bt are very very needed
    // You can not manage state in every single comppnonents, And use the class based componetns less if possibee
    //This is goign to be use d twith statelsees or statfeul conmene fe

    const assignedClasses = [];
    let btnClass = '';
    btnClass = classes.red;

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }


    return (
        <div className = {classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            {console.log(props)};
        
          <p className={assignedClasses.join( ' ' )}>This is really working!</p> 
          <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};
// cannot return multiple elements without a root node.

export default cockpit;