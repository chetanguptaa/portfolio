export function calculateReadingTime(
  contentLength: number,
  averageSpeed = 200
) {
  const readingTime = contentLength / averageSpeed;
  return readingTime;
}
export function calculateDate(blogDate: string) {
  let newDate = blogDate.split("T");
  let newDateArr = newDate[0].split("-");
  return newDateArr[2] + "/" + newDateArr[1] + "/" + newDateArr[0];
}

export const totalWords = (content: any): number => {
  let totalLength = 0;
  content.forEach((block: any) => {
    if (block.children) {
      block.children.forEach((blockElement: any) => {
        const textContent = blockElement.text?.replace(/<[^>]*>/g, "");
        const words = textContent.split(/\s+/);
        totalLength += words.length;
      });
    }
  });
  return totalLength;
};
