import {
  collection,
  addDoc,
  getDocs,
  query as QUERY,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { database } from "../../../config/firebase/firebase";
import {
  IAddNewMovieToList,
  TAddNewMovieToListResponse,
  TGetMoviesList,
} from "./firestore.types";

export async function addNewMovieToList(
  payload: IAddNewMovieToList
): Promise<TAddNewMovieToListResponse> {
  const response = await addDoc(collection(database, "movies"), payload);
  return response;
}

export async function getMoviesList(id: string): Promise<TGetMoviesList[]> {
  const results: TGetMoviesList[] = [];
  const query = QUERY(
    collection(database, "movies"),
    where("userId", "==", id)
  );
  const querySnapshot = await getDocs(query);
  querySnapshot.forEach((doc) => {
    results.push(
      Object.assign(doc.data(), { docId: doc.id }) as TGetMoviesList
    );
  });
  return results;
}

export async function deleteMovie(docId: string): Promise<void> {
  await deleteDoc(doc(database, "movies", docId));
}
