import { Alert, Button } from "@sahebg/ui";

export default function Example() {
  return (
    <Alert title="Alert title" after={<Button variant="link">Button</Button>}>
      Alert content
    </Alert>
  );
}
