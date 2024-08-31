import React, { useCallback } from "react";
const DISCORD_CHANNEL_URL = "https://discord.gg/d3JhG38eTG";

export default function useMain() {
  const handleClickDiscord = useCallback(() => {
    window.open(DISCORD_CHANNEL_URL);
  }, []);

  return { handleClickDiscord };
}
