import { Autocomplete } from "@mui/joy";
import { useGetAvailUsersQuery } from "../../../services/EventsApi";

interface EventSignUpAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EventSignUpAutocomplete({
  value,
  onChange,
}: EventSignUpAutocompleteProps) {
  const { data, error, isLoading } = useGetAvailUsersQuery({});

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  const names = data.map((user: { username: string }) => user.username);

  return (
    <Autocomplete
      placeholder="Search for a player..."
      options={names}
      value={value}
      onChange={(_event, newValue) => {
        onChange(newValue || ""); // Pass the selected value back to the parent
      }}
    />
  );
}