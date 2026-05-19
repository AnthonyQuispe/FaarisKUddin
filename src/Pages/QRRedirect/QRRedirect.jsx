import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, increment, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function QRRedirect() {
  const { id } = useParams();

  useEffect(() => {
    const trackScan = async () => {
      try {
        const qrRef = doc(db, "qrScans", id);

        await setDoc(
          qrRef,
          {
            scans: increment(1),
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );

        window.location.replace("/");
      } catch (error) {
        console.error("QR tracking failed:", error);

        window.location.replace("/");
      }
    };

    trackScan();
  }, [id]);

  return null;
}
