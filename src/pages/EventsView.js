import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getEventFetch } from '../components/services/api';

export const EventsView = () => {
  const [events, setEvents] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getEventFetch().then(response => setEvents(response));
  }, []);

  return (
    <>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link to={id} state={{ from: location.pathname }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
};
