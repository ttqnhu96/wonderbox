import { WBContainer } from '@components/common/wb-container';
import { Outlet } from 'react-router-dom';

export const MainLayout = (): JSX.Element => {
  return (
    <WBContainer>
      {/* <NavBar /> */}
      <Outlet />
    </WBContainer>
  );
};
