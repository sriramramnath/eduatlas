# IGCSE ICT — Chapter 3: Memory and Processors
## Concise Synopsis (Pearson Edexcel Specification)

---

## Quick Reference Summary

### 1. CPU Components

| Component | Function |
|-----------|----------|
| **Control Unit (CU)** | Coordinates all CPU operations; decodes instructions |
| **Arithmetic Logic Unit (ALU)** | Performs calculations and logical operations |
| **Registers** | Small, fast temporary storage within CPU |
| **Buses** | Pathways for data transfer between components |

---

### 2. Fetch-Decode-Execute Cycle

| Step | Action |
|------|--------|
| **Fetch** | Retrieve instruction from memory address |
| **Decode** | Interpret instruction (operation code + operands) |
| **Execute** | Perform the operation (calculation/comparison) |

---

### 3. CPU Performance Factors

| Factor | Description | Impact on Performance |
|--------|-------------|----------------------|
| **Clock Speed** | Cycles per second (GHz) | Higher = more instructions per second |
| **Number of Cores** | Independent processing units | More cores = better multitasking |
| **Cache Size** | Fast memory on CPU | Larger cache = fewer memory delays |

---

### 4. Cache Memory Levels

| Level | Size | Speed | Location |
|-------|------|-------|----------|
| **L1 Cache** | 8-64KB per core | Fastest | Inside CPU core |
| **L2 Cache** | 256KB-2MB per core | Very Fast | Inside/near CPU core |
| **L3 Cache** | 4-64MB shared | Fast | Shared between cores |

---

### 5. Memory Hierarchy

```
FASTEST ← → SLOWEST
    ↓              ↓
Registers → Cache → RAM → SSD → HDD → Cloud
    ↓              ↓
 SMALLEST     ←   →     LARGEST
    ↓              ↓
HIGHEST COST  ←   →   LOWEST COST
```

---

### 6. RAM vs ROM

| Feature | RAM | ROM |
|---------|-----|-----|
| **Full Name** | Random Access Memory | Read-Only Memory |
| **Volatility** | Volatile (loses data without power) | Non-volatile |
| **Function** | Working memory for running programs | Permanent storage for firmware |
| **Read/Write** | Both read and write | Read primarily |
| **Capacity** | 4-128GB typical | Small (MB) |

---

### 7. Storage Comparison

| Storage Type | Speed | Capacity | Durability | Cost/GB |
|--------------|-------|----------|------------|---------|
| **SSD** | Very Fast | 128GB-4TB | High (no moving parts) | Medium |
| **HDD** | Moderate | 500GB-20TB | Moderate (mechanical) | Low |
| **USB Flash** | Moderate | 4GB-1TB | High | Low |
| **Optical (DVD)** | Slow | 4.7-8.5GB | Moderate | Very Low |

---

### 8. Virtual Memory

**Definition:** Technique using storage space as temporary RAM when physical RAM is full.

**How it Works:**
1. RAM fills with active programs
2. Inactive data moved to swap file on storage
3. Data swapped back when needed
4. Process called "paging"

**Advantages:**
- Run more programs than physical RAM allows
- Memory protection between processes

**Disadvantages:**
- Much slower than physical RAM
- Excessive swapping = "thrashing" (slow performance)

---

### 9. Types of RAM

| Type | Characteristics | Use |
|------|-----------------|-----|
| **DRAM** | Needs refreshing; cheaper | Main system memory |
| **SRAM** | No refreshing needed; faster; expensive | CPU cache |
| **DDR SDRAM** | Double data rate; modern standard | Current computers (DDR4, DDR5) |

---

### 10. High-Yield Exam Points

**Must-Know Facts:**

- **CPU is the "brain"** — executes instructions
- **ALU does calculations** — arithmetic and logic
- **Control Unit coordinates** — manages fetch-decode-execute
- **Registers are fastest** — inside CPU, tiny capacity
- **RAM is volatile** — data lost when power off
- **More cores = better multitasking** — parallel processing
- **Cache reduces wait time** — stores frequently used data
- **SSD > HDD for speed** — no moving parts
- **Virtual memory uses storage** — when RAM is full

**Key Numbers to Remember:**

| Measurement | Typical Value |
|-------------|---------------|
| CPU Clock Speed | 2-5 GHz |
| L1 Cache | 8-64KB per core |
| L2 Cache | 256KB-2MB per core |
| L3 Cache | 4-64MB shared |
| RAM Capacity | 4-128GB |
| HDD Speed | 5400-10000 RPM |

---

### 11. Quick Definition List

| Term | Definition |
|------|------------|
| **CPU** | Central Processing Unit; main processor |
| **Clock Speed** | Cycles per second (measured in Hertz) |
| **Core** | Independent processing unit in CPU |
| **Thread** | Sequence of instructions for execution |
| **Cache** | Fast memory between CPU and RAM |
| **RAM** | Random Access Memory; volatile working memory |
| **ROM** | Read-Only Memory; non-volatile firmware storage |
| **Virtual Memory** | Storage space used as temporary RAM |
| **Page Fault** | Error when data not in RAM (in virtual memory) |
| **SSD** | Solid State Drive; flash-based storage |
| **HDD** | Hard Disk Drive; magnetic storage |
| **Bus** | Data pathway between components |
| **BIOS** | Basic Input/Output System in ROM |

---

### 12. Performance Bottlenecks

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Slow multitasking | Insufficient RAM | Add more RAM |
| Slow boot/load times | Slow storage | Upgrade to SSD |
| Slow overall performance | Old CPU | Upgrade CPU/computer |
| Frequent freezing | Virtual memory overuse | Add RAM |

---

### 13. Exam Tips

1. **Use correct terminology** — ALU, Control Unit, registers
2. **Explain the cycle** — fetch, decode, execute in order
3. **Include units** — GHz for speed, GB for capacity
4. **Explain WHY** — more cores enable parallel processing
5. **Mention trade-offs** — speed vs cost vs capacity
6. **Link to performance** — how each factor affects speed

---

*This synopsis provides a condensed overview for quick revision. Refer to detailed notes for comprehensive understanding.*
