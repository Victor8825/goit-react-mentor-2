import { Outlet } from 'react-router-dom';
import { Link, List } from './StyledSharedLayout';

export const SharedLayout = () => {
  return (
    <>
      <nav>
        <List>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="events">Events</Link>
          </li>
        </List>
      </nav>
      <Outlet />
    </>
  );
};
