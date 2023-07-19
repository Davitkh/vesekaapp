export const customclasshandler = (
  styles: { [key: string]: string },
  cls?: string | string[]
): string => {
  const classCollectors: string[] = [];
  if (!cls) {
    return '';
  } else if (Array.isArray(cls)) {
    cls.forEach((item) => classCollectors.push(styles[item]));
    return classCollectors.join(' ');
  }
  return styles[cls];
};
