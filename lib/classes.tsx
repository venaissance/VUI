interface Options {
  extra: string | undefined
}

function scopedClassMaker(prefix: string) {
  return function (name?: string, options?: Options) {
    // name: {hasSider: true, active:false, x: true, y: false}
    const result = [prefix, name].filter(Boolean).join('-');

    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ');
    } else {
      return result;
    }


  };
}

export {scopedClassMaker};
