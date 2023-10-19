export const getclasses = (
  styles: { [key: string]: string },
  classNames: string | string[] | undefined
): string => {
  if (!classNames) return '';
  else if (Array.isArray(classNames)) {
    return classNames.map((cls) => styles[cls]).join(' ');
  }
  return classNames;
};
