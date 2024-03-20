# Context api and shortcomings

<img width="965" alt="Screenshot 2024-03-20 at 11 37 53 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/8a3fc5df-6cf9-47a0-8ab7-81712ea80ddd">

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
