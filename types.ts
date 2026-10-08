export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      contact_requests: {
        Row: {
          city: string | null
          created_at: string | null
          email: string
          id: string
          message: string | null
          name: string
          need_type: string | null
          organisation_name: string | null
          organisation_type: string | null
          phone: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string | null
          email: string
          id?: string
          message?: string | null
          name: string
          need_type?: string | null
          organisation_name?: string | null
          organisation_type?: string | null
          phone?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string | null
          email?: string
          id?: string
          message?: string | null
          name?: string
          need_type?: string | null
          organisation_name?: string | null
          organisation_type?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      organisations: {
        Row: {
          city: string | null
          country: string | null
          created_at: string | null
          id: string
          name: string
          type: Database["public"]["Enums"]["org_type"]
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          id?: string
          name: string
          type?: Database["public"]["Enums"]["org_type"]
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          id?: string
          name?: string
          type?: Database["public"]["Enums"]["org_type"]
        }
        Relationships: []
      }
      payment_intents: {
        Row: {
          amount: number
          created_at: string | null
          currency: string | null
          id: string
          organisation_id: string | null
          provider: string | null
          provider_order_id: string | null
          status: Database["public"]["Enums"]["payment_status"] | null
          subscription_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: string | null
          id?: string
          organisation_id?: string | null
          provider?: string | null
          provider_order_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"] | null
          subscription_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string | null
          id?: string
          organisation_id?: string | null
          provider?: string | null
          provider_order_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"] | null
          subscription_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_intents_organisation_id_fkey"
            columns: ["organisation_id"]
            isOneToOne: false
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_intents_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          name: string | null
          organisation_id: string | null
          phone: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          organisation_id?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          organisation_id?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_organisation_id_fkey"
            columns: ["organisation_id"]
            isOneToOne: false
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          },
        ]
      }
      rfqs: {
        Row: {
          budget_range: string | null
          category: string | null
          contact_email: string
          contact_name: string
          contact_phone: string | null
          created_at: string | null
          description: string | null
          id: string
          organisation_id: string | null
          status: Database["public"]["Enums"]["rfq_status"] | null
          title: string
        }
        Insert: {
          budget_range?: string | null
          category?: string | null
          contact_email: string
          contact_name: string
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          organisation_id?: string | null
          status?: Database["public"]["Enums"]["rfq_status"] | null
          title: string
        }
        Update: {
          budget_range?: string | null
          category?: string | null
          contact_email?: string
          contact_name?: string
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          organisation_id?: string | null
          status?: Database["public"]["Enums"]["rfq_status"] | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "rfqs_organisation_id_fkey"
            columns: ["organisation_id"]
            isOneToOne: false
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          description: string | null
          features: Json | null
          for_type: Database["public"]["Enums"]["plan_for_type"]
          id: string
          name: string
          price_monthly: number
        }
        Insert: {
          description?: string | null
          features?: Json | null
          for_type: Database["public"]["Enums"]["plan_for_type"]
          id?: string
          name: string
          price_monthly: number
        }
        Update: {
          description?: string | null
          features?: Json | null
          for_type?: Database["public"]["Enums"]["plan_for_type"]
          id?: string
          name?: string
          price_monthly?: number
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string | null
          ends_at: string | null
          id: string
          organisation_id: string | null
          plan_id: string | null
          started_at: string | null
          status: Database["public"]["Enums"]["subscription_status"] | null
        }
        Insert: {
          created_at?: string | null
          ends_at?: string | null
          id?: string
          organisation_id?: string | null
          plan_id?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
        }
        Update: {
          created_at?: string | null
          ends_at?: string | null
          id?: string
          organisation_id?: string | null
          plan_id?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_organisation_id_fkey"
            columns: ["organisation_id"]
            isOneToOne: false
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_applications: {
        Row: {
          category_focus: string | null
          city: string | null
          contact_name: string
          created_at: string | null
          email: string
          id: string
          message: string | null
          organisation_name: string
          phone: string | null
          status: Database["public"]["Enums"]["vendor_app_status"] | null
        }
        Insert: {
          category_focus?: string | null
          city?: string | null
          contact_name: string
          created_at?: string | null
          email: string
          id?: string
          message?: string | null
          organisation_name: string
          phone?: string | null
          status?: Database["public"]["Enums"]["vendor_app_status"] | null
        }
        Update: {
          category_focus?: string | null
          city?: string | null
          contact_name?: string
          created_at?: string | null
          email?: string
          id?: string
          message?: string | null
          organisation_name?: string
          phone?: string | null
          status?: Database["public"]["Enums"]["vendor_app_status"] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      org_type:
        | "hospital"
        | "college"
        | "corporate"
        | "builder"
        | "vendor"
        | "other"
      payment_status: "created" | "paid" | "failed"
      plan_for_type: "institution" | "vendor"
      rfq_status: "draft" | "submitted" | "in_review" | "closed"
      subscription_status: "active" | "inactive" | "cancelled"
      user_role: "institution" | "vendor" | "admin"
      vendor_app_status: "new" | "in_review" | "approved" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      org_type: [
        "hospital",
        "college",
        "corporate",
        "builder",
        "vendor",
        "other",
      ],
      payment_status: ["created", "paid", "failed"],
      plan_for_type: ["institution", "vendor"],
      rfq_status: ["draft", "submitted", "in_review", "closed"],
      subscription_status: ["active", "inactive", "cancelled"],
      user_role: ["institution", "vendor", "admin"],
      vendor_app_status: ["new", "in_review", "approved", "rejected"],
    },
  },
} as const
