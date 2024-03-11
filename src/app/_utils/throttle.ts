export const throttle = <T extends (...args: any[]) => void>(
    callback: T,
    delay: number
  ) => {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback(...args);
      }
    };
  };
  