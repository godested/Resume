export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getRandomLetter = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 97);

interface Options {
  min: number;
  max: number;
}

export function setRandomInterval(callback: Function, options: Options) {
  let shouldStop = false;

  function createTimeout() {
    const timeout = getRandomInt(options.min, options.max);

    setTimeout(() => {
      callback();
      if (shouldStop) {
        return;
      }

      createTimeout();
    }, timeout);
  }

  createTimeout();

  return {
    clear: () => {
      shouldStop = true;
    },
  };
}
