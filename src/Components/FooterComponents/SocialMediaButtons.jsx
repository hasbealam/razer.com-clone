import { Tooltip, Image } from "@chakra-ui/react";
export function SocialMediaButtons({ icon, iconName, label }) {
  return (
    <Tooltip label={label} placement="bottom-start">
      <Image borderRadius="full" boxSize="35px" src={icon} alt={iconName} />
    </Tooltip>
  );
}
