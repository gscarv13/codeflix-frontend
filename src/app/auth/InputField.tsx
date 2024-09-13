export type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  id,
  name
}) => (
  <div className="flex flex-col space-y-1">
  <label className="text-sm font-semibold text-gray-500" htmlFor="email">
    {label}
  </label>
  <input
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    className="rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:outline-none focus:ring-red-500 focus:border-transparent focus:ring-2"
  />
</div>
)
