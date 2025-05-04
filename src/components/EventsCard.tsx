import { Button, Card } from "@mui/joy";
import Moment from 'moment';
interface EventProps {
    name: string;
    date: string;
    registration_starts: string;
    registration_ends: string;
    registration_limit: string;
    holes: string;
    id: string;
}
export const EventsCard: React.FC<EventProps> = ({ name, date, registration_starts, registration_ends, registration_limit, holes, id}) => {
    const registration_starts_date = new Date(registration_starts);
    const registration_ends_date = new Date(registration_ends);
    const date_date = new Date(date);
    return (
        <a href={`/events/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card className="event-card" variant='outlined' style={{ padding: '20px', margin: '10px', backgroundColor: '#f0f0f0', height: '20em',  width: '50em' }}>
            <h2>{name}</h2>
            <p><strong>Date:</strong> {Moment(date_date).format('MM/DD/YYYY')}</p>
            <p><strong>Registration Starts:</strong> {Moment(registration_starts_date).format('MM/DD/YYYY, h:mm A')}</p>
            <p><strong>Registration Ends:</strong> {Moment(registration_ends_date).format('MM/DD/YYYY, h:mm A')}</p>
            <p><strong>Registration Limit:</strong> {registration_limit}</p>
            <p><strong>Holes:</strong> {holes}</p>
        </Card>
        </a>
    );
}