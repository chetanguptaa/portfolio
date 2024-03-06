export function calculateReadingTime(contentLength: number, averageSpeed = 200) {
  const readingTime = contentLength / averageSpeed;
  return readingTime;
}
export function calculateDate(blogDate: string) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const date = new Date(blogDate);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
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
