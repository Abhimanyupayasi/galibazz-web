export async function GET() {
  const adsTxt = `
google.com, pub-4665029971539939, DIRECT, f08c47fec0942fa0
`;

  return new Response(adsTxt.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
