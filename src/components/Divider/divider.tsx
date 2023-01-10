import React from "react";
import { IDivider } from "./divider.types";
import { Line } from "./divider.styles";

export function Divider({ height }: IDivider) {
  return <Line height={height} />;
}
