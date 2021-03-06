import React from "react";
import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
}

export const Form = (props: FormProps) => {
  return <div data-formel-id="form-container">{props.children}</div>;
};
