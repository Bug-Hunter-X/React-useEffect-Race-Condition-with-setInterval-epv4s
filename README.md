# React useEffect Race Condition with setInterval

This repository demonstrates a common error in React components involving the `useEffect` hook and the `setInterval` function.  The issue arises from attempting to update the component's state after the component has unmounted, leading to potential errors and unexpected behavior.

## Bug Description:

The `MyComponent` function uses `useEffect` to start a timer that increments a counter every second.  However, the cleanup function, while present, may not always successfully prevent state updates after unmounting. This occurs due to a race condition – the `setInterval` callback might still be executing after the component has been unmounted.

## Solution:

The solution involves refining the component to reliably clear the interval before the component unmounts, eliminating the potential for state updates after unmounting.  The solution involves adding checks to ensure that the component is mounted before making the state update.  This prevents errors that can occur if a state update is attempted when the component has already been unmounted.
