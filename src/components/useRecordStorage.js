import { useState, useEffect } from "react";

// key to access gameRecords
const STORAGE_KEY = 'gameRecords';

// initialize record state; no records
const defaultRecords = {
  easy: null,
  medium: null,
  hard: null,
};

// checks for locally stored records on mounting
const loadInitialRecords = () => {
  try {
    const storedRecords = localStorage.getItem(STORAGE_KEY);
    return storedRecords ? JSON.parse(storedRecords) : defaultRecords;
  } catch (error) {
    console.error("Failed to load records:", error);
    return defaultRecords;
  }
};


// stores and updates records
function useRecordStorage() {
  // call initial load function
  const [records, setRecords] = useState(loadInitialRecords);

  // saves records everytime record changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
    } catch (error) {
      console.error("Failed to save records:", error);
    }
  }, [records]);

  // actual record update logic
  const updateRecord = (difficulty, newTime) => {
    // get currentRecord for difficulty 
    const currentRecord = records[difficulty];

    // update the record state
    if (currentRecord === null || newTime < currentRecord) {
      setRecords(prevRecords => ({
        ...prevRecords,
        [difficulty]: newTime,
      }));
    }
  };

  // return record and update function
  return { records, updateRecord };
}

export default useRecordStorage;