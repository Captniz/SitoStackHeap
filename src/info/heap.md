# Heap

## Description

The Java heap is the area of memory used to store dynamic objects instantiated by applications running on the JVM.
When the JVM is started, heap memory is created and any objects in the heap can be shared between threads as long as the application is running.
Heap does not follow any order and dynamically manages memory blocks.

## Pros and cons of heap size

The size of heap memory is large when compared to stack. The unused objects in the heap memory are cleared automatically by the Garbage Collector in Java.

### Large heap

**A larger Java memory heap:**

- Does not require working data to be divided across multiple JVM instances
- Allows more objects to be created
- Takes longer to fill
- Allows the application to run longer between garbage collection (GC) events, but they are slower

### Small heap

**A smaller Java memory heap**

- Holds fewer objects
- Fills more quickly
- Is garbage collected more frequently (but the pauses are shorter)
- May lead to out-of-memory errors

## Composition of the heap

The heap memory can be divided into three parts:

1. New or Young Generation
2. Old or Tenured Generation
3. Permanent Generation

Young generation is the memory space where all the newly created objects are allocated. New generation in turn has 3 parts:

1. Eden
2. Survivor1
3. Survivor2

### Eden

All the newly created objects are allocated in **Eden space**. When the Eden is full, a minor garbage collection happens, and the live objects are moved to Survivor1 and then to Survivor2.

### Survivors

The **Survivor1 and Survivor2** contains objects that survived the minor garbage collection. Objects that survive Eden, Survivor1 and Survivor2 are moved to Old generation. In Old generation the garbage is collected less frequently, so Survivor1 and Survivor2 spaces are used to make sure that only long survived objects are moved to tenured generation.

### Old generation

Age is set for the objects allocated in young generation. When that age is met, those live objects are moved to the **old generation**. Generally, long-surviving objects are stored in the old generation. A major garbage collection runs on the old generation to collect dead objects.

### Permanent generation

**Permanent generation** is used by JVM to store metadata about the classes and methods. JVM also stores Java standard libraries in permanent generation. This space is cleaned as a part of full garbage collection.

## Example

```java
import java.util.ArrayList;
import java.util.List;

public class HeapMemory {

  public static void main(String[] args) {
    int x = 10;

    List<Integer> list = new ArrayList<>();
    list.add(1);
    list.add(2);
    list.add(3);
  }
}
```

In the above example, the variable x is allocated in the stack, whereas the object list is allocated memory in the heap. Only the reference to the list object is stored in the stack memory alongside x.

### Error

OutOfMemoryError is thrown when there is no more space left in the heap to create and store a new object. This happens when the Garbage Collector could not freeup any space to store new objects.

## Sources

- [1](https://www.azul.com/blog/what-is-java-heap-size/)
- [2](https://www.scaler.com/topics/java/heap-memory-and-stack-memory-in-java/)
- [3](https://www.javatpoint.com/stack-vs-heap-java)
- [4](https://www.javatpoint.com/memory-management-in-java)
