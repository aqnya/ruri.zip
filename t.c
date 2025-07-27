#include "../cprintf/include/cprintf.h"
#include <termios.h>
static char *get_bg_color__(void) {
  /*
   * Only xterm **might** support this.
   * At least, better than nothing.
   * It works with magic on my machine :)
   */
  struct termios old_termios, new_termios;
  tcgetattr(STDERR_FILENO, &old_termios);
  new_termios = old_termios;
  // Don't ask me why, idk QwQ
  new_termios.c_lflag &= ~ICANON;
  new_termios.c_lflag &= ~ECHO;
  tcsetattr(STDERR_FILENO, TCSANOW, &new_termios);
  write(STDERR_FILENO, "\e]11;?\a", strlen("\e]11;?\a"));
  char buf[32];
  // Don't ask me why, idk QwQ
  int n = read(STDERR_FILENO, buf, sizeof(buf) - 1);
  // At least I know this nya~
  // restore the old termios settings.
  tcsetattr(STDERR_FILENO, TCSANOW, &old_termios);
  if (n > 0) {
    buf[n] = '\0';
    int j = 0;
    char *p = strstr(buf, "rgb:");
    if (!p) {
      return NULL;
    }
    p += strlen("rgb:");
    char *ret = malloc(32);
    for (int i = 0; i < strlen(p); i++) {
      if (p[i] >= 32 && p[i] <= 126) {
        ret[j++] = p[i];
        ret[j] = '\0';
      }
    }
    return ret;
  } else {
    return NULL;
  }
}
bool is_dark_mode(void) {
  char *bg_color = get_bg_color();
  if (!bg_color)
    return false;
  char *r_str = strtok(bg_color, "/");
  char *g_str = strtok(NULL, "/");
  char *b_str = strtok(NULL, "/");
  if (!r_str || !g_str || !b_str) {
    return false;
  }
  unsigned int r = (unsigned int)strtol(r_str, NULL, 16);
  unsigned int g = (unsigned int)strtol(g_str, NULL, 16);
  unsigned int b = (unsigned int)strtol(b_str, NULL, 16);
  // ITU-R BT.601 luminance.
  // It works, why?
  // Y = 0.299*R + 0.587*G + 0.114*B
  double luminance = r * 0.299 + g * 0.587 + b * 0.114;
  return (luminance <= 32768.0);
}
int main(void) {
  if (is_dark_mode()) {
    printf("Dark mode, have a good night!\n");
  } else {
    printf("Light mode, enjoy your day!\n");
  }
  return 0;
}