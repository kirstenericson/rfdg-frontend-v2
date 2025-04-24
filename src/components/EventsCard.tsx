import { Card } from "@mui/joy";
interface EventProps {
    name: string;
    date: string;
    registration_starts: string;
    registration_ends: string;
    registration_limit: string;
    holes: string;
}
export const EventsCard: React.FC<EventProps> = ({ name, date, registration_starts, registration_ends, registration_limit, holes }) => {
    return (
        <Card className="event-card" variant='outlined' style={{ padding: '20px', margin: '10px', backgroundColor: '#f0f0f0', height: '20em', overflow: 'scroll' }}>
            <h2>{name}</h2>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Registration Starts:</strong> {registration_starts}</p>
            <p><strong>Registration Ends:</strong> {registration_ends}</p>
            <p><strong>Registration Limit:</strong> {registration_limit}</p>
            <p><strong>Holes:</strong> {holes}</p>
        </Card>
    );
}