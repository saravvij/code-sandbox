# React useMemo hook

* Returns a memoized value
* Pass a “create” function and an array of dependencies. 
* useMemo will only recompute the memoized value when one of the dependencies has changed. 
* If no array is provided, a new value will be computed on every render.
* This optimization helps to avoid expensive calculations on every render.
* Write your code so that it still works without useMemo — and then add it to optimize performance.
* The useCallback hook is similar to useMemo.
    - useCallback returns a memoized function.
    - useMemo has a function that returns a value.