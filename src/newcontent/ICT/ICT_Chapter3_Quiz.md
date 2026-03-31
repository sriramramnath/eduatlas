# IGCSE ICT — Chapter 3: Memory and Processors
## Quiz Section (Pearson Edexcel Specification)

---

## SECTION A: Multiple Choice Questions

### Question 1
Which component of the CPU performs arithmetic calculations and logical comparisons?

A) Control Unit  
B) Arithmetic Logic Unit (ALU)  
C) Register  
D) Cache  

**Answer: B)**

**Explanation:** The ALU performs all mathematical operations (addition, subtraction, multiplication, division) and logical comparisons (AND, OR, NOT, equal to, greater than). The Control Unit coordinates operations but doesn't perform calculations.

---

### Question 2
What is the correct order of the CPU instruction cycle?

A) Execute – Fetch – Decode  
B) Decode – Fetch – Execute  
C) Fetch – Decode – Execute  
D) Fetch – Execute – Decode  

**Answer: C**

**Explanation:** The CPU follows this cycle: first it fetches the instruction from memory, then it decodes the instruction to understand what operation to perform, and finally it executes the instruction.

---

### Question 3
Which type of memory is volatile and loses its contents when power is removed?

A) ROM  
B) RAM  
C) Flash memory  
D) Hard disk drive  

**Answer: B**

**Explanation:** RAM (Random Access Memory) is volatile memory that requires constant power to retain data. When power is removed, all data in RAM is lost. ROM, flash memory, and HDDs are non-volatile and retain data without power.

---

### Question 4
What is the purpose of cache memory in a computer system?

A) To provide long-term storage for files  
B) To store the operating system permanently  
C) To provide fast access to frequently used data and instructions  
D) To connect the CPU to external devices  

**Answer: C**

**Explanation:** Cache memory is located close to or inside the CPU and stores frequently accessed data and instructions. This reduces the time the CPU spends waiting for data from slower RAM.

---

### Question 5
A processor with four cores is described as:

A) Single-core  
B) Dual-core  
C) Quad-core  
D) Octa-core  

**Answer: C**

**Explanation:** A quad-core processor contains four independent processing units (cores). Dual-core has two cores, octa-core has eight cores, and single-core has one core.

---

### Question 6
Which storage device has NO moving parts?

A) Hard Disk Drive (HDD)  
B) Solid State Drive (SSD)  
C) DVD drive  
D) Blu-ray drive  

**Answer: B**

**Explanation:** SSDs use flash memory chips with no moving mechanical parts. HDDs have spinning platters and moving read/write heads. Optical drives (DVD, Blu-ray) have spinning discs and moving laser assemblies.

---

### Question 7
What does CPU clock speed measure?

A) The amount of data the CPU can store  
B) The number of instruction cycles per second  
C) The temperature of the CPU  
D) The amount of RAM installed  

**Answer: B**

**Explanation:** Clock speed, measured in Hertz (Hz), indicates how many cycles the CPU can perform per second. A 3GHz processor theoretically completes 3 billion cycles per second.

---

### Question 8
What happens when a computer runs out of available RAM?

A) The computer crashes immediately  
B) Virtual memory is used to extend available memory  
C) The CPU stops processing  
D) Data is permanently deleted  

**Answer: B**

**Explanation:** When RAM is full, the operating system moves inactive data to virtual memory (a swap file on the hard drive). This frees RAM for active applications, though performance is reduced.

---

### Question 9
Which memory type is fastest?

A) L1 Cache  
B) RAM  
C) SSD  
D) HDD  

**Answer: A**

**Explanation:** L1 cache is located directly inside the CPU core and is the fastest memory type. The speed hierarchy from fastest to slowest is: Registers → L1 Cache → L2 Cache → L3 Cache → RAM → SSD → HDD.

---

### Question 10
What is the function of the Control Unit in a CPU?

A) Performing mathematical calculations  
B) Storing data permanently  
C) Coordinating and controlling all CPU operations  
D) Connecting to external networks  

**Answer: C**

**Explanation:** The Control Unit directs and coordinates all CPU operations, managing the fetch-decode-execute cycle, sending control signals, and directing data flow between components. The ALU performs calculations.

---

### Question 11
What is virtual memory?

A) Memory that exists only in the user's imagination  
B) Storage space used as temporary RAM  
C) A type of ROM  
D) Memory used specifically for graphics  

**Answer: B**

**Explanation:** Virtual memory uses part of the hard drive or SSD as temporary RAM when physical RAM is full. Data is "swapped" between RAM and storage, allowing systems to run more programs than physical RAM would permit.

