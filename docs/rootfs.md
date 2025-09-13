# Kernel Space and User Space

In a Linux system, the kernel operates directly on the hardware, while user space programs run above the kernel. To perform operations such as file I/O, process management, and memory allocation, user space programs rely on system calls—interfaces provided by the kernel to access hardware and low-level functionality. These operations typically produce side effects in the system.

When a user runs a program, the kernel creates a corresponding process in user space. The CPU handles the computation, while the kernel orchestrates system calls and resource management.

At its core, a container provides an isolated user space environment that runs on top of the host kernel.

# rootfs

Setting aside lower-level components such as hardware and UEFI, a running Linux system can be broadly divided into two main parts:

1. Kernel Space: Includes the core kernel image (vmlinux), kernel modules (*.ko), and device drivers.


2. User Space: Comprises the programs and libraries that users and services interact with.



A container’s rootfs (root filesystem) is essentially a complete snapshot of this user space. In theory, with the right privileges and a compatible kernel, a container can access hardware and system functions almost as fully as the host itself.


# Overview of Container Technology

In practice, however, this ideal is often constrained by hardware, kernel compatibility, and system design. For example, Android devices—despite using the Linux kernel—often include proprietary drivers and customized kernel configurations that are incompatible with standard GNU/Linux containers. As a result, running general-purpose containers on Android is notoriously challenging.

That said, containers were never primarily intended for such platforms. On GNU/Linux systems, we already have a mature and standardized user space environment. Modern container technology focuses less on mimicking a full system and more on isolation, security, and observability. Techniques such as Seccomp and eBPF allow containers to function as secure and controlled sandboxes.

Today, containers are not just lightweight alternatives to virtual machines. They are designed to be secure, auditable, and scalable—optimized for modern deployment workflows in cloud-native and production environments.
