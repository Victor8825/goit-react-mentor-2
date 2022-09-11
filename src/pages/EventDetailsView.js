import { useFetchEvent } from 'hooks/useFetchEvent';
import { useNavigate, useLocation } from 'react-router-dom';

export const EventDetailsView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = useFetchEvent();
  console.log(event);
  return (
    <>
      <button
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go back
      </button>

      {event && (
        <div>
          <img src={event.images[0].url} alt={event.name} />
          <p>{event.name}</p>
          <p>{event.info}</p>
          <p>{event.classifications[0].genre.name}</p>
        </div>
      )}
    </>
  );
};
