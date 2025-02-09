import { PlusIcon } from "@iconicicons/react";
import { Button } from "@sahebg/ui";

export default function Example() {
  return (
    <Button after={<PlusIcon />} before={<PlusIcon />}>
      Button
    </Button>
  );
}
