import React from "react";
import classes from "./index.module.css";

export default (props) => {
	const htmlFor = `${props.label}-${Math.random()}`;

	return (
		<div className={classes.select}>
			<label htmlFor={htmlFor}>{props.label}</label>
			<select
				id={htmlFor}
				value={props.value}
				onChange={props.onChange}
			>
                {props.options.map((option, inx) => {
                    return (
                        <option value={option.value} key={option.value + inx}>
                            {option.text}
                        </option>
                    );
                })}
            </select>
		</div>
	);
};
