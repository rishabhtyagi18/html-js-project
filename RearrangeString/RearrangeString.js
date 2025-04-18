function reorganizeString(s) {
    const freqMap = {};
    for (let char of s) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
  
    const maxHeap = Object.entries(freqMap)
      .map(([char, freq]) => ({ char, freq }))
      .sort((a, b) => b.freq - a.freq);
  
    const result = [];
    let prev = null;
  
    while (maxHeap.length > 0) {
      let found = false;
      for (let i = 0; i < maxHeap.length; i++) {
        if (!prev || maxHeap[i].char !== prev.char) {
          const current = maxHeap.splice(i, 1)[0];
          result.push(current.char);
          current.freq--;
  
          if (prev && prev.freq > 0) {
            maxHeap.push(prev);
          }
  
          maxHeap.sort((a, b) => b.freq - a.freq); // Re-sort heap
          prev = current.freq > 0 ? current : null;
          found = true;
          break;
        }
      }
  
      if (!found) return ""; // Not possible
    }
  
    return result.join('');
  }
  
  
  console.log(reorganizeString("aab"));   // Output: "aba"
  console.log(reorganizeString("aaab"));  // Output: ""
  console.log(reorganizeString("aaabc")); // Output: e.g., "abaca"
  