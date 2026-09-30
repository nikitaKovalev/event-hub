import { useCallback, useEffect, useState } from "react";

export default function useModal(initialState = false) {
  const [isOpened, setOpened] = useState(initialState);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);
  const toggle = useCallback(() => setOpened(prev => !prev), []);

  useEffect(() => console.log({isOpened}), [isOpened])

  return {isOpened, open, close, toggle}
}