# Kernel Space and User Space

The kernel operates directly on the hardware, while user space programs run on top of the kernel. To interact with hardware and perform tasks like file I/O, process management, and memory allocation, user space programs use system calls provided by the kernel. These operations typically have side effects.

When you run a program, the kernel creates a process in user space. The CPU handles the actual computation, while the kernel manages system calls and resources.

In essence, a container is designed to run an isolated user space environment.