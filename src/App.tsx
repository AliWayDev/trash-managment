import { Index } from "./routes/Index";

function App() {
  let token: string | null = 'dsydbgssyrgbgfysutrfbvsyrtfsvrfy';

  return (
    <>
      <Index token={token} />
    </>
  );
}

export default App;
