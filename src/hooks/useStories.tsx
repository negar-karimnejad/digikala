"use client";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useStories() {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStories() {
      try {
        const response: AxiosResponse<any[]> = await axios.get("/api/stories");
        setStories(response.data);
      } catch (error) {
        setError("Failed to fetch stories");
      } finally {
        setLoading(false);
      }
    }

    fetchStories();
  }, []);

  return { stories, loading, error };
}
