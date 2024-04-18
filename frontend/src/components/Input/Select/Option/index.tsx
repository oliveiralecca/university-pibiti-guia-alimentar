interface OptionProps {
  label: string;
  value?: number;
}

export function Option({ label, value }: OptionProps) {
  return <option label={label} value={value} />;
}
