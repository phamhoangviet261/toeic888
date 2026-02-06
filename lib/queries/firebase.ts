import { useMutation } from "@tanstack/react-query";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  type User,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

type FirebaseLoginInput =
  | { email: string; password: string }
  | { provider: "google" };

type FirebaseRegisterInput =
  | { email: string; password: string; fullName?: string }
  | { provider: "google" };

const ensurePersistence = async () => {
  await setPersistence(auth, browserLocalPersistence);
};

const loginWithFirebase = async (input: FirebaseLoginInput): Promise<User> => {
  await ensurePersistence();

  if ("provider" in input && input.provider === "google") {
    const credential = await signInWithPopup(auth, googleProvider);
    return credential.user;
  }

  const credential = await signInWithEmailAndPassword(auth, input.email, input.password);
  return credential.user;
};

const registerWithFirebase = async (input: FirebaseRegisterInput): Promise<User> => {
  await ensurePersistence();

  if ("provider" in input && input.provider === "google") {
    const credential = await signInWithPopup(auth, googleProvider);
    return credential.user;
  }

  const credential = await createUserWithEmailAndPassword(
    auth,
    input.email,
    input.password
  );

  if (input.fullName && input.fullName.trim()) {
    await updateProfile(credential.user, { displayName: input.fullName.trim() });
  }

  return credential.user;
};

export const useFirebaseLoginMutation = () =>
  useMutation({
    mutationFn: loginWithFirebase,
  });

export const useFirebaseRegisterMutation = () =>
  useMutation({
    mutationFn: registerWithFirebase,
  });
