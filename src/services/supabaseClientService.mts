import { createClient, SupabaseClient } from "@supabase/supabase-js";

class SupabaseClientService {
  private static _instance: SupabaseClientService | null = null;
  private _supabaseClient: SupabaseClient;
  public get supabaseClient(): SupabaseClient {
    return this._supabaseClient;
  }
  public static getInstance(): SupabaseClientService {
    if (!this._instance) {
      this._instance = new SupabaseClientService();
    }
    return this._instance;
  }

  // 생성자에서 초기화 수행
  private constructor(
    private _supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL || "",
    private _supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY ||
      "",
  ) {
    if (!this._supabaseUrl || !this._supabaseAnonKey) {
      throw new Error("Supabase URL or Anon Key is missing");
    }
    // 여기서 초기화 수행
    this._supabaseClient = createClient(
      this._supabaseUrl,
      this._supabaseAnonKey,
    );
  }
}

export default SupabaseClientService;
