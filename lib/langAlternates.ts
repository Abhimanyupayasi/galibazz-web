// lib/langAlternates.ts

export function langAlternates(path: string) {
  return {
    alternates: {
      languages: {
        en: `/en/${path}`,
        hi: `/hi/${path}`,
      },
    },
  };
}
