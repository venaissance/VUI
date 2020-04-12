function combineClassNames(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default combineClassNames;

