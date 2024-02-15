import {
  RecoilRoot,
  // useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotification,
} from './atoms';
// import { useMemo } from 'react';
// Recoil Root

export default function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  const totalNotificationCount = useRecoilValue(totalNotification);

  // const totalNotificationCount = useMemo(() => {
  //   return (
  //     networkNotificationCount +
  //     jobsAtomCount +
  //     notificationsAtomCount +
  //     messagingAtomCount
  //   );
  // }, [
  //   networkNotificationCount,
  //   jobsAtomCount,
  //   notificationsAtomCount,
  //   messagingAtomCount,
  // ]);
  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? '99+' : networkNotificationCount})
      </button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Notifications({notificationsAtomCount})</button>

      <button>Me({totalNotificationCount})</button>
      <ButtonUpdater />
    </>
  );
}

function ButtonUpdater() {
  // use setrecoilstate if only update is required
  const setJobAtomCount = useSetRecoilState(jobsAtom);
  return (
    <button
      onClick={() => {
        setJobAtomCount((c) => c + 1);
      }}
    >
      You
    </button>
  );
}
