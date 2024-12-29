import { memo } from "react";
import SupabaseClientService from "../../services/supabaseClientService.mts";

const AuthPage = memo(() => {
  const supabasClientService = SupabaseClientService.getInstance();
  async function signInWithKakao() {
    await supabasClientService.supabaseClient.auth.signInWithOAuth({
      provider: "kakao",
    });
  }
  return (
    <div className="container mx-auto">
      <h2>Auth Page</h2>
      <button onClick={signInWithKakao}>카카오 로그인</button>
    </div>
  );
});

AuthPage.displayName = "AuthPage";
export default AuthPage;
