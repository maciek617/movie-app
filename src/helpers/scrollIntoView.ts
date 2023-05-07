export const scrollIntoView = (element: string) => {
  const scrollTo = document.getElementById(element);
  scrollTo?.scrollIntoView({
    behavior: 'smooth',
    inline: 'nearest',
    block: 'start',
  });
};
