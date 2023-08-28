import React from "react";

import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools";

export const YouTubeForm = () => {
  const form = useForm();
  const { register, control } = form;
    // const { name, ref, onChange, onBlur } = register("userName");



  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input
            type="text"
            id="username"
            // name={name}
            // ref={ref}
            // onChange={onChange}
            // onBlur={onBlur}
            {...register("username")}
        />

        <label htmlFor="email">Email</label>
        <input 
            type="email" 
            id="email" 
            // name="email"
            {...register("email")}
            
        />

        <label htmlFor="channel">Channel</label>
        <input 
            type="text" 
            id="channel"
            // name="channel"
            {...register("channel")}
        />

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control}/>
    </div>
  );
};
