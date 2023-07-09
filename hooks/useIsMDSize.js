import { useMedia } from "@dwarvesf/react-hooks";

export const useIsMDSize = () => {
  return useMedia(["(max-width: 768px)"], [true], false);
};
