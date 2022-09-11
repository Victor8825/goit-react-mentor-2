import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventDetails } from '../components/services/api';

export const useFetchEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEventDetails(eventId).then(setEvent).catch(setError(null));
  }, [eventId]);

  return event ? event : error;
};
