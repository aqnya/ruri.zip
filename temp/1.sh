UNAME_ARCH=$(uname -m)
case ${UNAME_ARCH} in
armv7* | armv8l) CPU_ARCH="armhf" ;;
armv[1-6]*) CPU_ARCH="armv7" ;;
aarch64 | armv8* | arm64 | arm*) CPU_ARCH="aarch64" ;;
x86_64 | amd64) CPU_ARCH="x86_64" ;;
i*86 | x86) CPU_ARCH="i386" ;;
risc*) CPU_ARCH="riscv64" ;;
s390*) ARCH_TYPE="s390x" ;;
ppc*) ARCH_TYPE="ppc64le" ;;
loong*) ARCH_TYPE="loongarch64" ;;
*) CPU_ARCH="" ;;
esac
if [ -z "${CPU_ARCH}" ]; then
        echo "Cannot detect CPU architecture"
        exit 1
fi
tty_out() {
  for i in $(seq 1 ${#2}); do
    printf "$(printf "$2" | cut -c $i)"
    sleep $1
  done
  echo
}
ruri_logo1="                _-###-_                "
ruri_logo2="             _##  ***  ##_             "
ruri_logo3="          _##    * * *    ##_          "
ruri_logo4="       ###       * * *       ###       "
ruri_logo5="     ##          * * *          ##     "
ruri_logo6="   #**** _       * * *       _ ****#   "
ruri_logo7="   # * *_ **__   * * *   __**_ * * #   "
ruri_logo8="   #   * _**_ *_ * * * _* _**_ *   #   "
ruri_logo9="   #      **_*  * *** *  *_**      #   "
ruri_logo10="   #          ****+++****          #   "
ruri_logo11="   #      **\`*  * *** *  *\`**      #   "
ruri_logo12="   #   * \`**\` *\` * * * \`* \`**\` *   #   "
ruri_logo13="   # * *\` **\`\`   * * *   \`\`**\` * * #   "
ruri_logo14="   #**** \`       * * *       \` ****#   "
ruri_logo15="     ##          * * *          ##     "
ruri_logo16="       ###       * * *       ###       "
ruri_logo17="         \`##     * * *     ##\`         "
ruri_logo18="           \`##    ***    ##\`           "
ruri_logo19="              \`\`\`-###-\`\`\`              "
init_logo() {
  clear
  for i in $(seq 1 19); do
    eval echo \"\${ruri_logo$i}\"
  done
  printf "\033[0H"
}
update_logo() {
  L=$((19 * $1 / 100))
  if [ x"$L_BK" = x"" ]; then
    L_BK=0
  fi
  printf "\033[32m"
  while [ $L -gt $L_BK ]; do
    L_BK=$((L_BK + 1))
    eval echo \"\${ruri_logo$L_BK}\"
  done
  export L_BK=$L
}
URL="https://mirrors.tuna.tsinghua.edu.cn/lxc-images/images/alpine/edge/arm64/default/20250628_13%3A00/rootfs.tar.xz"
init_logo
tmpfile=$(mktemp)
wget -q --show-progress --progress=dot "$URL" -O ruri.ogg 2>&1 | stdbuf -oL grep "%" | stdbuf -oL sed 's/.* \([0-9.]*%\).*/\1/' | stdbuf -oL cut -d "%" -f 1 | while read -r percent; do
  update_logo $percent
  echo $percent >"$tmpfile"
done
percent=$(cat "$tmpfile")
rm -f "$tmpfile"
if [ "$percent" = "100" ]; then
  printf "\033[0m"
  echo "Download complete!"
else
  printf "\033[31m"
  echo "Download failed!"
fi
