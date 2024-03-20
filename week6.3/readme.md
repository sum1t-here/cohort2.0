# RECONCILATION

React Reconciliation is the process through which React updates the Browser DOM. It makes the DOM updates faster in React. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.

### Reconcilation concepts:

- Virtual DOM
- Diffing Algorithm
  
<img width="1440" alt="Screenshot 2024-03-19 at 11 59 19 PM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/58249671-4466-4a79-bb01-7571203652e0">

checking re-render with dev tools
<img width="1440" alt="Screenshot 2024-03-19 at 10 53 06 PM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/b59f96f5-f591-4b48-8f95-e132dd392b16">

checking re-render with .log
<img width="1440" alt="Screenshot 2024-03-19 at 10 45 43 PM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/cf6e45d9-9be2-4087-9fea-508cc1c2ee99">

# useEffect()

When filing taxes, you might need to get data from various source before you give it to CA(side effects)

- you might have to wait for 10 days before you can talk to you bank manager(setTimeout)
- you might have to go to broker's office for docs

you'll update the CA wit the info as soon as you get it (will you do any of these twice in a single year ??)

<img width="1440" alt="Screenshot 2024-03-20 at 12 00 04 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/5af11c71-4af8-4ce4-a78a-a3749f40fca8">

<img width="1440" alt="Screenshot 2024-03-20 at 12 03 58 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/73de5c70-eec8-45d5-8acc-74d6aff9c29c">

<img width="1440" alt="Screenshot 2024-03-20 at 12 05 07 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/fe265f66-844b-4090-9b04-35bb632a2fb3">

# useMemo()

lets say you have crypto exchange in 3 different exchanges(coindcx, wazirx, binance)

you got returns from all three places

added them and gave it to CA

Now you got the income report. will you re-calculate the sum of all the crypto returns?

<img width="1440" alt="Screenshot 2024-03-20 at 12 28 00 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/73cb35ba-3932-4a9e-8c8a-9963da88ce1a">

<img width="839" alt="Screenshot 2024-03-20 at 12 31 01 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/429b8e1e-6d72-4d85-a729-0de5804f00c5">

<img width="1440" alt="Screenshot 2024-03-20 at 12 34 18 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/b1067008-f296-4b5d-9ade-b0a9ddefee1b">

<img width="685" alt="Screenshot 2024-03-20 at 12 43 38 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/7f66cebc-41ba-4e61-867f-d25ce09b2a26">

<img width="1440" alt="Screenshot 2024-03-20 at 12 43 12 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/02f37a6f-52bb-41fe-8885-aec03ae936ad">


# useCallback()

The React useCallback Hook returns a memoized callback function.

The useCallback Hook only runs when one of its dependencies update.
<img width="1440" alt="Screenshot 2024-03-20 at 7 42 30 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/b4843482-1c02-4730-a19b-b25394f9bad6">

<img width="1440" alt="Screenshot 2024-03-20 at 7 42 40 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/26839e30-232d-4369-b15b-61c3e1ffabef">

<img width="1440" alt="Screenshot 2024-03-20 at 7 43 12 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/d3973306-d409-4bbe-b6f7-c1b4e0c6808e">

<img width="1440" alt="Screenshot 2024-03-20 at 11 04 35 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/5b13046b-4d0c-4b6e-b106-2e88cf89c23d">

<img width="1440" alt="Screenshot 2024-03-20 at 8 03 02 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/31b9dc39-fd6d-4f7a-b964-a11aa262e0ba">

# useRef()

lets say you want to do some tax evasion
you want to override what your CA calculated as your tax returns
How would you do it? report an incorrect value to govt

<img width="1440" alt="Screenshot 2024-03-20 at 8 21 23 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/584759ce-a495-491c-9351-420b1b3455e1">

<img width="1440" alt="Screenshot 2024-03-20 at 8 20 58 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/dea39309-3fdd-4e17-a12f-a71f3608aa98">

<img width="1440" alt="Screenshot 2024-03-20 at 8 21 07 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/eea56f3c-c01e-4eb3-a534-ae9dda285c4c">

# React Hooks Guide

React hooks are functions that enable functional components to use state, lifecycle methods, context, and other React features. Here's a brief overview of commonly used React hooks and when to use them:

## useState

- **Purpose**: Manage state variables within functional components.
- **When to use**: Use `useState` to add state to your components, allowing them to react to user interactions or other changes.

## useEffect

- **Purpose**: Perform side effects in functional components.
- **When to use**: Use `useEffect` for tasks such as data fetching, subscriptions, or manually changing the DOM in response to state or props changes.

## useContext

- **Purpose**: Access values from React context within functional components.
- **When to use**: Use `useContext` to consume context values without nesting multiple components or using render props.

## useReducer

- **Purpose**: Manage complex state logic or state transitions in functional components.
- **When to use**: Use `useReducer` when the next state depends on the previous one or when you have multiple sub-values in your state.

## useCallback

- **Purpose**: Memoize functions to prevent unnecessary re-renders.
- **When to use**: Use `useCallback` to memoize functions in components that rely on reference equality, particularly when passing callbacks to child components.

## useMemo

- **Purpose**: Memoize expensive calculations or values.
- **When to use**: Use `useMemo` to optimize performance by caching the result of a computation and only recomputing it when its dependencies change.

## useRef

- **Purpose**: Create mutable references that persist across renders.
- **When to use**: Use `useRef` to access and manipulate DOM elements directly or store mutable values that do not trigger re-renders.

These are some of the commonly used React hooks, each serving a specific purpose in functional components. The choice of hook depends on the specific use case and requirements of your component.
