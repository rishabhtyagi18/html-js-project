function doRectanglesOverlap(rect1, rect2) {
    const [x1A, y1A, x2A, y2A] = rect1; // Rectangle 1: [x1A, y1A, x2A, y2A]
    const [x1B, y1B, x2B, y2B] = rect2; // Rectangle 2: [x1B, y1B, x2B, y2B]
    
    // If one rectangle is to the left of the other
    if (x2A <= x1B || x2B <= x1A) {
      return false;
    }
  
    // If one rectangle is above the other
    if (y2A <= y1B || y2B <= y1A) {
      return false;
    }
  
    return true; // Rectangles overlap
}

function overlapArea(rect1, rect2) {
    const [x1A, y1A, x2A, y2A] = rect1; // Rectangle 1
    const [x1B, y1B, x2B, y2B] = rect2; // Rectangle 2
  
    // Find the overlapping coordinates (top-left and bottom-right)
    const xOverlap1 = Math.max(x1A, x1B);
    const yOverlap1 = Math.max(y1A, y1B);
    const xOverlap2 = Math.min(x2A, x2B);
    const yOverlap2 = Math.min(y2A, y2B);
  
    // Check if there is an overlap (if overlap coordinates are valid)
    if (xOverlap1 < xOverlap2 && yOverlap1 < yOverlap2) {
      const width = xOverlap2 - xOverlap1;
      const height = yOverlap2 - yOverlap1;
      return width * height; // Area of the overlap
    }
  
    return 0; // No overlap
}

const rect1 = [0, 0, 5, 5]; // Rectangle 1: [x1, y1, x2, y2]
const rect2 = [3, 3, 6, 6]; // Rectangle 2: [x1, y1, x2, y2]

console.log(doRectanglesOverlap(rect1, rect2));  // Output: true (rectangles overlap)

const overlap = overlapArea(rect1, rect2);
console.log(overlap);  // Output: 4 (overlap area is 4 square units)
