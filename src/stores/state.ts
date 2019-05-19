export default interface RootState {
  user: firebase.User|null;
  initialized: boolean;
}

export const rootState: RootState = {
  user: null,
  initialized: false,
};
