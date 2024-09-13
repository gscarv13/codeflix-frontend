// This component named loading will be used by default for every page under this subtree
// When waiting for a server component to render, next will display this in place of
// component that is being loaded, without the need to explicitly set "show loading if x is undefined"

export default function Loading() {
  return <div>Loading...</div>;
}
