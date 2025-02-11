import { Tag } from "@sahebg/ui";

export default function Example() {
  return (
    <Tag
      closable
      onClose={(e: React.MouseEvent) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        alert("Custom onClose callback with preventDefault()");
      }}
    >
      Tag
    </Tag>
  );
}
