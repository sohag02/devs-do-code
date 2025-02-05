"use client";
import { Alert } from "@nextui-org/react";

interface AlertProps {
  title: string;
  description: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  classname?: string;
}

export default function AlertComponent({
  title,
  description,
  color = "default",
  classname,
}: AlertProps) {
  return (
    <Alert
      color={color}
      description={description}
      title={title}
      className={classname}
    />
  );
}
