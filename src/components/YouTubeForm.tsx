import React from "react";

import { useForm } from "react-hook-form";

export const YouTubeForm = () => {
  const form = useForm();
  const { register } = form;
    const { name, ref, onChange, onBlur } = register("userName");
//   const {name, ref, onChange, onBlur} = register("email" );
//   const { name, ref, onChange, onBlur} = register("channel");


  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input
            type="text"
            id="username"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            //   {...register("username")}
        />

        <label htmlFor="email">Email</label>
        <input 
            type="email" 
            id="email" 
            // name="email"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
        />

        <label htmlFor="channel">Channel</label>
        <input 
            type="text" 
            id="channel"
            name="channel"
            // name={name}
            // ref={ref}
            // onChange={onChange}
            // onBlur={onBlur}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
