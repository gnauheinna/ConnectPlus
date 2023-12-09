// postContext.js
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { useUser } from "./UserContext";

// Represents the shape of the context value
export type Journey = {
  journeyID: string;
  journeyTitle: string;
  authorName: string;
  Intro: string;
};

interface SavedJourneyContextValue {
  savedJourneys: Journey[];
  setSavedJourneys: (value: Journey[]) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const SavedJourneyContext = createContext<SavedJourneyContextValue | undefined>(
  undefined
);
const SavedJourneyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user, setUser } = useUser();
  const currentUserID = user.userID;
  const db = getFirestore();
  if (getApps() == null) {
    const app = initializeApp();
  }
  const [savedJourneys, setSavedJourneys] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSavedJourneys = async () => {
      try {
        // get reference of Firestore document
        console.log("savedJourney Context userid: ", currentUserID);
        const savedjourneyDocRef = doc(db, "savedJourneys", currentUserID);
        // get instance of document
        const savedjourneySnapshot = await getDoc(savedjourneyDocRef);

        if (savedjourneySnapshot.exists()) {
          // get savedJourney data
          const SJData = savedjourneySnapshot.data();
          if (SJData) {
            // updated SavedJourneys with array
            setSavedJourneys(SJData.savedjourneys);
            setLoading(false);
          }
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    if (currentUserID != "") {
      loadSavedJourneys();
    }
  }, [currentUserID]);

  return (
    <SavedJourneyContext.Provider
      value={{ savedJourneys, setSavedJourneys, setLoading, loading }}
    >
      {children}
    </SavedJourneyContext.Provider>
  );
};

const useSavedJourneyContext = () => {
  const context = useContext(SavedJourneyContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

export { useSavedJourneyContext, SavedJourneyContext, SavedJourneyProvider };
