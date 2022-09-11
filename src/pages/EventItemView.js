import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

export const EventItemView = () => {
  // const [error, setError] = useState(null);
  const location = useLocation();
  const event = useFetchEvent();

  return (
    <>
      {event ? (
        <div>
          <img src={event.images[0].url} alt={event.name} />
          <p>{event.name}</p>
          <Link to="details" state={location.state}>
            <button type="button">More details</button>
          </Link>
        </div>
      ) : (
        <p>Are you serious?</p>
      )}
    </>
  );
};
