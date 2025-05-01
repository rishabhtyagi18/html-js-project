// To determine the minimum room size for meetings, consider that the average space 
// per person should be around 20–25 sq ft (1.8–2.3 sq m) to accommodate chairs, tables, and movement. 
// For JavaScript implementations, algorithms can help calculate 
// the minimum number of rooms needed based on meeting schedules.

// Minimum Meeting Rooms in JavaScript
// To find the minimum number of meeting rooms required to accommodate 
// all meetings without overlap, you can use various approaches. 
// Below are two common methods: using sorting with two pointers and using a min-heap (priority queue).





// #1. Sorting and Two Pointers Approach
// This method involves sorting the start and end times of meetings and using 
// two pointers to track the number of rooms needed.

// Algorithm Steps:

// Sort the start and end times of the meetings.
// Use two pointers to traverse through the start and end times.
// Increment the room count when a meeting starts before the previous one ends.
// Decrement the room count when a meeting ends.


// JavaScript Implementation:

function minMeetingRooms(intervals) {
    if (intervals.length === 0) {
        return 0;
    }

    // Sort the intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Min-heap to track the end times of meetings
    const heap = [];

    // Add the end time of the first meeting
    heap.push(intervals[0][1]);

    for (let i = 1; i < intervals.length; i++) {
        // If the room due to free up the earliest is free, remove it from the heap
        if (heap[0] <= intervals[i][0]) {
            heap.shift();
        }

        // Add the current meeting's end time to the heap
        heap.push(intervals[i][1]);
        // Re-sort the heap
        heap.sort((a, b) => a - b);
    }

    // The size of the heap is the number of rooms required
    return heap.length;
}

// Example usage:
const intervals = [[5, 10], [0, 30], [15, 20]];
console.log(minMeetingRooms(intervals)); // Output: 2




// #2. Using a Min-Heap Approach
// This approach uses a min-heap to efficiently manage the end times of meetings.

// Algorithm Steps:

// Sort the meetings by their start times.
// Use a min-heap to keep track of the end times of meetings currently using a room.
// Iterate through the sorted meetings:
// If the earliest end time is less than or equal to the current meeting's start time, reuse that room.
// Otherwise, allocate a new room.

function minMeetingRooms(intervals) {
    if (intervals.length === 0) {
        return 0;
    }

    // Sort the intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const heap = [];
    heap.push(intervals[0][1]);

    for (let i = 1; i < intervals.length; i++) {
        if (heap[0] <= intervals[i][0]) {
            heap.shift();
        }
        heap.push(intervals[i][1]);
        heap.sort((a, b) => a - b);
    }

    return heap.length;
}

// Example usage:
// const intervals = [[5, 10], [0, 30], [15, 20]];
console.log(minMeetingRooms(intervals)); // Output: 2


// Complexity Analysis

// Time Complexity: O(n log n) due to sorting and heap operations.
// Space Complexity: O(n) for storing end times in the heap.

// Edge Cases to Consider

// No meetings: The output should be 0.
// Meetings that do not overlap: The output should be 1.
// Meetings that start and end at the same time: The algorithm should handle this correctly.
// By implementing these algorithms, you can efficiently determine 
// the minimum number of meeting rooms required for any given set of meeting intervals.

