type TranslatedText = {
  en?: string;
  ar?: string;
  [key: string]: unknown;
};

export function returnApiFieldTranslated<T>(data: T, key: keyof T): string | undefined {
  const field = data[key] as TranslatedText | undefined;

  return field?.en || field?.ar || 'Missing translation';
}
