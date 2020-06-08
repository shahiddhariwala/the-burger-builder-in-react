import React from 'react';
import classes from './buildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad',type:'salad'},
    {label: 'Cheese',type:'cheese'},
    {label: 'Bacon',type:'bacon'},
    {label: 'Meat',type:'meat'},
];
const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        {controls.map(control => (<BuildControl key={control.label} label={control.label} added={()=>props.addIngredeint(control.type)}/>))}
    </div>
);

export default buildControls;