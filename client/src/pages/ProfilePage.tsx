import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);

  return (
    <div>
      <div>{JSON.stringify(profile)}</div>

      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        LogOut
      </button>
    </div>
  );
}

export default ProfilePage;
