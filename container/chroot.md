# Chroot
Chroot stands for "change root." It was introduced in Unix systems to change the apparent root directory for a running process and its children. Unlike Windows, which uses drive letters like C:\ or D:\, Linux has a single root directory `/`, and everything is mounted beneath it. When a process accesses an absolute path, it starts from `/`.

With chroot, you can change the root directory for a process, restricting its view and access to only the files and directories under the new root. This isolation is a key feature of Linux containers.

For example, consider the program `cat`, which is linked to several libraries:
```
linux-vdso.so.1 (0x0000ffffaba1f000)
libc.so.6 => /lib/aarch64-linux-gnu/libc.so.6 (0x0000ffffab7e0000)
/lib/ld-linux-aarch64.so.1 (0x0000ffffab9d0000)
```
(*vdso is a virtual dynamic shared object provided by the kernel.)

If you run `cat` on the host system, it loads libraries from `/lib/aarch64-linux-gnu/libc.so.6` and `/lib/ld-linux-aarch64.so.1`. If these libraries don't match what `cat` expects, it may fail to run. However, in a chroot environment, `cat` only sees and loads libraries from the new root directory, unaffected by the host's libraries.

This is why you can run Debian, Alpine, or Arch Linux... (and so on) containers on hosts with different distributions, and even run Linux containers on Android devices. In essence, chroot makes the entire root filesystem act like a "statically linked" environment, ensuring compatibility and isolation.

# The chroot system call
The chroot() system call changes the root directory of the calling process to a specified path. It was designed to run only with superuser privileges(was it really more secure?). But nowadays, you can also use it in user namespaces, which allow unprivileged users to create isolated environments.      
It's very simple to use, just like this:
```c
// Include necessary headers.
chroot("/new_root");
chdir("/");
char *argv[] = {"/bin/bash", NULL};
execv(argv[0], argv);
```