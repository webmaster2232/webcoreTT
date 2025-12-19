// server/storage.ts
import { supabase } from "./supabase";
import type { User, InsertUser, Project, InsertProject, ContactSubmission, InsertContactSubmission } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | null>;
  getUserByUsername(username: string): Promise<User | null>;
  createUser(user: InsertUser): Promise<User>;
  getAllProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | null>;
  createProject(project: InsertProject): Promise<Project>;
  deleteProject(id: number): Promise<void>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

export class SupabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | null> {
    const { data, error } = await supabase.from<User>("users").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const { data, error } = await supabase.from<User>("users").select("*").eq("username", username).single();
    if (error) throw error;
    return data;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const { data, error } = await supabase.from<User>("users").insert(insertUser).select().single();
    if (error) throw error;
    return data;
  }

  async getAllProjects(): Promise<Project[]> {
    const { data, error } = await supabase.from<Project>("projects").select("*").order("createdAt", { ascending: false });
    if (error) throw error;
    return data || [];
  }

  async getProject(id: number): Promise<Project | null> {
    const { data, error } = await supabase.from<Project>("projects").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const { data, error } = await supabase.from<Project>("projects").insert(insertProject).select().single();
    if (error) throw error;
    return data;
  }

  async deleteProject(id: number): Promise<void> {
    const { error } = await supabase.from<Project>("projects").delete().eq("id", id);
    if (error) throw error;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const { data, error } = await supabase.from<ContactSubmission>("contactSubmissions").insert(submission).select().single();
    if (error) throw error;
    return data;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    const { data, error } = await supabase.from<ContactSubmission>("contactSubmissions").select("*").order("createdAt", { ascending: false });
    if (error) throw error;
    return data || [];
  }
}

export const storage = new SupabaseStorage();
