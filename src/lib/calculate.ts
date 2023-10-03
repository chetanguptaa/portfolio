export function calculateReadingTime(mdxContent: string, averageSpeed = 200) {
  const textContent = mdxContent.replace(/<[^>]*>/g, "");
  const words = textContent.split(/\s+/);
  const wordCount = words.length;
  const readingTime = wordCount / averageSpeed;
  return readingTime;
}
export function calculateDate(blogDate: string) {
  let newDate = blogDate.split("T");
  let newDateArr = newDate[0].split("-");
  return newDateArr[2] + "/" + newDateArr[1] + "/" + newDateArr[0];
}
