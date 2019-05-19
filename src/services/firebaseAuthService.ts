import firebase from 'firebase/app';

export const setOnAuthStateChangeListener = (cb: (user: firebase.User | null) => any) => {
  firebase.auth().onAuthStateChanged((user) => {
    cb(user);
  });
};

export const getCurrentUser = (): firebase.User|null => {
  return firebase.auth().currentUser;
};

export const signOut = () => {
  firebase.auth().signOut();
};
