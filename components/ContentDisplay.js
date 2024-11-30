import { getDocumentContent } from "@/lib/doc";

const ContentDisplay = async ({ id }) => {
  // get content data by id
  const documentContent = await getDocumentContent(id);
  console.log(documentContent)
  return <div>{id}</div>;
};

export default ContentDisplay;
