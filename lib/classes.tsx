interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

function scopedClassMaker(prefix: string) {
  return function (name: string | ClassToggles, options?: Options) {
    // name: {hasSider: true, active:false, x: true, y: false}
    const nameObj = (typeof name === 'string') ? {[name]: name} : name;

    const scoped = Object.entries(nameObj)
      .filter(kv => kv[1])
      .map(kv => kv[0])
      .map(name => [prefix, name]
        .filter(Boolean).join('-'))
      .join(' ');

    if (options && options.extra) {
      return [scoped, options.extra].filter(Boolean).join(' ');
    } else {
      return scoped;
    }
  };
}

export {scopedClassMaker};
