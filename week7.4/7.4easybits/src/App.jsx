import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import {
  jobsAtom,
  messagingAtom,
  netWorkAtom,
  notificationsAtom,
} from './atoms';
// Recoil Root

export default function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(netWorkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount, setMessagingAtomCount] =
    useRecoilState(messagingAtom);
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

      <button
        onClick={() => {
          setMessagingAtomCount((c) => c + 1);
        }}
      >
        Me
      </button>
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
