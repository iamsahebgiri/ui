import { Loading } from "@sahebg/ui";

export default function Example() {
  return (
    <div className="flex items-center justify-center gap-10">
      <Loading type="spinner" color="secondary" size="xs" />
      <Loading type="line" className="text-wg-red" size="sm" />
      <Loading type="dots" className="text-wg-green" size="md" />
    </div>
  );
}
