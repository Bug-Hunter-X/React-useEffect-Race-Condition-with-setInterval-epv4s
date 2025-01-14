```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const intervalId = setInterval(() => {
      if (isMounted) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      setIsMounted(false);
    };
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```