import { ReactNode } from "react";

export interface IMovieCard {
  imagePath: string;
  title: string;
  overview: string;
  icon?: ReactNode;
  onPress: () => void;
}
