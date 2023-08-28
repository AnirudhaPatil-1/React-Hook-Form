import React from "react";

import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools";

let renderCount = 0;
type FormValues = {
  username: string,
  email: string, 
  channel: string
}

export const YouTubeForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;
    // const { name, ref, onChange, onBlur } = register("userName");
  renderCount++;

  const onSubmit = (data: FormValues) =>{
    console.log("Form Submitted", data);
  }

  return (
    <div>
      <h1>{renderCount/2}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
