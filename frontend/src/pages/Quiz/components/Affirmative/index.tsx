import { Title } from "./styles";

interface AffirmativeProps {
  title: string;
}

export function Affirmative({ title }: AffirmativeProps) {
  return <Title>{title}</Title>;
}