---

### Question 12
Which is NOT an advantage of SSDs over HDDs?

A) Faster read/write speeds  
B) No moving parts  
C) Lower cost per GB  
D) Quieter operation  

**Answer: C**

**Explanation:** SSDs are faster, more durable (no moving parts), and quieter than HDDs. However, SSDs have a higher cost per GB compared to HDDs, which is a disadvantage, not an advantage.

---

---

## SECTION B: True/False Questions

### Statement 1
**The ALU is responsible for coordinating the fetch-decode-execute cycle.**

**Answer: False**

**Correction:** The Control Unit, not the ALU, coordinates the fetch-decode-execute cycle. The ALU performs arithmetic and logical operations. The Control Unit manages instruction flow and sends control signals.

---

### Statement 2
**Increasing the amount of RAM in a computer can improve its performance when running multiple applications.**

**Answer: True**

**Explanation:** More RAM allows more applications to run simultaneously without relying on slower virtual memory. This reduces paging (swapping data between RAM and storage), improving overall system responsiveness.

---

### Statement 3
**L3 cache is faster than L1 cache.**

**Answer: False**

**Correction:** L1 cache is the fastest cache type, located directly inside the CPU core. L3 cache is larger but slower than both L1 and L2 cache. The speed order is L1 > L2 > L3 > RAM.

---

### Statement 4
**A dual-core processor can execute two instructions simultaneously.**

**Answer: True**

**Explanation:** A dual-core processor has two independent processing units that can execute instructions simultaneously. This enables true parallel processing and better multitasking compared to a single-core processor.

---

### Statement 5
**ROM is used to store the BIOS on a computer motherboard.**

**Answer: True**

**Explanation:** The BIOS (Basic Input/Output System) is stored on a ROM chip on the motherboard. This firmware initialises hardware during boot and provides the interface between hardware and operating system.

---

### Statement 6
**SSDs are more resistant to physical shock than HDDs.**

**Answer: True**

**Explanation:** SSDs have no moving parts, making them more resistant to drops and physical shock. HDDs have spinning platters and read/write heads that can be damaged by movement during operation.

---

### Statement 7
**Virtual memory is faster than physical RAM.**

**Answer: False**

**Correction:** Virtual memory uses storage (HDD/SSD) which is much slower than physical RAM. Virtual memory is a backup when RAM is full, but accessing virtual memory causes significant delays compared to RAM access.

---

### Statement 8
**Registers are the smallest but fastest memory locations in a computer.**

**Answer: True**

**Explanation:** Registers are tiny memory locations directly inside the CPU, holding only a few bytes each. They are the fastest memory type, accessed instantly by the CPU for immediate operations.

---

### Statement 9
**DDR5 RAM is compatible with any motherboard.**

**Answer: False**

**Correction:** RAM must match the motherboard's specifications. DDR5 RAM requires a motherboard designed for DDR5. Different DDR generations (DDR3, DDR4, DDR5) are physically different and not interchangeable.

---

### Statement 10
**A computer with 8GB RAM can only run programs totalling 8GB in size.**

**Answer: False**

**Correction:** Virtual memory allows computers to run programs requiring more memory than physical RAM. The operating system swaps data between RAM and storage, though performance decreases when relying heavily on virtual memory.

---

### Statement 11
**Higher clock speed always means better CPU performance.**

**Answer: False**

**Correction:** While higher clock speed generally improves performance, other factors like number of cores, cache size, and CPU architecture also significantly affect performance. A slower multi-core processor can outperform a faster single-core processor in many tasks.

---

### Statement 12
**Data stored in RAM is lost when the computer is turned off.**

**Answer: True**

**Explanation:** RAM is volatile memory—it requires constant power to retain data. When the computer is turned off, all data in RAM is lost. This is why users must save work to non-volatile storage (SSD/HDD) before shutting down.

---

---

## SECTION C: Short Answer Questions

### Question 1 (1 mark)
**State one function of the Arithmetic Logic Unit (ALU).**

**Mark Scheme Answer:**
Any one of the following:
- Performs arithmetic calculations (addition, subtraction, etc.) [1 mark]
- Performs logical comparisons (AND, OR, NOT) [1 mark]
- Compares values (equal to, greater than, less than) [1 mark]
- Performs mathematical operations [1 mark]

---

### Question 2 (2 marks)
**Explain the difference between RAM and ROM.**

