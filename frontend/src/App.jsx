import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
    UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import FetchButton from "./components/Button";
import Homepage from "./pages/Homepage";
import MedicineList from "./pages/MedicineList";
import MedicineInfo from "./pages/MedicineInfo";

if (!import.meta.env.VITE_SOME_KEY) {
    throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_SOME_KEY;

function PublicPage() {
    return (
        <>
            <h1 className="underline">Public page</h1>
            <a href="/protected">Go to protected page</a>
        </>
    );
}

function ProtectedPage() {
    return (
        <>
            <h1>Protected page</h1>
            <UserButton />
            <FetchButton />
        </>
    );
}

function ClerkProviderWithRoutes() {
    const navigate = useNavigate();

    return (
        <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/medicine-info" element={<MedicineInfo />} />
                <Route path="/medicines" element={<MedicineList />} />
                <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
                <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
                <Route
                    path="/protected"
                    element={
                        <>
                            <SignedIn>
                                <ProtectedPage />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />
            </Routes>
        </ClerkProvider>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ClerkProviderWithRoutes />
        </BrowserRouter>
    );
}

export default App;
