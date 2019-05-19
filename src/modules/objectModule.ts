export const objectToArrayWithKey = (obj: object): object[] => {
  return Object.entries(obj).map(([key, value]) => ({key, ...value}));
};
