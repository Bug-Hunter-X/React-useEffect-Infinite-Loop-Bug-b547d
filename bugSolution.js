```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct condition. Avoids infinite loop
    let interval;
    if (count < 5) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [count]); // Correct dependency

  return <div>Count: {count}</div>;
}
```