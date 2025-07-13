# Kernel Space and User Space

The kernel operates directly on the hardware, while user space programs run on top of the kernel. To interact with hardware and perform tasks like file I/O, process management, and memory allocation, user space programs use system calls provided by the kernel. These operations typically have side effects.

When you run a program, the kernel creates a process in user space. The CPU handles the actual computation, while the kernel manages system calls and resources.

In essence, a container is designed to run an isolated user space environment.

# rootfs
If we set aside lower-level components like hardware and UEFI, a running Linux system can be conceptually divided into two main parts: the kernel (including the core vmlinux, kernel modules *.ko, and device drivers), and the user space programs. A container's rootfs is essentially a complete user space environment. In an ideal scenario, a container with sufficient privileges could interact with hardware just like the host system and offer the same capabilities.

# The overview of container tech
However, reality falls short of this ideal. For example, Google's Android system often employs drivers and kernel configurations that are incompatible with standard GNU/Linux. As a result, running fully functional containers on Android devices is notoriously difficult.

That said, containers were never designed primarily to run on such systems. For GNU/Linux, we already have a rich and mature user space environment. Modern container technology focuses more on isolation, security, and observability—achieved through mechanisms like Seccomp and eBPF. Containers are no longer just lightweight alternatives to virtual machines; they are secure, auditable sandboxes optimized for predictable, scalable deployments.