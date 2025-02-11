import { Checkbox } from "@sahebg/ui";

export default function Example() {
  return (
    <div className="m-auto w-fit text-left">
      <Checkbox
        description="description"
        helperText="Helper text"
        label="Label"
        required
        tooltip="Tooltip example"
      />
    </div>
  );
}
