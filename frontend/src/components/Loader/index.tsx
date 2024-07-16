import { ColorRing } from "react-loader-spinner";

export function Loader({ size }: { size: number }) {
  return (
    <ColorRing
      visible
      height={size}
      width={size}
      colors={["#20BDCD", "#E14E5E", "#f8b26a", "#abbd81", "#23587e"]}
    />
  );
}
