import { Autocomplete } from "@mui/joy";
import { useGetAvailUsersQuery } from "../../../services/EventsApi";

export default function EventSignUpAutocomplete() {
  const { data, error, isLoading } = useGetAvailUsersQuery({});

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  const names = data.map((user: { username: string }) => user.username);

  return (
    <Autocomplete
      placeholder="Search for a player..."
      options={names}
      onChange={(_event, value) => {
        console.log(value);
      }}
    />
  );
}
