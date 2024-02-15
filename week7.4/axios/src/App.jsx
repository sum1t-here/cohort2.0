// async queries

import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notifications, totalNotificationSelector } from './store';
import { useEffect } from 'react';
import axios from 'axios';

export default function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get('https://sum-server.100xdevs.com/notifications').then((res) => {
      setNetworkCount(res.data);
    });
  }, []);
  return (
    <>
      <button>Home</button>

      <button>
        My Network ({networkCount.network >= 100 ? '99+' : networkCount.network}
        )
      </button>
      <button>Jobs({networkCount.jobs})</button>
      <button>Messaging({networkCount.messaging})</button>
      <button>Notifications({networkCount.notifications})</button>

      <button>Me({totalNotificationCount})</button>
    </>
  );
}
