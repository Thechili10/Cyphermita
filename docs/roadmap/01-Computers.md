# Stage 01 — Computer Fundamentals

> **Prerequisites:** None  
> **Estimated Time:** 1–2 weeks  
> **Goal:** Understand how computers and operating systems work under the hood before touching security tools.

---

## 🎯 Learning Objectives
* Understand hardware components and how data moves through a system.
* Differentiate between Windows and Linux architectures and filesystems.
* Master essential command-line navigation and file management.
* Set up and configure virtual machines safely.

---

## 1. Hardware & Software Fundamentals
Before you can secure or break a system, you must understand its anatomy.

* **CPU & Memory (RAM):** The processor executes instructions fetched from volatile memory. Security concepts like buffer overflows depend entirely on how memory stacks and heaps are managed.
* **Storage (HDD vs. SSD):** Non-volatile storage where operating systems, files, and logs live. Critical for digital forensics and data recovery.
* **Kernel vs. User Space:** The core boundary in modern operating systems. The kernel has unrestricted access to hardware, while user applications run in an isolated space with restricted privileges.
