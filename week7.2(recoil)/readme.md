# Context api and shortcomings

# State management

A cleaner way to store the state of your app, that fixes unnessecary re-render

## Recoil

- has concept of atoms(smallest unit of state) to store state
- teleported to any component

- things to learn
  - RecoilRoot
  - atom
  - useRecoilState (same as useState(0))
  - useRecoilValue (just the value i.e first arr of useState)
  - useSetRecoilState (only the set state value)
  - selector
