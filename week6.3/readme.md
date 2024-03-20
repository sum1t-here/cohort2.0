# RECONCILATION

React Reconciliation is the process through which React updates the Browser DOM. It makes the DOM updates faster in React. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.

### Reconcilation concepts:

- Virtual DOM
- Diffing Algorithm

# useEffect()

When filing taxes, you might need to get data from various source before you give it to CA(side effects)

- you might have to wait for 10 days before you can talk to you bank manager(setTimeout)
- you might have to go to broker's office for docs

you'll update the CA wit the info as soon as you get it (will you do any of these twice in a single year ??)

# useMemo

lets say you have crypto exchange in 3 different exchanges(coindcx, wazirx, binance)

you got returns from all three places

added them and gave it to CA

Now you got the income report. will you re-calculate the sum of all the crypto returns?

# useCallback()

The React useCallback Hook returns a memoized callback function.

The useCallback Hook only runs when one of its dependencies update.

# useRef

lets say you want to do some tax evasion
you want to override what your CA calculated as your tax returns
How would you do it? report an incorrect value to govt
