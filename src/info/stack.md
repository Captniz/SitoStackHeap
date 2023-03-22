# Stack

## Description

Stack Memory is the Static Memory Allocation Scheme where all the function calls, primitive data values specific to a method and references to the objects in the heap memory are stored.

Compared to heap, stack is only used for the execution of a single thread versus being globally accessible and shared with all threads. Stack memory uses a LIFO (last-in first-out) structure with each stack containing method specific values. When the method ends, the block becomes erased and is available for the next method. The values in the stack exist for as long as the function that created them is in execution. The size of the stack memory is fixed and cannot grow or shrink once created.

## Example

```java
public class Main {
  public static int addOne(int input) {
    return input + 1;
  }

  public static int addTwo(int input) {
    return input + 2;
  }

  public static void main(String[] args) {
    int x = 0;

    x = addOne(x);
    x = addTwo(x);
  }
}
```

1. When the program is executed, the main method is executed first by the JVM. When the main method is called, a block is allocated for it in the call stack.
2. The main method contains one primitive value x. This primitive value is stored in the memory block allocated for the main method.
3. When the addOne method is called from the main method, a new block for addOne method is allocated in the stack memory.
4. The variables specific to the method are created and stored in the allocated memory block. Upon the completion of the execution of the method, the value is returned to the calling method(here it is the main method), and the block is removed from the call stack.
5. Similarly, when the addTwo method is called, a new block is allocated for it, and the variables are created and stored. When the method finishes execution, the value is returned to the calling method, and the block is cleared.
6. Finally, the main method completes its execution, and the memory block corresponding to main method is cleared from the stack.

### Error

As mentioned earlier, stack memory is limited in size and cannot be enlarged or shrunk once created. Therefore, if we use all of the stack memory, there will be no space left for upcoming method calls, and we will get the StackOverflowError.

## Stack & Heap summary

| Property   | Stack                            | Heap                   |
| ---------- | -------------------------------- | ---------------------- |
| Size       | Smaller                          | Bigger                 |
| Order      | LIFO                             | No order               |
| Speed      | Faster (LIFO)                    | Slower                 |
| Resizing   | NOT Allowed                      | Allowed                |
| Allocation | Relative to methods              | Garbage collector      |
| Storage    | Method values, object references | Objects and classes    |
| Exception  | StackOverflowError               | OutOfMemoryError       |
| Thread     | New stack for every thread       | Shared between threads |
| Scope      | Thread specific                  | Accessible by anyone   |
| Lifetime   | Short                            | From start to end      |

## Sources

- [1](https://www.azul.com/blog/what-is-java-heap-size/)
- [2](https://www.scaler.com/topics/java/heap-memory-and-stack-memory-in-java/)
- [3](https://www.javatpoint.com/stack-vs-heap-java)
- [4](https://www.javatpoint.com/memory-management-in-java)
