import { PlusIcon } from "@iconicicons/react";
import { Badge } from "@sahebg/ui";

export default function Example() {
  return (
    <Badge before={<PlusIcon />} after={<PlusIcon />}>
      Label
    </Badge>
  );
}
