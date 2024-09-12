interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="input-group">
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </div>
  )
}
