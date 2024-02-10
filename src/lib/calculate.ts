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

export const totalWords = (data: any): number => {
  let totalLength = 0;
  data.forEach((block: any) => {
    block.children.forEach((blockElement: any) => {
      totalLength += blockElement.text.length;
    });
  });
  return totalLength;
};
