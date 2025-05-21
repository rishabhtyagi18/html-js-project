class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    // Base case: if head is null or only one node, return head
    if (head === null || head.next === null) {
        return head;
    }

    // Recursive case: reverse the rest of the list
    const newHead = reverseLinkedList(head.next);

    // Reverse the current node's next pointer
    head.next.next = head;
    head.next = null; // Set the current node's next to null

    return newHead; // Return the new head of the reversed list
}

// Helper function to print the linked list
function printList(head) {
    let current = head;
    const values = [];
    while (current) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original Linked List:"); // 1 -> 2 -> 3 -> 4 -> 5
printList(head);

const reversedHead = reverseLinkedList(head);
console.log("Reversed Linked List:"); // 5 -> 4 -> 3 -> 2 -> 1
printList(reversedHead);


// #Explanation of the Code
// 1. ListNode Class: This class defines the structure of a node in the linked list, containing a value and a pointer to the next node.
// 2. reverseLinkedList Function: This function takes the head of the linked list as an argument and recursively reverses the list.
    // i. If the head is null or has no next node, it returns the head (base case).
    // ii. It recursively calls itself with the next node and stores the new head.
    // iii. It then reverses the link by setting the next node's next pointer to the current node and nullifying the current node's next pointer.
// 3. printList Function: This helper function prints the linked list in a readable format.
// 4. Example Usage: The example creates a linked list with values 1 to 5, prints the original list, reverses it, and then prints the reversed list.
