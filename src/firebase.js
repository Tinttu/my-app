import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDGaXPJhxaswEz81D8a-CtNgddZyjFORkQ",
  authDomain: "kemialliset-merkit.firebaseapp.com",
  projectId: "kemialliset-merkit",
  storageBucket: "kemialliset-merkit.firebasestorage.app",
  messagingSenderId: "346744178769",
  appId: "1:346744178769:web:1f87d9507ec94898a3d070",
  measurementId: "G-ZDVJ2JFC1R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
