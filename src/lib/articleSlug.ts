export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[àáâäãåā]/g, 'a')
    .replace(/[èéêëē]/g, 'e')
    .replace(/[ìíîïī]/g, 'i')
    .replace(/[òóôöõōø]/g, 'o')
    .replace(/[ùúûüū]/g, 'u')
    .replace(/[ýÿŷ]/g, 'y')
    .replace(/[ñń]/g, 'n')
    .replace(/[çć]/g, 'c')
    .replace(/[ß]/g, 'ss')
    .replace(/[æ]/g, 'ae')
    .replace(/[œ]/g, 'oe')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getSlugFromTitle(title: string): string {
  return createSlug(title);
}