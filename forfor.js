

const array = ["a", "b", "c", "d", "e"];
const delays = [0, 10, 20, 30, 40]; // Define the delays in seconds
  
  // Custom delay function using a Promise
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  const logWithDelay = async () => {
    for (let i = 0; i < array.length; i++) {
      await delay(delays[i] * 1000); // Wait for the specified delay (converted to milliseconds)
      const currentTime = new Date().toLocaleTimeString(); // Get the current time
      console.log(`${currentTime}: ${array[i]}`); // Print time and element
    }
  };
  
  logWithDelay(); // Call the async function