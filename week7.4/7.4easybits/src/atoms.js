import { atom, selector } from 'recoil';

export const networkAtom = atom({
  key: 'networkAtom',
  default: 104,
});

export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 0,
});

export const notificationsAtom = atom({
  key: 'notifiactionsAtom',
  default: 12,
});

export const messagingAtom = atom({
  key: 'messagingAtom',
  default: 0,
});

export const totalNotification = selector({
  key: 'totalNotification',
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notifiactionsAtomCount = get(notificationsAtom);
    const messagingAtomCount = get(messagingAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      notifiactionsAtomCount +
      messagingAtomCount
    );
  },
});