**Mark Scheme Answer:**
- RAM is volatile (loses data without power); ROM is non-volatile (retains data) [1 mark]
- RAM can be read from and written to; ROM is primarily read-only [1 mark]
- RAM is used for running programs; ROM stores permanent firmware/BIOS [1 mark]

*Award up to 2 marks for clear distinction between the two types of memory.*

---

### Question 3 (2 marks)
**Describe two advantages of having more RAM in a computer.**

**Mark Scheme Answer:**
Any two advantages:
- Can run more applications simultaneously [1 mark]
- Less reliance on slow virtual memory [1 mark]
- Better performance with large files/programs [1 mark]
- Reduced system lag/freezing [1 mark]
- Faster multitasking between applications [1 mark]

---

### Question 4 (3 marks)
**Explain how cache memory improves CPU performance.**

**Mark Scheme Answer:**
- Cache stores frequently used data and instructions close to the CPU [1 mark]
- Cache is much faster than accessing RAM [1 mark]
- Reduces the time CPU waits for data (fewer cache misses) [1 mark]
- Multiple levels (L1, L2, L3) provide different speed/capacity trade-offs [1 mark]
- Allows CPU to continue processing while fetching data [1 mark]

*Award up to 3 marks for explanation of cache function and performance benefits.*

---

### Question 5 (3 marks)
**Compare Solid State Drives (SSDs) with Hard Disk Drives (HDDs). Include speed, durability, and cost.**

**Mark Scheme Answer:**
**Speed:**
- SSDs are faster than HDDs for reading and writing data [1 mark]
- SSDs have faster boot times and application loading [1 mark]

**Durability:**
- SSDs have no moving parts, making them more durable [1 mark]
- HDDs have mechanical parts susceptible to damage from drops/movement [1 mark]

**Cost:**
- SSDs cost more per GB than HDDs [1 mark]
- HDDs offer more storage for lower cost [1 mark]

*Award up to 3 marks for balanced comparison covering speed, durability, and cost.*

---

### Question 6 (4 marks)
**Explain how a multi-core processor can improve computer performance.**

**Mark Scheme Answer:**
- Multi-core processors have multiple independent processing units [1 mark]
- Each core can execute instructions simultaneously (parallel processing) [1 mark]
- Enables true multitasking—different cores handle different tasks [1 mark]
- Better performance for multi-threaded applications designed to use multiple cores [1 mark]
- Background tasks can run on separate cores without slowing foreground tasks [1 mark]
- More efficient than increasing clock speed alone (less heat, same performance) [1 mark]

*Award up to 4 marks for explanation of multi-core processor advantages.*

---

### Question 7 (4 marks)
**A computer is running slowly. The user has 4GB RAM and a hard disk drive. Suggest two upgrades that would improve performance and explain why each would help.**

**Mark Scheme Answer:**
**Upgrade 1: Increase RAM**
- Adding more RAM (e.g., to 8GB or 16GB) [1 mark]
- Reduces reliance on virtual memory [1 mark]
- More programs can run simultaneously without slowdown [1 mark]

**Upgrade 2: Replace HDD with SSD**
- SSD provides much faster data access [1 mark]
- Faster boot times and application loading [1 mark]
- Virtual memory on SSD is faster than on HDD [1 mark]

**Justification:**
- 4GB RAM is minimal for modern systems; virtual memory overuse causes slowdown [1 mark]
- HDD is slowest component; SSD upgrade provides most noticeable improvement [1 mark]

*Award up to 4 marks for two appropriate upgrades with explanations.*

---

### Question 8 (4 marks)
**Describe the fetch-decode-execute cycle of a CPU.**

**Mark Scheme Answer:**
**Fetch:**
- CPU retrieves instruction from memory address stored in Program Counter [1 mark]
- Instruction copied to Instruction Register via data bus [1 mark]

**Decode:**
- Control Unit interprets the instruction [1 mark]
- Determines what operation to perform and what data is needed [1 mark]

**Execute:**
- ALU performs the required operation (calculation or comparison) [1 mark]
- Results stored in registers or written back to memory [1 mark]
- Program Counter updated to point to next instruction [1 mark]

*Award up to 4 marks for clear description of all three stages with appropriate detail.*

---

## Mark Summary

| Section | Questions | Marks Available |
|---------|-----------|-----------------|
| MCQs | 12 | 12 |
| True/False | 12 | 12 |
| Short Answer | 8 | 23 |
| **Total** | **32** | **47** |

---

*These quiz questions are designed to test understanding of the Pearson Edexcel IGCSE ICT specification for Chapter 3: Memory and Processors. Questions reflect exam-style format and mark scheme requirements.*
