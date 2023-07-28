export const getFetchUrl = (route: string) =>
  `
${
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}`
    : 'htp://localhost:3000'
}/${route}
`;

export const imageUrl = (poster: string) => {
  return `https://image.tmdb.org/t/p/original/${poster}`;
};
