// Converts total number of seconds into a M:SS format
// and returns the string in that format
export function formatTime(totalSeconds) {
  // Return a placeholder if the time is null or undefined
  if (totalSeconds === null || totalSeconds === undefined) {
    return "0:00"; 
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60); // Use Math.floor to handle any decimals
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${minutes}:${formattedSeconds}`;
}

export default formatTime;