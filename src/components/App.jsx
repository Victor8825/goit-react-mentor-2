import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MainView } from 'pages/MainView';
import { EventsView } from 'pages/EventsView';
import { EventItemView } from 'pages/EventItemView';
import { EventDetailsView } from 'pages/EventDetailsView';
import { NotFoundView } from 'pages/NotFoundView';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainView />} />
          <Route path="events" element={<EventsView />}>
            <Route path=":eventId" element={<EventItemView />} />
          </Route>
        </Route>
        <Route path="events/:eventId/details" element={<EventDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
};
