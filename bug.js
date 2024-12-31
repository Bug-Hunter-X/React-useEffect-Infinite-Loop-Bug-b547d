```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition. This will cause an infinite loop.
    if (count < 5) {
      setCount(count + 1);
    }
  }, [count]); // Missing dependency

  return <div>Count: {count}</div>;
}
```