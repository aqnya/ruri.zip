---
home: true
title: Ruri - 轻量级、用户友好的 Linux 容器实现
tagline: 一个压缩的📦 Linux 容器运行时，速度飞快🚀
heroImage: /images/logo.png
heroText: ruri

actions:
  - text: 仓库
    link: https://github.com/RuriOSS/ruri
    type: primary
  - text: 完整用法
    link: https://github.com/RuriOSS/ruri/blob/main/doc/USAGE.md
    type: primary
  


footer: MIT 许可 | 版权所有 (c) 2022-2025 RuriOSS
---

> **注意**：本文档尚未翻译。欢迎贡献！

## 亮点

- **强大的功能**
  - 支持 chroot、带 pivot_root 的 unshare、能力控制、cgroups、no_new_privs、环境/用户/工作目录设置、seccomp 等。
  - 内置 binfmt_misc 和 QEMU，可轻松实现多架构容器。
  - 无根模式（需要用户命名空间）。
  - 灵活的挂载选项：挂载镜像/分区，将挂载点设置为只读或读写。
  - 支持配置文件。

- **超轻量级和零依赖**
  - 无根模式仅需要可选的 `uidmap`；所有其他功能都是内置的。
  - 适用于多种架构的静态链接二进制文件。
  - 非常小的二进制文件大小（使用 upx 甚至小于 200k），但有超过 30 个选项。

- **灵活和跨平台**
  - 可在有根的 Android、物联网、amd64、s390x 等设备上运行，只需要 root 权限。

- **安全设计**
  - 无根容器、安全选项和只读文件系统支持。

- **对初学者简单**
  - 可以直接替代 `chroot`；无需学习每个选项即可轻松使用。

  <p align="center">
  <img src="https://github.com/Moe-hacker/ruri/raw/main/logo/rurifetch.png" alt="" style="width:75%;align: center;">
  </p>

## 关于我们：
&emsp;不是“为什么不用 docker”，而是“什么时候不能用 docker”。
&emsp;ruri 的发音是 `luli`，你也可以用中文或日文称之为 `[瑠璃/琉璃]` ~~(るり)~~。
&emsp;ruri 是轻量级、用户友好的 Linux 容器实现的缩写。
&emsp;ruri 是一个强大的容器实现，几乎可以在任何 Linux 设备上运行，即使内核配置不完整或存储空间极小。

## 获取 ruri

你可以在 [Release](https://github.com/Moe-hacker/ruri/releases/) 中获取适用于 arm64、armv7、armhf、riscv64、i386、loong64、s390x、ppc64le 和 x86_64 设备的 ruri 二进制文件（静态链接）。
或者你可以运行以下命令自动下载 ruri

```sh
. <(curl -sL https://get.ruri.zip/ruri)
```

这将自动将 ruri 二进制文件下载到 `./ruri`。

# 示例用法

```
# 运行 chroot 容器
  sudo ruri /tmp/alpine

# 如你所见，非常简单。

# 关于能力
# 运行特权 chroot 容器
  sudo ruri -p /tmp/alpine

# 如果你想运行特权 chroot 容器，
# 但你不想给容器 cap_sys_chroot 权限
  sudo ruri -p -d cap_sys_chroot /tmp/alpine

# 如果你想运行具有通用权限的 chroot 容器，
# 但你想保留 cap_sys_admin
  sudo ruri -k cap_sys_admin /tmp/alpine

# 关于 unshare
# Unshare 容器的能力选项与 chroot 相同。
# 运行 unshare 容器
  sudo ruri -u /tmp/alpine

# 最后，卸载容器
  sudo ruri -U /tmp/alpine
```

# 手动构建

Ruri 提供了静态链接的二进制文件，但如果你想自己构建，请参阅 [构建](/Build.html)。
