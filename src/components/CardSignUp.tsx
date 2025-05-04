import { Autocomplete } from "@mui/joy"
import { useGetAvailUsersQuery } from "../services/EventsApi";

const CardSignUp = () => {
    const { data, error, isLoading } = useGetAvailUsersQuery({});   
    console.log(data); 
    if (error) return <div>Error</div>;
    if (isLoading) return <div>Loading...</div>;
    const names = data.map((user: any) => user.username); 
    return (
    <Autocomplete
        placeholder="Search for a player..."
        options={names}
        onChange={(event, value) => {
            console.log(value);
        }}
    />
    );
}
export default CardSignUp;